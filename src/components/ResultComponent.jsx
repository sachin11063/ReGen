import React, { useState, useEffect, useContext } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { CarbonContext } from "../carbonContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./ResultComponent.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
  ArcElement,
} from "chart.js";

// Register chart.js components including the Logarithmic Scale and ArcElement for Pie chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
  ArcElement
);

const ResultComponent = () => {
  const { totalCarbon } = useContext(CarbonContext); // Get the global state
  const [totalEmissions, setTotalEmissions] = useState(totalCarbon / 1000 || ""); // Initialize with totalCarbon in tonnes
  const [chartData, setChartData] = useState(null);
  const [methodDetails, setMethodDetails] = useState("");
  const [bestOption, setBestOption] = useState("");
  const [pieChartsData, setPieChartsData] = useState([]);
  const [bestPieChartOption, setBestPieChartOption] = useState("");

  // Updated Emission neutralization methods (annual neutralization and costs in INR)
  const methods = [
    { name: "Afforestation", neutralizedPerUnit: 0.022, costPerUnit: 50 }, // per tree
    { name: "Renewable Energy", neutralizedPerUnit: 8200, costPerUnit: 300000 }, // per MW/year
    { name: "CCS", neutralizedPerUnit: 100000, costPerUnit: 5000000 }, // per plant/year
    { name: "Methane Capture", neutralizedPerUnit: 14, costPerUnit: 150000 }, // per unit methane
    { name: "Carbon Offsetting", neutralizedPerUnit: 1, costPerUnit: 2000 }, // per credit
  ];

  // Effect to update totalEmissions if totalCarbon changes
  useEffect(() => {
    setTotalEmissions(totalCarbon / 1000 || ""); // Set emissions in tonnes
  }, [totalCarbon]);

  const calculateNeutralization = () => {
    let emissions = parseFloat(totalEmissions);

    if (isNaN(emissions) || emissions <= 0) {
      alert("Please enter a valid carbon emission value.");
      return;
    }

    // Calculate units and cost for each method
    methods.forEach((method) => {
      method.unitsRequired = Math.ceil(emissions / method.neutralizedPerUnit);
      method.totalCost = method.unitsRequired * method.costPerUnit;
      method.totalCostInINR = method.totalCost; // already in INR
    });

    // Identify the best method by minimum total cost (in INR)
    const bestMethod = methods.reduce((prev, curr) =>
      prev.totalCostInINR < curr.totalCostInINR ? prev : curr
    );

    setBestOption(
      `Best Option: ${bestMethod.name} (Total Cost: ₹${bestMethod.totalCostInINR.toLocaleString()})`
    );

    // Prepare chart data for bar chart
    const methodNames = methods.map((m) => m.name);
    const unitsRequired = methods.map((m) => m.unitsRequired);
    const totalCostsINR = methods.map((m) => m.totalCostInINR);

    setChartData({
      labels: methodNames,
      datasets: [
        {
          label: "Units Required",
          data: unitsRequired,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Total Cost (INR)",
          data: totalCostsINR,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });

    const details = methods
      .map(
        (m) =>
          `<li><strong>${m.name}:</strong> Units: ${m.unitsRequired}, Cost: ₹${m.totalCostInINR.toLocaleString()}</li>`
      )
      .join("");
    setMethodDetails(details);

    // Generate multiple pie charts with shuffled methods and costs
    generateMultiplePieCharts(emissions);
  };

  const generateMultiplePieCharts = (emissions) => {
    const numberOfPieCharts = 6; // Number of pie charts to generate
    const pieCharts = [];
    let bestCost = Infinity;
    let bestPieChart = null;

    for (let i = 0; i < numberOfPieCharts; i++) {
      // Shuffle the methods array to pick random methods
      const shuffledMethods = [...methods].sort(() => 0.5 - Math.random());
      const selectedMethods = shuffledMethods.slice(0, 3); // Pick 3 methods

      // Allocate emissions to these 3 methods in random ratios
      const ratios = [Math.random(), Math.random(), Math.random()];
      const totalRatio = ratios.reduce((a, b) => a + b, 0);
      const normalizedRatios = ratios.map((ratio) => ratio / totalRatio);

      let allocatedEmissions = selectedMethods.map((method, idx) => ({
        name: method.name,
        allocated: emissions * normalizedRatios[idx], // Allocating emissions by normalized ratio
      }));

      // Calculate the total cost for this combination
      let totalCost = allocatedEmissions.reduce((sum, allocation) => {
        const method = selectedMethods.find((m) => m.name === allocation.name);
        const unitsRequired = allocation.allocated / method.neutralizedPerUnit;
        return sum + unitsRequired * method.costPerUnit;
      }, 0);

      // Check if this is the best (cheapest) combination
      if (totalCost < bestCost) {
        bestCost = totalCost;
        bestPieChart = allocatedEmissions.map((item) => item.name).join(", ");
      }

      // Prepare pie chart data for this set of 3 methods
      const pieLabels = allocatedEmissions.map((item) => item.name);
      const pieValues = allocatedEmissions.map((item) => item.allocated);

      const pieChartData = {
        labels: pieLabels,
        datasets: [
          {
            data: pieValues,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      };

      // Breakdown of cost (for tooltip display)
      const costBreakdown = allocatedEmissions.map((allocation) => {
        const method = selectedMethods.find((m) => m.name === allocation.name);
        const unitsRequired = allocation.allocated / method.neutralizedPerUnit;
        const cost = unitsRequired * method.costPerUnit;
        return {
          name: method.name,
          allocatedEmissions: allocation.allocated,
          unitsRequired: unitsRequired,
          cost: cost,
        };
      });

      pieCharts.push({ pieChartData, totalCost, costBreakdown });
    }

    setPieChartsData(pieCharts); // Store all generated pie charts
    setBestPieChartOption(
      `Best Combination: ${bestPieChart} with Total Cost: ₹${bestCost.toLocaleString()}`
    );
  };

  const resetForm = () => {
    setTotalEmissions("");
    setChartData(null);
    setMethodDetails("");
    setBestOption("");
    setPieChartsData([]);
    setBestPieChartOption("");
  };

  // Function to download the results as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const content = document.querySelector(".result-container");
  
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      const imgWidth = 595.28; // A4 width in pt
      const pageHeight = 841.89; // A4 height in pt
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
  
      let position = 0;
  
      // Add the image to the PDF, handle multiple pages if the content exceeds one page
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      // Handle multi-page content by adding pages as needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      doc.save("carbon_footprint_report.pdf"); // Save the PDF with the desired name
    });
  };

  
  

  return (
    <div className="container result-container">
      <h2>Total Carbon Footprint: {totalCarbon} kg CO₂</h2>

      <div className="input-container">
        <label htmlFor="totalEmissions">
          Enter Total Carbon Emissions (in tonnes):
        </label>
        <input
          type="number"
          id="totalEmissions"
          value={totalEmissions}
          onChange={(e) => setTotalEmissions(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button className="result-button" onClick={calculateNeutralization}>
          Calculate
        </button>
        <button className="result-button" onClick={resetForm}>
          Reset
        </button>
        <button className="result-button" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      {/* Best Method */}
      {bestOption && <h3>{bestOption}</h3>}

      {/* Method Details */}
      {methodDetails && (
        <div
          className="method-details"
          dangerouslySetInnerHTML={{ __html: methodDetails }}
        />
      )}

      {/* Bar Chart Display */}
      {chartData && (
        <div className="chart-container">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  type: "logarithmic",
                  ticks: {
                    callback: function (value) {
                      return value.toLocaleString();
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}

      {/* Display Multiple Pie Charts in 2 Columns */}
      <div
        className="pie-charts-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", // Align pie charts in 2 columns
        }}
      >
        {pieChartsData.map((chart, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              textAlign: "center",
              width: "30%",
            }}
          >
            <Pie
              data={chart.pieChartData}
              height={150}
              width={150}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        const index = tooltipItem.dataIndex;
                        const costDetail = chart.costBreakdown[index];
                        return `${
                          costDetail.name
                        }: ₹${costDetail.cost.toLocaleString()} (Allocated: ${costDetail.allocatedEmissions.toLocaleString()} tonnes)`;
                      },
                    },
                  },
                },
              }}
            />
            <p>Total Cost: ₹{chart.totalCost.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Best Pie Chart Option */}
      {bestPieChartOption && <h3>{bestPieChartOption}</h3>}
    </div>
  );
};

export default ResultComponent;
