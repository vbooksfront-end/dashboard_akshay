import React from 'react'
import{BarChart,ResponsiveContainer,Bar, XAxis, YAxis, Tooltip} from 'recharts'
const array=[
  {
    name:"sales",
    HC: 12,
  },
  {
    name:"Admin",
    HC: 3,
  },
  {
    name:"IT",
    HC: 8,
  },
   {
    name:"Manager",
    HC: 7,
  },
]
function Category() {
  return (
    <div id='category'>
    <center><h1 id="header">Category based HC</h1></center>
   <ResponsiveContainer width="10%" aspect={3}>
      <center><BarChart className="barchart" data={array} width={350} height={300} >
      <XAxis dataKey="name"/>
      <YAxis dataKey="HC"/>
      <Tooltip/>
        <Bar dataKey="HC" barSize={30} fill="orange" data={array}/>
      </BarChart></center>
    </ResponsiveContainer>
    
    </div>
  )
}

export default Category
