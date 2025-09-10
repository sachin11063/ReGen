import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./Ecalculator.css";
import { CarbonContext } from "../carbonContext";

const Ecalculator = () => {
  const { setTotalCarbon } = useContext(CarbonContext);
  const [values, setValues] = useState({
    Fuel_Consumption: "",
    Methane_Emission: "",
    Electricity_Consumption: "",
    Transpotation_Emission: "",
    Fungitive_Emissions: "",
    Water_Usages: "",
    Waste_Management: "",
    Carbon_Sequestration: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fuel = values.Fuel_Consumption * 2.68;
    const MethaneEmi = values.Methane_Emission * 0.015;
    const methane = MethaneEmi * 28;
    const electricity = values.Electricity_Consumption * 0.82;
    const transportation = values.Transpotation_Emission * 0.5 * 2.68;
    const fugitive = values.Fungitive_Emissions * 28;
    const waterUsage = values.Water_Usages * 0.82;
    const wasteManagement = values.Waste_Management * 1.5;
    const carbonSequestration = values.Carbon_Sequestration * 22;
    const Total_carbon_footprint =
      fuel +
      methane +
      electricity +
      transportation +
      fugitive +
      waterUsage +
      wasteManagement -
      carbonSequestration;

    setTotalCarbon(Total_carbon_footprint);
    console.log(Total_carbon_footprint);

    // Send total carbon footprint to the backend
    try {
      await axios.post("http://localhost:3002/addTotalCarbon", {
        TotalCarbon: Total_carbon_footprint,
      });
      console.log("Total carbon footprint saved to the database!");
    } catch (error) {
      console.error("Error saving total carbon footprint:", error);
    }

    navigate("/result");
  };

  return (
    <div className="container form-container mt-4 mb-4 p-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3 offset-1 calculator-column">
            <div className="mb-3 ">
              <label>Fuel Consumption Emission (liters):</label>
              <input
                type="number"
                className="form-control"
                name="Fuel_Consumption"
                onChange={handleChanges}
                value={values.Fuel_Consumption}
              />
            </div>

            <div className="mb-3">
              <label>Methane Emission from Mining:</label>
              <input
                type="number"
                className="form-control"
                name="Methane_Emission"
                onChange={handleChanges}
                value={values.Methane_Emission}
              />
            </div>

            <div className="mb-3">
              <label>Electricity Consumption (kWh):</label>
              <input
                type="number"
                className="form-control"
                name="Electricity_Consumption"
                onChange={handleChanges}
                value={values.Electricity_Consumption}
              />
            </div>
          </div>

          <div className="col-3 offset-1 calculator-column">
            <div className="mb-3">
              <label>Transportation Emission:</label>
              <input
                type="number"
                className="form-control"
                name="Transpotation_Emission"
                onChange={handleChanges}
                value={values.Transpotation_Emission}
              />
            </div>

            <div className="mb-3">
              <label>Fungitive Emissions:</label>
              <input
                type="number"
                className="form-control"
                name="Fungitive_Emissions"
                onChange={handleChanges}
                value={values.Fungitive_Emissions}
              />
            </div>

            <div className="mb-3">
              <label>Water Usages Emissions:</label>
              <input
                type="number"
                className="form-control"
                name="Water_Usages"
                onChange={handleChanges}
                value={values.Water_Usages}
              />
            </div>
          </div>

          <div className="col-3 offset-1 calculator-column">
            <div className="mb-3">
              <label>Waste Management:</label>
              <input
                type="number"
                className="form-control"
                name="Waste_Management"
                onChange={handleChanges}
                value={values.Waste_Management}
              />
            </div>

            <div className="mb-3">
              <label>Carbon Sequestration and Offsetting:</label>
              <input
                type="number"
                className="form-control"
                name="Carbon_Sequestration"
                onChange={handleChanges}
                value={values.Carbon_Sequestration}
              />
            </div>

            <div className="mt-3">
          <button type="submit" className="btn btn-success mt-4">
            Calculate
          </button>
        </div>
        
          </div>
        </div>

      </form>
    </div>
  );
};

export default Ecalculator;
