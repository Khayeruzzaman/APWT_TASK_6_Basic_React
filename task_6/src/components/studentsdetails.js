import React from "react";
import { useParams } from "react-router-dom";

const Studentsdetails = (props) => {

    const {id, name, cgpa} = useParams();

    return(
        <div>
            <h1>Student Details</h1>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>CGPA: {cgpa}</p>
        </div>
    )
}

export default Studentsdetails;
