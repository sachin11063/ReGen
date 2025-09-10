// src/components/UserAccount.jsx
import React from "react";

const UserAccount = ({ userShares }) => {
  return (
    <div className="container">
      <h2 className="text-center">My Shares</h2>
      {userShares.length === 0 ? (
        <p>No shares purchased yet.</p>
      ) : (
        <div className="row">
          {userShares.map((share, index) => (
            <div className="col-4 mb-3" key={`${share.id}-${index}`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{share.companyName}</h5>
                  <p className="card-text">
                    Purchased Shares: {share.numberOfShares}
                  </p>
                  <p className="card-text">
                    Total Price: ${share.pricePerShare * share.numberOfShares}
                  </p>
                  <p className="card-text">
                    Carbon Reduction: {share.carbonReduction * share.numberOfShares} kg
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserAccount;
