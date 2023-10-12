import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)
const labels =['Emp1','Emp2','Emp3','Emp4','Emp5','Emp6','Emp7','Emp8','Emp9','Emp10','Emp11','Emp12'];
const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"TOP 10 LEAVE TAKER"
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'Number of leave',
      data:[35,30,28,25,21,20,18,15,10,9,9,1],
      backgroundColor:'red'
    },
    {
      label:'Number of attendance',
      data:[65,70,72,75,79,80,83,85,90,91,91,99],
      backgroundColor:'green'
    },
  ]
}
function App6() {
  const containerStyle={
    width:'50%',
    height:'300px',
  };
  return (
    <div style={containerStyle}>
      <center><Bar  options={options} data={data}/></center>
    </div>
  );
}
export default App6;