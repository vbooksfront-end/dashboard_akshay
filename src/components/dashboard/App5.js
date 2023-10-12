import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)
const labels =['Office work','Meeting','Health issues','Festival','Summer holidays','Personal leave',];
const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"Leave type availed graph"
    },
  }
}
const data={
  labels,
  datasets:[
    {
      label:'Types',
      data:[45,22,13,10,15,20],
      backgroundColor:'yellow'
    },
  ]
}
function App5() {
  const containerStyle={
    width:'50%',
    height:'400px',
  };
  return (
    <div style={containerStyle}>
      <center><Bar  options={options} data={data}/></center>
    </div>
  );
}
export default App5;


