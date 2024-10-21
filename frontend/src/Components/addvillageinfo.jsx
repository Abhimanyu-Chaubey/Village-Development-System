import React from "react"
import { useState } from "react"
import axios from "axios"

function Addvillageinfo()
{

    const [data,setData]=useState({
        villageName:"",
        population:"",
        area:"",
        crops:"",
        districtName:"",
        stateName:""
       })
    // const[villageName,setVillagename]=useState("")
    // const[population,setPopulation]=useState("")
    // const[area,setArea]=useState("")
    // const[crops,setCrops]=useState("")
    // const[districtName,setDistrictName]=useState("")
    // const[statename,setStatename]=useState("")

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    function handleButton(event)
   {
    event.preventDefault();
    if(data.villageName=="" || data.population=="" || data.area=="" 
    || data.crops=="" || data.districtName=="" ||data.stateNamea=="")
    {
       alert("field is empty")
    }
    else{
    axios.post('http://localhost:8080/addvillage',data)
    setData({villageName:"",population:"",area:"",crops:"",districtName:"",statename:""})
    alert("village info saved successfully")
    }
   }

    // function changeVillageName(event)
    // {
    //     setVillagename(event.target.value)
    // }

    // function changePopulation(event)
    // {
    //     setPopulation(event.target.value)
    // }

    // function changeArea(event)
    // {
    //     setArea(event.target.value)
    // }

    // function changeCrops(event)
    // {
    //     setCrops(event.target.value)
    // }

    // function changeDistrictName(event)
    // {
    //     setDistrictName(event.target.value)
    // }

    // function changeStateName(event)
    // {
    //     setStatename(event.target.value)
    // }

    // function handleButton(event)
    // {
    //     event.preventDeafault();
    //     setVillagename("")
    //     setPopulation("")
    //     setArea("")
    //     setCrops("")
    //     setDistrictName("")
    //     setStatename("")
    // }

    return(
        <div>
            <h1>Add village information</h1>
            <form>
            <label>Villagename</label>
            <input onChange={handleChange}type="text"  placeholder="Enter village name" size="60" name="villageName"value={data.villageName}></input>
            <br></br>

            <label>Population</label>
            <input onChange={handleChange} type="text"  placeholder="Enter population"  size="60" name="population" value={data.population}></input>
            <br></br>
            
            <label>Area</label>
            <input onChange={handleChange} type="text"   placeholder="Enter area"  size="60" name="area" value={data.area}></input>
            <br></br>

            <label>crops</label>
            <input onChange={handleChange} type="text"  placeholder="Enter crop"  size="60" name="crops" value={data.crops}></input>
            <br></br>

            <label>districtname</label>
            <input onChange={handleChange} type="text"   placeholder="Enter district name"  size="60" name="districtName" value={data.districtName} ></input>
            <br></br>

            <label>statename</label>
            <input onChange={handleChange} type="text"   placeholder="Enter state name"  size="60" name="stateName" value={data.statename}></input>
            <br></br>

            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
        </form>
        </div>
    )
}

export default Addvillageinfo;