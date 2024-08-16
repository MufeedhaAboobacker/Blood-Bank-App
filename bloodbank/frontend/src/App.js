import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import Loginsignup from './components/Loginsignup';
import Login from './components/Login';

import Home from './components/Home';
import Homee from './components/Homee';
import Signup from './components/Signup';
import View from './components/View';
import Admin from './components/Admin';
import Admindonor from './components/Admindonor';

import Admindonorf from './components/Admindonorf';
import Donateform from './components/Donateform';
import Adminlogin from './components/Adminlogin';
import Adreg from './components/Adreg';
import Adviewdnr from './components/Adviewdnr';
import Adviewreq from './components/Adviewreq';
import Adrequp from './components/Adrequp';
import Addnrup from './components/Addnrup';




function App() {
  return (
    <div className="App">
<Appbar/>
<Routes>
<Route path='/loginsignup' element={<Loginsignup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/dash' element={<Home/>}/>
  <Route path='/' element={<Homee/>}/>
  <Route path='/donorview' element={<View/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/admindonor' element={<Admindonor/>}/>
  <Route path='/admindonorform' element={<Admindonorf/>}/>


  <Route path='/dnrform' element={<Donateform/>}/>

  <Route path='/adlogin' element={<Adminlogin/>}/>


  
  <Route path='/adreg' element={<Adreg/>}/>

  <Route path='/adviewdnr' element={<Adviewdnr/>}/>



  <Route path='/adviewreq' element={<Adviewreq/>}/>

  <Route path='/adrequp' element={<Adrequp/>}/>

  <Route path='/addnrup' element={<Addnrup/>}/>


  
</Routes>
    </div>
  );
}

export default App;
