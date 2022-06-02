import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
    let {registerUser} = useContext(AuthContext)
    return(
        <div>
            <form onSubmit={registerUser}>
                <input type="text" name="username" placeholder="Enter username"></input>
                <input type="password" name="password" placeholder="Enter password"></input>
                <input type="password" name="password2" placeholder="Repeat password"></input>
                <input type="email" name="email" placeholder="email"></input>
                <input type="text" name="firstname" placeholder="First Name"></input>
                <input type="text" name="lastname" placeholder="Last Name"></input>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register