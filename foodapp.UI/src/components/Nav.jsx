// import { useEffect, useState } from "react"
import styles from "./nav.module.css"

export default function Nav() {

    const user = localStorage.getItem('user');

    async function logOutHandler() {
        const response = await fetch("https://localhost:7181/api/Auth/logout", {
            method: "GET",
            credentials: "include"
        })
        const data = await response.json();
        if(response.ok) {
            localStorage.removeItem("user");
            alert(data.message);
            document.location = "/login";
        } else {
            console.log("Could not log out: ", response);
        }
    }
    return <div className={styles.nav}>
        <div className={styles.logo}>
            🍔Food App
        </div>
        <div>
            {
                user ?
                    <span className={styles.itemHolder}>
                        <a href="/login">Login</a>
                        <a href="/home">Home</a>
                        <a href="/admin">Admin</a>
                        <span onClick={logOutHandler}>Log Out</span>
                    </span> :
                    <span className={styles.itemHolder}>
                        <a href="/login">Login</a>
                        <a href="/home">Home</a>
                        <a href="/admin">Admin</a>
                    </span>
            }
        </div>
    </div>
}