import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRouter() {

    const [isLogged, setIsLogged] = useState(false);
    const [waiting, setWaiting] = useState(true);

    useEffect(()=>{
        fetch("https://localhost:7181/api/Auth/authuser", {
            method: "GET",
            credentials: "include", // Include cookies in cross-origin requests
        }).then(response => {
            if (response.ok) {
                setIsLogged(true)
                setWaiting(false)
            }
            return response.json();
        }).then(data=> {
            localStorage.setItem("user", data.user.email)
            console.log(data.user)
        }).catch(err=> {
            console.log("Error protected routes: ", err);
            setWaiting(false);
            localStorage.removeItem("user");
        })
    },[])

  return ( waiting ? <div className="waitingPage">
    <div>Waiting...</div>
  </div>:
  isLogged ? <Outlet /> : <Navigate to="/login" />
  )
}
