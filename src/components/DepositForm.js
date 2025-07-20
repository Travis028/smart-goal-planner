import React, { useState } from 'react';

const DepositForm = ({ onDeposit }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(Number(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
