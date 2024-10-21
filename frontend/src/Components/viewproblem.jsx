import React, { useState } from "react"

function Viewproblem()
{
    const [problem, setProblem] = useState([])
    const [isData, setIsData] = useState(false)

     // event.preventDefault();
     fetch('http://localhost:8080/viewproblem',{
        method:"GET"
      }).then((res) => (res = res.json()))
        .then((res) => {
          // console.log(res);
          if (res.length > 0) {
            setProblem(res);
            setIsData(true);
          }
          else {
            setIsData(false);
          }
        })

        function userProblem(problem)
        {
          return(
            <tr>
            <td>{problem.id}</td>
            <td>{problem.problem}</td>
            <td>{problem.fromDate}</td>
            <td>{problem.toDate}</td> 
              </tr>
          )
        }


    return(
        <div>
             <h1>View problems</h1>
             {isData ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Problem</th>
                  <th>From date</th>
                  <th>To date</th>
                </tr>
              </thead>
              <tbody>{isData ? problem.map(userProblem) : null}</tbody>
            </table>
          ) : (
            <center>
              <h4>No Problems found</h4>
            </center>
          )}
        </div>
    )
}

export default Viewproblem;