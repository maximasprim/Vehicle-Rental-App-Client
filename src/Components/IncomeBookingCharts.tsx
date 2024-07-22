// src/components/IncomeBookingsChart.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

interface IncomeBookingsChartProps {
  labels: string[];
  incomeData: number[];
  bookingsData: number[];
}

const IncomeBookingsChart: React.FC<IncomeBookingsChartProps> = ({ labels, incomeData, bookingsData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 1,  
      },
      {
        label: 'Bookings',
        data: bookingsData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 1,  
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
      },
    },
  };

  return (
    <div className="bg-white-400 p-6 shadow rounded-md w-full">
      <h2 className="text-xl font-semibold mb-4">Income vs Bookings</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeBookingsChart;
