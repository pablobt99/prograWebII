import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
    //let {loginUser} = useContext(AuthContext)
    return(
        <div>
            <form onSubmit={Register}>
                <input type="text" name="username" placeholder="Enter username"></input>
                <input type="text" name="username" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Enter password"></input>
                <input type="password" name="password" placeholder="Repeat password"></input>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage