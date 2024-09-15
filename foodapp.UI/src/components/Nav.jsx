import { useEffect, useState } from "react";
import styles from "./nav.module.css"
import LoadingPopup from "./LoadingPopup";
import { useUser } from '../context/UserContext'

export default function Nav() {

    const [isLoading, setIsLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const currentPath = window.location.pathname;
    const { user } = useUser();

    useEffect(()=>{
        const userEmail = localStorage.getItem('userEmail');
        setLoggedUser(userEmail);
    },[user])

    const profilePictureUrl = user?.profilePicture 
    ? `data:${user.profilePictureContentType};base64,${user.profilePicture}` 
    : null;
    
    async function logOutHandler() {
        setIsLoading(true);
        setTimeout(async () => {
            try {
                const response = await fetch("https://localhost:7181/api/Auth/logout", {
                    method: "GET",
                    credentials: "include"
                });
                const data = await response.json();
                if (response.ok) {
                    localStorage.removeItem("userEmail");
                    document.location = "/auth";
                } else {
                    console.log("Could not log out: ", response);
                }
            } catch (error) {
                console.error("Error logging out:", error);
            } finally {
                setIsLoading(false);
            }
        }, 400);
    }

    return <div className={styles.nav}>
            <div className={styles.logo}>
                🍔Food App
            </div>
            <div>
                <div className={styles.itemHolder}>
                    <a href="/auth" className={currentPath === '/auth' ? styles.active : ''}>Login</a>
                    <a href="/home" className={currentPath === '/home' ? styles.active : ''}>Home</a>
                    <a href="/admin" className={currentPath === '/admin' ? styles.active : ''}>Admin</a>
                    { loggedUser && (
                    <div className={styles.profilePicandLogoutArea}>
                        <a href="/profile"><img src={profilePictureUrl} alt="Profile" className="profile-picture"/></a>

                        <span onClick={logOutHandler}>
                            <img className={styles.logOutBtn} src="./src/assets/images/logout.png" alt="logout"/>
                        </span>
                    </div>
                )}
                </div>
            </div>
        {isLoading && <LoadingPopup /> }
    </div>
}