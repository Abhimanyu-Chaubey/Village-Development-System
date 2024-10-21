import React, { useEffect,useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Volunteer from './Components/addvolunteer';
import Viewvolunteer from './Components/viewvolunteer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Viewuser from './Components/viewusers';
import Navbarvolunteer from './Components/navbar2';
import Loginnavbar from './Components/loginnavbar';
import Login from './Components/adminlogin';
import Volunteerlogin from './Components/volunteerlogin';
import Userlogin from './Components/userlogin';
import Adminlogin from './Components/adminlogin';
import Usernavbar from './Components/navbar3';
import Adduser from './Components/adduser';
import Addvillageinfo from './Components/addvillageinfo';
import Addprogram from './Components/addprogram';
import Viewprogram from './Components/viewprogram';
import Viewproblem from './Components/viewproblem';
import Viewfeedback from './Components/viewfeedback';
import Addproblem from './Components/addproblem';
import Viewvillageinfo from './Components/viewvillageinfo';
import Sendfeedback from './Components/sendfeedback';
import api from "./api/users"
import Volunteerviewuser from './Components/volunteerviewuser';

function App() {

 

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/addvolunteer" element={<Volunteer />}/>
          <Route exact path="/viewvolunteer" element={<Viewvolunteer />}/>
          <Route exact path="/viewuser" element={<Viewuser />}></Route>
          <Route exact path="/viewusers" element={<Volunteerviewuser />}></Route>
          <Route exact path="/"  element={<Loginnavbar />} />
          <Route exact path="/Adminlogin" element={<Adminlogin />}/>
          <Route exact path="/volunteerlogin" element={<Volunteerlogin />}/>
          <Route exact path="/navbar2" element={<Navbarvolunteer />}/>
          <Route exact path="/userlogin" element={<Userlogin />}/>
          <Route exact path="/navbar3" element={<Usernavbar />}/>
          <Route exact path="/adduser" element={<Adduser />}/>
          <Route exact path="/addprogram" element={<Addprogram />}/>
          <Route exact path="/viewprogram" element={<Viewprogram />}/>
          <Route exact path="/addvillage" element={<Addvillageinfo />}/>
          <Route exact path="/viewproblem" element={<Viewproblem />}/>
          <Route exact path="/viewfeedback" element={<Viewfeedback />}/>
          <Route exact path="/viewprogram" element={<Viewprogram />}/>
          <Route exact path="/addproblem" element={<Addproblem />}/>
          <Route exact path="/viewvillageinfo" element={<Viewvillageinfo />}/>
          <Route exact path="/sendfeedback" element={<Sendfeedback />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
