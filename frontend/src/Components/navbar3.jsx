import React from "react"
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function Usernavbar()
{
    return(
        <div>
            <h1 className="bg-warning"> Village development</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="text-danger text-lg nav-item nav-link active" to="/viewprogram">View programs</Link>
            <Link className="text-danger nav-item nav-link" to="/addproblem">Add problems</Link>
             <Link className="text-danger nav-item nav-link" to="/viewvillageinfo">View village information</Link>
             <Link className="text-danger nav-item nav-link" to="/sendfeedback">Send feedback</Link>
             </nav>
        </div>
    )
}

export default Usernavbar;