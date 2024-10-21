import React, { useState } from "react"

function Viewvolunteer()
{
    
        const [volunteer, setVolunteer] = useState([])
        const [isData, setIsData] = useState(false)
      
        // function handleButton(event) {
          // event.preventDefault();
          fetch('http://localhost:8080/viewvolunteer',{
            method:"GET"
          }).then((res) => (res = res.json()))
            .then((res) => {
              // console.log(res);
              if (res.length > 0) {
                setVolunteer(res);
                setIsData(true);
              }
              else {
                setIsData(false);
              }
            })

            function volunteerTable(volunteer)
            {
              return(
                <tr>
                  <td>{volunteer.id}</td>
                <td>{volunteer.firstName}</td>
                <td>{volunteer.lastName}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.phoneNumber}</td>
                <td>{volunteer.address}</td>
                  </tr>
              )
            }

    return(
        <div>
            <h1>List of Volunteer</h1>

            {isData ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>{isData ? volunteer.map(volunteerTable) : null}</tbody>
            </table>
          ) : (
            <center>
              <h4>No Volunteers found</h4>
            </center>
          )}
        </div>
    )
}

export default Viewvolunteer;

