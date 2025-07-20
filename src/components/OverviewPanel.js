import React from 'react';

const OverviewPanel = ({ totalGoals, totalAmount }) => {
  return (
    <div className="overview-panel">
      <div className="overview-item">
        <h4>Total Goals</h4>
        <p>{totalGoals}</p>
      </div>
      <div className="overview-item">
        <h4>Total Amount</h4>
        <p>${totalAmount}</p>
      </div>
    </div>
  );
};

export default OverviewPanel;
