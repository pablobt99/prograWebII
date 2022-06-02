import React, {useContext, useRef} from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext";

const Header = () => {
    let {user, logOutUser} = useContext(AuthContext)
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <span> | </span>
            {user ? (
            <a className="button" onClick={logOutUser}>LogOut</a>
            )
            : 
            <Link to="/login">Login</Link>}
            
            {user ? (
            <span></span>
            )
            : 
            <span> | <Link to="/register"> Register</Link></span>}
            
            {user && <p>Hello {user.username}</p>}
            
            
        </div>
    )
}

export default Header