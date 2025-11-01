import React, { useState } from "react";
import InputShare from "./InputShare";
import "./Share.css";

const Share = () => {
  const [shares, setShares] = useState([
    {
      id: 1,
      companyName: "SolarTech Inc.",
      numberOfShares: 100,
      pricePerShare: 50,
      carbonReduction: 5,
      buyQuantity: 0, // To manage input state
    },
    {
      id: 2,
      companyName: "GreenEnergy Co.",
      numberOfShares: 200,
      pricePerShare: 45,
      carbonReduction: 4.5,
      buyQuantity: 0, // To manage input state
    },
    {
      id: 3,
      companyName: "EcoPower Ltd.",
      numberOfShares: 150,
      pricePerShare: 55,
      carbonReduction: 6,
      buyQuantity: 0, // To manage input state
    },
  ]);

  const [userShares, setUserShares] = useState([]);

  const addShare = (newShare) => {
    setShares([...shares, { id: shares.length + 1, ...newShare, buyQuantity: 0 }]);
  };

  const handleInputChange = (id, value) => {
    setShares((prevShares) =>
      prevShares.map((share) =>
        share.id === id ? { ...share, buyQuantity: value } : share
      )
    );
  };

  const handleBuy = (id) => {
    const selectedShareIndex = shares.findIndex((share) => share.id === id);
    const selectedShare = shares[selectedShareIndex];

    const quantity = parseInt(selectedShare.buyQuantity);

    if (quantity > 0 && quantity <= selectedShare.numberOfShares) {
      // Update available shares
      const updatedShares = [...shares];
      updatedShares[selectedShareIndex].numberOfShares -= quantity;
      setShares(updatedShares);

      // Create purchased share object
      const purchasedShare = {
        ...selectedShare,
        numberOfShares: quantity,
      };

      // Add to user shares
      setUserShares((prevUserShares) => [...prevUserShares, purchasedShare]);

      // Reset buy quantity
      handleInputChange(id, 0);
    } else {
      alert("Invalid quantity");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center shareHading">All Shares</h2>
      <div className="row">
        {shares.map((share) => (
          <div className="col-4 mb-3 " key={share.id}>
            <div className="card shareChart">
              <div className="card-body ">
                <h5 className="card-title">{share.companyName}</h5>
                <p className="card-text">Available Shares: {share.numberOfShares}</p>
                <p className="card-text">Price per Share: ${share.pricePerShare}</p>
                <p className="card-text">Carbon Reduction per Share: {share.carbonReduction} kg</p>
                <input
                  type="number"
                  min="1"
                  max={share.numberOfShares}
                  placeholder="Enter quantity"
                  value={share.buyQuantity}
                  onChange={(e) => handleInputChange(share.id, e.target.value)}
                  className="form-control my-2"
                />
                <button
                  className="btn btn-primary "
                  onClick={() => handleBuy(share.id)}
                  disabled={share.numberOfShares <= 0}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render purchased shares after InputShare */}
      <InputShare addShare={addShare} />

      <h2 className="text-center perchase-head">My Purchased Shares</h2>
      <div className="row">
        {userShares.map((share, index) => (
          <div className="col-4 mb-3" key={`${share.id}-${index}`}>
            <div className="card perchase-text p-3">
              <div className="card-body">
                <h5 className="card-title">{share.companyName}</h5>
                <p className="card-text">Purchased Shares: {share.numberOfShares}</p>
                <p className="card-text">Total Price: ${share.pricePerShare * share.numberOfShares}</p>
                <p className="card-text">Carbon Reduction: {share.carbonReduction * share.numberOfShares} kg</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Share
