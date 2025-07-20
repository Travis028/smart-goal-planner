import React, { useState } from 'react';

const NewGoalForm = ({ onAddGoal }) => {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({
      title,
      targetAmount: Number(targetAmount),
      currentAmount: 0
    });
    setTitle('');
    setTargetAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="new-goal-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Goal title"
        required
      />
      <input
        type="number"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        placeholder="Target amount"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoalForm;
