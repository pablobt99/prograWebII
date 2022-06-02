import React, {useContext, useRef} from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext";

const Header = () => {
    let {user, logOutUser} = useContext(AuthContext)
    return(
        <div>
            <Link to="/">Home</Link>
            <span> | </span>
            {user ? (
            <p onClick={logOutUser}>LogOut</p>
            )
            : 
            <Link to="/login">Login</Link>}
            
            {user && <p>Hello {user.username}</p>}
            
            
        </div>
    )
}

export default Header