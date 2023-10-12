import React from 'react'
import Sidenav,{NavItem,NavIcon,NavText,} from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

import { useNavigate } from 'react-router-dom';
function MySidenav() {
    const navigate= useNavigate();
  return (
    <Sidenav id="MySidenav" 
    onSelect={selected=>{
        console.log(selected)
        navigate('/'+selected)
    }}>
        <Sidenav.Toggle/>
        <Sidenav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: "1.5em"}}></i></NavIcon>
                    <NavText>Home</NavText>
                
            </NavItem>
            <NavItem eventKey="about">
                <NavIcon><i class="fa-regular fa-address-card" style={{fontSize:"1.5em"}}></i></NavIcon>
                    <NavText>About</NavText>
                
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon><i className='fa fa-fw fa-bar-chart'  style={{fontSize:"1.5em"}}></i></NavIcon>

                    <NavText>Chart</NavText>
                    <NavItem eventKey="gender" >
                        <NavText>GenderChart</NavText>
                    </NavItem>
                    <NavItem eventKey="hc">
                        <NavText>Category based HC</NavText>
                    </NavItem>
                    <NavItem eventKey="app1">
                        <NavText>CTC</NavText>
                    </NavItem>
                    <NavItem eventKey="app2">
                        <NavText>Employee Status</NavText>
                    </NavItem>
                    <NavItem eventKey="app3">
                        <NavText>Top 10 accurate logins</NavText>
                    </NavItem>
                    <NavItem eventKey="app4">
                        <NavText>Addition and Attrition</NavText>
                    </NavItem>
                    <NavItem eventKey="app5">
                        <NavText>Top 10 leave takers</NavText>
                    </NavItem>
                    <NavItem eventKey="app6">
                        <NavText>Leave types availed</NavText>
                    </NavItem>
                    
            </NavItem>
        </Sidenav.Nav>
    </Sidenav>
  )
}

export default MySidenav
