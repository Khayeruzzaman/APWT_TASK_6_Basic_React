import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    return (

            <div className='topnav'>
                        <Link className="navContent" to="/">Home</Link>
                        <Link className="navContent" to="/studentlist">Student List</Link>
                        <Link className="navContent" to="/contact">Contact</Link>
            </div>

    );
}

export default Header;