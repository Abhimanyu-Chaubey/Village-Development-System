import React,{useState} from "react"
import axios from "axios"
function Sendfeedback()
{

    const [data,setData]=useState({
        feedbackName:"",
       description:"",
       })

    // const[feedbackname,setFeedbackname]=useState("")
    // const[decription,setDescription]=useState("")

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    function handleButton(event)
    {
     event.preventDefault();
     if(data.feedbackName=="" || data.description=="")
     {
        alert("field is empty")
     }
     else{
    
     axios.post('http://localhost:8080/sendfeedback',data)
     setData({feedbackName:"",description:""})
     alert("sent feedback successfully")
     }
    
    }

    // function changeFeedbackname(event)
    // {
    //     setFeedbackname(event.target.value)
    // }

    // function changeDescription(event)
    // {
    //     setDescription(event.target.value)
    // }

    // function handleButton(event)
    // {
    //     event.preventDefault();
    //     setFeedbackname("")
    //     setDescription("")
    // }

   return(
    <div>
        <h1>send feedback</h1>
          <form>
            <label>Feedbackname</label>
            <input onChange={handleChange}type="text"  placeholder="Enter  feedbackname" size="60" name="feedbackName"value={data.feedbackName}></input>
            <br></br>

            <label>Description</label>
            <input onChange={handleChange} type="text"  placeholder="Enter description"  size="60" name="description" value={data.description}></input>
            <br></br>
            
            <button type="button" className="btn btn-success" onClick={handleButton}>Submit</button>
            </form>
    </div>
   )        
}
        
export default Sendfeedback;