import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"


function Userlogin ()
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

  function handleButton(event)
  {
    event.preventDefault();
    axios.post("http://localhost:8080/adminlogin",data)
    .then((res) => {
        // console.log(res.data);
        // res.status
        if(res.data.msg === "user")
        {
          navigate("/navbar3");
        }
        else{
          setError(true);
          alert("invalid credentials");
        }
       setData({
        email:"",
        password:""}
        )
    });
  }

    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    

    // function changeEmail(event)
    // {
    //    setEmail(event.target.value)
    // }

    // function changePassword(event)
    // {
    //    setPassword(event.target.value)
    // }

    // function handleButton(event)
    // {
    //     event.preventDefault();
    //      navigate("/navbar3")
    //     setEmail("")
    //     setPassword("")
    // }


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

export default Userlogin ;