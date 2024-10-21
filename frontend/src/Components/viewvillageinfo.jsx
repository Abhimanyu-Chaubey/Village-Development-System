import React, { useState } from "react"

function Viewvillageinfo()
{
    const [village, setVillage] = useState([])
  const [isData, setIsData] = useState(false)

  fetch('http://localhost:8080/viewvillageinfo',{
    method:"GET"
  }).then((res) => (res = res.json()))
    .then((res) => {
      // console.log(res);
      if (res.length > 0) {
        setVillage(res);
        setIsData(true);
      }
      else {
        setIsData(false);
      }
    })

    function userVillage(village)
    {
      return(
        <tr>
        <td>{village.id}</td>
        <td>{village.villageName}</td>
        <td>{village.population}</td>
        <td>{village.area}</td>
        <td>{village.crops}</td> 
        <td>{village.districtName}</td> 
        <td>{village.stateName}</td> 
          </tr>
      )
    }

    return(
        <div>
            <h1>View village info</h1>
            {isData ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Viillage name</th>
                  <th>Population</th>
                  <th>Area</th>
                  <th>crops</th>
                  <th>Distict name</th>
                  <th>State name</th>
                </tr>
              </thead>
              <tbody>{isData ? village.map(userVillage) : null}</tbody>
            </table>
          ) : (
            <center>
              <h4>No villages found</h4>
            </center>
          )}
        </div>
    )
}
export default Viewvillageinfo;