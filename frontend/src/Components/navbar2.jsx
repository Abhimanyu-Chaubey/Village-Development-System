import React from "react"
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function Navbarvolunteer()
{
  return(
    <div>
      <h1 class="bg-warning">Village development</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="text-danger text-lg nav-item nav-link active" to="/adduser">Add user</Link>
            <Link className="text-danger nav-item nav-link" to="/viewusers">View user</Link>
             <Link className="text-danger nav-item nav-link" to="/addprogram">Add program</Link>
             <Link className="text-danger text-lg nav-item nav-link active" to="/viewprogram">view program</Link>
            <Link className="text-danger nav-item nav-link" to="/addvillage">Add Village Info</Link>
             <Link className="text-danger nav-item nav-link" to="/viewproblem">View Problems</Link>
             <Link className="text-danger nav-item nav-link" to="/viewfeedback">View feedback</Link>
             </nav>
    </div>
  )
}

export default Navbarvolunteer;