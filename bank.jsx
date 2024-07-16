import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

const BankDashboard = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Checking', balance: 5000 },
    { id: 2, name: 'Savings', balance: 10000 },
    { id: 3, name: 'Credit Card', balance: -2000 },
  ]);

  const data = {
    labels: accounts.map((account) => account.name),
    datasets: [
      {
        data: accounts.map((account) => account.balance),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Account Balances',
      },
    },
  };

  const handleAccountUpdate = (id, balance) => {
    const updatedAccounts = accounts.map((account) =>
      account.id === id ? { ...account, balance } : account
    );
    setAccounts(updatedAccounts);
  };

  return (
    <div>
      <h1>Bank Dashboard</h1>
      <div style={{ height: '400px' }}>
        <Pie data={data} options={options} />
      </div>
      <div>
        {accounts.map((account) => (
          <div key={account.id}>
            <h3>{account.name}</h3>
            <p>Balance: ${account.balance}</p>
            <input
              type="number"
              value={account.balance}
              onChange={(e) => handleAccountUpdate(account.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankDashboard;
