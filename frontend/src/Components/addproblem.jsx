import React, { useState } from "react"
import axios from "axios"
function Addproblem()
{

    const [data,setData]=useState({
        problem:"",
        fromDate:"",
        toDate:""
       })

   

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    function handleButton(event)
    {
     event.preventDefault();
     if(data.problem=="" || data.fromDate=="" || data.toDate=="")
     {
        alert("field is empty")
     }
     else{
    
     axios.post('http://localhost:8080/addproblem',data)
     setData({problem:"",fromDate:"",toDate:""})
     alert("problem added successfully")
     }
    }

//     function changeProblem(event)
//         {
//             setProblem(event.target.value)
//         }

//         function changeFromdate(event)
//         {
//             setFromdate(event.target.value)
//         }

//         function changeTodate(event)
//         {
//             setTodate(event.target.value)
//         }
    
//         function handleButton(event)
//    {
//     event.preventDefault();
//     setProblem("")
//     setFromdate("")
//     setTodate("")
//    }
    return(
        <div>
            <h1>Add Problems</h1>
            <form>
            <label>Problem</label>
            <input onChange={handleChange}type="text"  placeholder="Enter problem" size="60" name="problem" value={data.problem}></input>
            <br></br>

            <label>From date</label>
            <input onChange={handleChange} type="text"  placeholder="Enter from date"  size="60" name="fromDate" value={data.fromDate}></input>
            <br></br>
            
            <label>To date</label>
            <input onChange={handleChange} type="text"   placeholder="Enter to date"  size="60" name="toDate" value={data.toDate}></input>
            <br></br>

            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
            </form>

        </div>
    )
}

export default Addproblem;