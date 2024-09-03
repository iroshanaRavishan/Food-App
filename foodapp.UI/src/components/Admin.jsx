import React, { useEffect, useState } from 'react';

export default function Admin() {

    const [partners, setPartners] = useState([]);

    useEffect(()=>{
        fetch("https://localhost:7181/api/Auth/admin", {
            method: "GET",
            credentials: "include"
        }).then(response => response.json()).then(data=> {
            setPartners(data.trustedPartners);
            console.log("trustedPartners :", data.trustedPartners);
        }).catch((error)=> {
            console.log("Error Loading the page", error)
        });
    },[])

  return (
    <div>
        {partners?partners.map((item, index)=>(
            <li key={index}>{item}</li>
        )):
            <h1>No trusted partners..!</h1>
        }
    </div>
  )
}
