
import Navbar from './components/Navbar';
import './App.css';
import { Routes,Route, BrowserRouter, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Sidenav from './components/Sidenav';
import Dashboard from './components/Dashboard';
import  Gender from './components/Gender';
import App1 from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import App6 from './components/App6';
function App() {
  return (
    <>
    <h1>
      VBooks
      
    </h1> <div className="App">
    
    
    <BrowserRouter>
    
      <Sidenav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<Dashboard/>}/>
        <Route path='/gender' element={<Gender/>}/>
        <Route path='/hc' element={<Category/>}/>
        <Route path='/app1' element={<App1/>}/>
        <Route path='/app2' element={<App2/>}/>
        <Route path='/app3' element={<App3/>}/>
        <Route path='/app4' element={<App4/>}/>
        <Route path='/app5' element={<App5/>}/>
        <Route path='/app6' element={<App6/>}/>
        
       
      </Routes>
  
    </BrowserRouter>
   </div>
    </>
  );
}

export default App;
