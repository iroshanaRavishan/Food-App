import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRouter() {

    const [isLogged, setIsLogged] = useState(false);
    const [waiting, setWaiting] = useState(true);

    useEffect(()=>{
        fetch("api/Auth/Auth", {
            method: "GET",
            credentials: 'include'
        }).then(response => response.json).then(data=> {
            setIsLogged(true)
            setWaiting(false)
            localStorage.setItem('user', data.user.email)
            console.log(data.user)
        }).catch(error=> {
            console.log(error);
            setWaiting(false);
            localStorage.removeItem('user');
        })
    },[])

  return ( waiting ? <div className='waitingPage'>
    <div>Waiting...</div>
  </div>:
  isLogged ? <Outlet /> : <Navigate to="/login" />
  )
}
