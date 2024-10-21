import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

function Addprogram()
{

    const [data,setData]=useState({
        program:"",
        fromDate:"",
        toDate:""
       })
    // const[program,setProgram]=useState("")
    // const[fromdate,setFromdate]=useState("")
    // const[todate,setTodate]=useState("")

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    
    function handleButton(event)
   {
    event.preventDefault();
    if(data.program=="" || data.fromDate=="" || data.toDate=="")
    {
       alert("field is empty")
    }
    else{       
   alert("program saved successfully")
    axios.post('http://localhost:8080/addprogram',data)
    setData({program:"",fromDate:"",toDate:""})
    }
    
   }

    // function changeProgram(event)
    //     {
    //         setProgram(event.target.value)
    //     }

    //     function changeFromdate(event)
    //     {
    //         setFromdate(event.target.value)
    //     }

    //     function changeTodate(event)
    //     {
    //         setTodate(event.target.value)
    //     }
    
//         function handleButton(event)
//    {
//     event.preventDefault();
//     // Navigate("/")
//     setProgram("")
//     setFromdate("")
//     setTodate("")
//    }
    return(
        <div>
            <h1>Add Program</h1>
            <form>
            <label>Program</label>
            <input onChange={handleChange}type="text"  placeholder="Enter program" size="60" name="program" value={data.program}></input>
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

export default Addprogram;