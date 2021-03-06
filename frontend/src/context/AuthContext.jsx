import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    
    
    let[authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null);
    let[user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null);
    let[loading, setLoading] = useState(true)

    const change = useNavigate(); 

    let loginUser = async (e )=> {
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            change('/home')
        }else{
            alert('Algo Fue mal');
        }

    }

    let registerUser = async (e )=> {
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password': e.target.password.value, "password2": e.target.password2.value,
            "email": e.target.email.value,
            "first_name": e.target.firstname.value,
            "last_name": e.target.lastname.value})
        })
        let data = await response.json()
        if(response.status === 201){
            console.log(data);
            change('/login')
        }else{
            alert('Algo Fue mal');
        }

    }
    
    let logOutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        change('/login')
    }

    let updateToken = async () => {
        console.log('UpdateTokenCalled');
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logOutUser()
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logOutUser:logOutUser,
        registerUser:registerUser,
    }

    useEffect(()=> { 
        //let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, 2000)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}