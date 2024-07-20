// src/components/IncomeChart.tsx
// import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../app/Store';

const IncomeChart = () => {
  const payments = useSelector((state: RootState) => state.payments.data);

  const data = {
    labels: payments.map((payment: { date: any; }) => payment.date),
    datasets: [
      {
        label: 'Income',
        data: payments.map((payment: { amount: any; }) => payment.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default IncomeChart;
