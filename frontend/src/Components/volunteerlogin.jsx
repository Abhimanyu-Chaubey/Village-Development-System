import React,{useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Volunteerlogin()
{
    
    const navigate=useNavigate();
    const[error,setError]=useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    // const navigate=useNavigate()

    // function changeEmail(event)
    // {
    //    setEmail(event.target.value)
    // }

    // function changePassword(event)
    // {
    //    setPassword(event.target.value)
    // }

    function handleButton(event)
    {
        event.preventDefault();
        axios.post("http://localhost:8080/volunteerlogin",data)
        .then((res) => {
            // console.log(res.data);
            // res.status
            if(res.data.msg === "successful")
            {
              navigate("/navbar2");
            }
            else{
              setError(true);
              alert("invalid credentials");
            }
           setData({
            email:"",
            password:""}
            )
           }
        )
        
    }


    return(
        <div>
             <form>
            <h1>Login</h1>
            <br></br>

            <label>Enter email</label>
            <input onChange={handleChange} type="email"  placeholder="Enter email"  size="60" name="email" value={data.email}></input>
            <br></br>
            
            <label>Enter password</label>
            <input onChange={handleChange} type="password"   placeholder="Enter password"  size="60" name="password" value={data.password}></input>
            <br></br>

            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
            </form>
        </div>
    )
}

export default Volunteerlogin ;