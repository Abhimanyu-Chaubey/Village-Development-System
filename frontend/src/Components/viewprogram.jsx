import React, { useState } from "react"

function Viewprogram()
{

    const [program, setProgram] = useState([])
    const [isData, setIsData] = useState(false)
  
    // function handleButton(event) {
      // event.preventDefault();
      fetch('http://localhost:8080/viewprogram',{
        method:"GET"
      }).then((res) => (res = res.json()))
        .then((res) => {
          // console.log(res);
          if (res.length > 0) {
            setProgram(res);
            setIsData(true);
          }
          else {
            setIsData(false);
          }
        })

        function userProgram(program)
        {
          return(
            <tr>
            <td>{program.id}</td>
            <td>{program.program}</td>
            <td>{program.fromDate}</td>
            <td>{program.toDate}</td> 
              </tr>
          )
        }
      
    return(
        <div>
            <h1>View program</h1>
            {isData ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>program</th>
                  <th>From date</th>
                  <th>To date</th>
                </tr>
              </thead>
              <tbody>{isData ? program.map(userProgram) : null}</tbody>
            </table>
          ) : (
            <center>
              <h4>No programs found</h4>
            </center>
          )}

        </div>
    )
}

export default Viewprogram;