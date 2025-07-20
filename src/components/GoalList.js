import React from 'react';

const GoalList = ({ goals }) => {
  return (
    <div className="goal-list">
      {goals.map((goal) => (
        <div key={goal.id} className="goal-item">
          <h3>{goal.title}</h3>
          <p>Target: ${goal.targetAmount}</p>
          <p>Progress: ${goal.currentAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default GoalList;
