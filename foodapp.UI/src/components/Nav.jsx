import { useEffect, useState } from "react";
import styles from "./nav.module.css"
import LoadingPopup from "./LoadingPopup";
import { useUser } from '../context/UserContext'

export default function Nav() {

    const [isLoading, setIsLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const currentPath = window.location.pathname;
    const { user } = useUser();
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    useEffect(()=>{
        const userEmail = localStorage.getItem('userEmail');
        setLoggedUser(userEmail);
    },[user])

    const profilePictureUrl = user?.profilePicture 
    ? `data:${user.profilePictureContentType};base64,${user.profilePicture}` 
    : null;

    const username = user?.name ? user.name: null;
    
    async function logOutHandler() {
        sideMenu();
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


    function sideMenu() {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return <div className={styles.nav}>
            <div className={styles.logo}>
                {/* 🍔Food App */}
                <img style={{height:"70px"}} src='./src/assets/images/logo.png' />
            </div>
            <div>
                <div className={styles.itemHolder}>
                    <a href="/auth" className={currentPath === '/auth' ? styles.active : ''}>Login</a>
                    <a href="/home" className={currentPath === '/home' ? styles.active : ''}>Home</a>
                    <a href="/admin" className={currentPath === '/admin' ? styles.active : ''}>Admin</a>
                    { loggedUser && (
                    <div className={styles.profilePicandLogoutArea}>
                        

                        <span onClick={sideMenu}>
                            <img className={styles.menuBtn} src="./src/assets/images/menu.png" alt="logout"/>
                        </span>
                        
                        <div className={`${styles.sideMenu} ${isSideMenuOpen ? styles.open : ""}`}>
                            <div className={styles.sideMenuFirstContent}>
                                <div className={styles.menuHeader}>
                                    <img src={profilePictureUrl} alt="Profile" className="profile-picture"/>
                                    <span>Hello, {username}</span>
                                    <span onClick={sideMenu}> 
                                        <img className={styles.menuBtn} src="./src/assets/images/close-menu.png" alt="close-menu"/>
                                    </span>
                                </div>
                                <a href="/home" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/order.png" alt="Orders"/>
                                    <a>Orders <br />
                                        <span>Check out the current ongoing orders</span> 
                                    </a>
                                </a>
                                <a href="/menu" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/history.png" alt="History"/>
                                    <a >History <br />
                                        <span>Access the past, completed orders</span>
                                    </a>
                                </a>
                                <a href="/contact" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/promotion.png" alt="Promotion"/>
                                    <a>Promotion <br />
                                        <span>Check you luck here</span>
                                    </a>
                                </a>
                                <a href="/about" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/settings.png" alt="Settings"/>
                                    <a >Settings </a>
                                </a>
                                <a href="/contact" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/help.png" alt="Contact"/>
                                    <a >Contact</a>
                                </a>
                                <a href="/feedback" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/faq.png" alt="FAQ"/>
                                    <a >FAQ<br />
                                        <span>Any question, expore here</span>
                                    </a>
                                </a>
                                <a href="/feedback" className={styles.menuIconWrapper}>
                                    <img className={styles.menuIcon} src="./src/assets/images/feedback.png" alt="Feedback"/>
                                    <a >Feedback<br />
                                        <span>Feedbacks and suggestions are welcome!</span>
                                    </a>
                                </a>
                            </div>
                            <div className={styles.sideMenuMiddleContent}>
                                <span>
                                    <p>There is more to love in the Mobile Application</p>
                                    <img src='./src/assets/images/logo.png' />
                                    <a href=""><img src='./src/assets/images/mobile-app-options.png' /></a>
                                </span>
                            </div>
                            <div className={styles.sideMenuLastContent}>
                                <div >
                                    <img className={styles.menuIcon} id="invite-friends" src="./src/assets/images/invite-friends.png" alt="Feedback"/>    
                                    <span>Invite Friends?</span>
                                </div>
                                <img className={styles.logOutBtn} src="./src/assets/images/logout.png" alt="signout" onClick={logOutHandler}/>
                            </div>
                        </div>
                        {isSideMenuOpen && <div className={styles.overlay} onClick={sideMenu}></div>}
                    </div>
                    ) }
                </div>
            </div>
        { isLoading && <LoadingPopup /> }
    </div>
}