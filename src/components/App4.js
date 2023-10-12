import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels =['2018','2019','2020','2021','2022','2023'];

const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"Addition and attrition graph"
    },
  }
}
const data={
  labels,
  datasets:[
    {
      label:'employee',
      data:[60,76,40,50,90,65,66,98],
      backgroundColor:'black'
    },
    {
      label:'new employee',
      data:[45,66,67,89,69,77,90,90],
      backgroundColor:'green'
    },
    {
      label:'ratio',
      data:[15,10,27,39,21,12,24,8],
      backgroundColor:'red'
    },
  ]
}

function App4() {
  const containerStyle={
    width:'50%',
    height:'300px',
  };
  return (
    <div style={containerStyle}>
      <center><Bar  ptions={options} data={data}/></center>
    </div>
  );
}

export default App4;