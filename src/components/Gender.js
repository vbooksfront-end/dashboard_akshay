import React from 'react'
import{BarChart,ResponsiveContainer,Bar, XAxis, YAxis, Tooltip} from 'recharts'
const array=[
  {
    name:"Male",
    HC: 13,
  },
  {
    name:"FeMale",
    HC: 10,
  },
   {
    name:"Other",
    HC: 5,
  },
]
function Gender() {
  return (
    <div id='category'>
    <center><h1 id="header">Gender based HC</h1></center>
   <ResponsiveContainer width="30%" aspect={1}>
      <center><BarChart className="barchart" data={array} width={350} height={300} >
      <XAxis dataKey="name"/>
      <YAxis dataKey="HC"/>
      <Tooltip/>
        <Bar dataKey="HC" barSize={40} fill="orange" data={array}/>
      </BarChart></center>
    </ResponsiveContainer>
    
    </div>
  )
}

export default Gender
