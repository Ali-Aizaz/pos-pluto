import { Line } from 'react-chartjs-2'

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

const data = {
  labels,
  datasets: [
    {
      label: 'Orders',
      backgroundColor: '#22d3ee',
      borderColor: '#06b6d4',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
}

function LineChart() {
  return (
    <div>
      <Line width={500} height={350} data={data} />
    </div>
  )
}

export default LineChart
