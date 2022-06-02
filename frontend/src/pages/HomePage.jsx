import React, { useEffect, useState, useContext } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import AuthContext from '../context/AuthContext'
const HomePage = () => {
    //let[notes, setNotes] = useState([])
    let {authTokens} = useContext(AuthContext)
    const navigae = useNavigate();
    useEffect(()=>{
       if(!authTokens){
        navigae("/login");
       }
    }, [])

    //let getNotes = async()=>{
    //    let response = await fetch('http://127.0.0.1:8000/api/notes', { 
    //        method: 'GET',
    //        headers:{
    //            'Content-Type': 'application/json',
    //            'Authoritation': 'Bearer ' + String(authTokens.access)
    //        }
    //    })
    //    let data = await response.json()
    //    setNotes(data)
    //}

    return(
        <div className="flex">
            <p>You Are logged in to the home page</p>

            
        </div>
    )
    //<ul>
    //{notes.map(note => (
    //    <li key={note.id}>{note.body}</li>
    //))}
    //</ul>
}

export default HomePage