
import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels =['Emp1','Emp2','Emp3','Emp4','Emp5','Emp6','Emp7','Emp8','Emp9','Emp10'];

const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"10 Accurate login employee"
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'Accuracy score',
      data:[93,85,73,66,50,41,38,33,20,11],
      backgroundColor:'grey'
    },
  ]
}

function App3() {
  const containerStyle={
    width:'50%',
    height:'300px',
  };
  return (
    <div style={containerStyle}> 
    <center><Bar options={options} data={data}/></center>
    </div>
  );
}


export default App3;
