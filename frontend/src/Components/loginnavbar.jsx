import React from "react"
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function Loginnavbar()
{
  
    return(
    <div>
            <h1 className="bg-warning">Village development</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="text-danger text-lg nav-item nav-link active" to="/adminlogin">Admin Login</Link>
            <Link className="text-danger nav-item nav-link" to="/volunteerlogin">Volunteer Login</Link>
             <Link className="text-danger nav-item nav-link" to="/userlogin">User Login</Link>
             
             
             </nav>
    </div>
)
}

export default Loginnavbar;