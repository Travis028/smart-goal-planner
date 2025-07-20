import React from 'react';

const GoalCard = ({ goal }) => {
  return (
    <div className="goal-card">
      <h3>{goal.title}</h3>
      <p>Target: ${goal.targetAmount}</p>
      <p>Progress: ${goal.currentAmount}</p>
    </div>
  );
};

export default GoalCard;
