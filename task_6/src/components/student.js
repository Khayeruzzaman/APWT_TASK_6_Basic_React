import React from "react";
import { Link } from "react-router-dom";

const Student = (props) => {

    const {id, name, cgpa}=props.students;
    
    return(
        
        <tr>
            <td> { id } </td>
            <td>{ name }</td>
            <td>{ cgpa }</td>
            <td><Link to={"/studentsdetails/"+id+"/"+name+"/"+cgpa}> <button className='btn btn-primary'> Details </button></Link></td>
        </tr>

    );
}

export default Student;