import React from "react"
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import  "./styles.css"
import Volunteer from "./addvolunteer"

function Navbar()
{
    return(
        <div>
             <h1 className="bg-warning">Village development</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="text-danger text-lg nav-item nav-link active" to="/addvolunteer">Add Volunteers</Link>
            <Link className="text-danger nav-item nav-link" to="/viewvolunteer">View Volunteers</Link>
             <Link className="text-danger nav-item nav-link" to="/viewuser">View Users</Link>
             </nav>
        </div>
    )
}

export default Navbar;