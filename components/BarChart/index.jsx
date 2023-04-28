import { Bar } from 'react-chartjs-2';

function BarChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <div>
      <Bar width={500} height={350} data={data} />
    </div>
  );
}

export default BarChart;
