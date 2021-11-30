import React, { useState } from "react";
import Student from "./student";



const Studentlist = () => {

    
    const data = [

        {
            id:'18-38715-3',
            name: 'Md. Khayeruzzaman',
            cgpa: '3.89'
        },

        {
            id:'18-38716-3',
            name: 'A.B.M. Toufiqul Islam',
            cgpa: '4.00'
        },

        {
            id:'18-38757-3',
            name: 'Mufrad Mustavi',
            cgpa: '4.00'
        }

    ]
    

    
    const [dataa] = useState(data)

    return (
        <div className="col-md-7 offset-md-2">
            <br/>
            <table className="table table-striped table-hover">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CGPA</th>
                    <th>Action</th>
                </tr>
                {dataa.map((student) => <Student students={student}/> )}
            </table>

            
        </div>
    )

    
}

export default Studentlist;
