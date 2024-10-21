import React, { useState, useEffect } from "react";
import api from "../api/users"
import axios from "axios"

function Viewuser() {
  const [user, setUser] = useState([])
  const [isData, setIsData] = useState(false)

  // function handleButton(event) {
    // event.preventDefault();
    fetch('http://localhost:8080/viewuser',{
      method:"GET"
    }).then((res) => (res = res.json()))
      .then((res) => {
        // console.log(res);
        if (res.length > 0) {
          setUser(res);
          setIsData(true);
        }
        else {
          setIsData(false);
        }
      })
  // }

  function userTable(user)
  {
    return(
      <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.address}</td> 
        </tr>
    )
  }

  //  .then((res) => (res = res.json()))
  //  .then((res) => {
  //    if (res.length > 0) {
  //      setTeachers(res);
  //      setIsData(true);
  //    } else {
  //      setIsData(false);
  //    }

  //   const[users,setUsers]=useState([])
  //   const retreiveUsers= async () =>{
  //     const response= await api.get("viewuser")
  //     return response.data;
  //   }
  // console.log(user)
  //   useEffect(()=>{
  //     const getAllUsers = async() =>{
  //     const allUsers= await retreiveUsers();
  //     if(allUsers) setUsers(allUsers)
  //   };

  //   getAllUsers();
  // },[])
  return (
    <div>
      <h1>List of users</h1>
      {/* <button onClick={handleButton}>viewusers</button> */}
      {isData ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>{isData ? user.map(userTable) : null}</tbody>
            </table>
          ) : (
            <center>
              <h4>No users found</h4>
            </center>
          )}
      {/* {isData? user.map(userTable) : null} */}

    </div>
  )
}

export default Viewuser;