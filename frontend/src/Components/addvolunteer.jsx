import React,{useState} from "react"
import axios from "axios"

function Addvolunteer()
{
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:""
       })
//    const[firstName,setFirstName]=useState("");
//    const[LastName,setLastName]=useState("");
//    const[Email,setEmail]=useState("");
//    const[password,setPassword]=useState("");
//    const[phoneNumber,setPhoneNumber]=useState("");
//    const[address,setAddress]=useState("");
    
const handleChange=(event)=>{
    setData({
        ...data,
        [event.target.name]:event.target.value
    })
}
function handleButton(event)
{
 event.preventDefault();
 if(data.firstName=="" || data.lastName=="" || data.email=="" 
 || data.password=="" || data.phoneNumber=="" ||data.address=="")
 {
    alert("field is empty")
 }
 else{
 axios.post('http://localhost:8080/addvolunteer',data)
 setData({firstName:"",lastName:"",email:"",password:"",phoneNumber:"",address:""})
 alert("Registration successful")
 }

}

//    function handleButton(event)
//    {
//     event.preventDefault();
//     setFirstName("")
//     setLastName("")
//     setEmail("")
//     setPassyword("")
//     setPhoneNumber("")
//     setAddress("")
//    }

//    function changeFirstName(event)
//    {
//     setFirstName(event.target.value)
//    }

    
//    function changeLastName(event)
//    {
//     setLastName(event.target.value)
//    }

    
//    function changeEmail(event)
//    {
//     setEmail(event.target.value)
//    }

    
//    function changePassword(event)
//    {
//     setPassword(event.target.value)
//    }

    
//    function changePhoneNumber(event)
//    {
//     setPhoneNumber(event.target.value)
//    }

//    function changeAddress(event)
//    {
//     setAddress(event.target.value)
//    }

    return(
        <div >
            <h1 className="bg-warning">Add Volunteer</h1><br></br>
        <form>
            <label>Firstname</label>
            <input onChange={handleChange} type="text"  placeholder="Enter first name" size="60" name="firstName" value={data.firstName}></input>
            <br></br>

            <label>Lastname</label>
            <input onChange={handleChange} type="text"  placeholder="Enter Last name"  size="60" name="lastName" value={data.lastName}></input>
            <br></br>
            
            <label>Email</label>
            <input onChange={handleChange} type="text"   placeholder="Enter email"  size="60" name="email" value={data.email}></input>
            <br></br>

            <label>Password</label>
            <input onChange={handleChange} type="password"  placeholder="Enter password"  size="60" name="password" value={data.password}></input>
            <br></br>

            <label>Phonenumber</label>
            <input onChange={handleChange} type="text"   placeholder="Enter phone number"  size="60" name="phoneNumber" value={data.phoneNumber} ></input>
            <br></br>

            <label>address</label>
            <input onChange={handleChange} type="text"   placeholder="Enter address"  size="60" name="address" value={data.address}></input>
            <br></br>

            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
        </form>
        </div>

    )
}

export default Addvolunteer;