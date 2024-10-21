import React, { useState } from "react"
import Navbarvolunteer from "./navbar2"
import axios from "axios"
function Adduser()
{
   const [data,setData]=useState({
    name:"",
    phoneNumber:"",
    address:""
   })
   
    // const[name,setName]=useState("")
    // const[phoneNumber,setPhoneNumber]=useState("")
    // const[address,setAddress]=useState("")

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }
    // function changeName(event)
    // {
    //     setName(event.target.value)
    // }

    // function changePhoneNumber(event)
    // {
    //     setPhoneNumber(event.target.value)
    // }

    // function changeAddress(event)
    // {
    //     setAddress(event.target.value)
    // }

    function handleButton(event)
   {
    event.preventDefault();
    if(data.name=="" || data.phoneNumber=="" || data.address=="")
    {
       alert("field is empty")
    }

    else{   
    axios.post('http://localhost:8080/adduser',data)
    setData({name:"",phoneNumber:"",address:""})
    alert("User added successfully")
    }
   }

    return(
        <div>
            <h1> Add user</h1>
             <form >
            <label>Name</label>
            <input onChange={handleChange}type="text"  placeholder="Enter  name" size="60" name="name"value={data.name}></input>
            <br></br>

            <label>Phonenumber</label>
            <input onChange={handleChange} type="text"  placeholder="Enter phone number"  size="60" name="phoneNumber" value={data.phoneNumber}></input>
            <br></br>
            
            <label>Address</label>
            <input onChange={handleChange} type="text"   placeholder="Enter address"  size="60" name="address" value={data.address}></input>
            <br></br>

            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
            </form>
        </div>
    )
}

export default Adduser;