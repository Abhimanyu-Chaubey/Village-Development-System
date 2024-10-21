import React, { useState, useEffect } from "react"
import axios from "axios"
function Viewfeedback() {
    const [feedback, setFeedback] = useState([])
    const [isData, setIsData] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8080/viewfeedback', {
            method: "GET"
        }).then((res) => (res = res.json()))
            .then((res) => {
                console.log(res);
                if (res.length > 0) {
                    setFeedback(res);
                    setIsData(true);
                }
                else {
                    setIsData(false);
                }
            })
    } , [])

    function userFeedback(feedback) {
        return (
            <tr key={feedback.feedbackId}>
                <td>{feedback.feedbackId}</td>
                <td>{feedback.feedbackName}</td>
                <td>{feedback.description}</td>
            </tr>
        )
    }


    return (
        <div>
            <h1>View Feedback</h1>
            {isData ? (
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Feedback name</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>{isData ? feedback.map(userFeedback) : null}</tbody>
                </table>
            ) : (
                <center>
                    <h4>No Feedback found</h4>
                </center>
            )}
        </div>
    )
}

export default Viewfeedback;