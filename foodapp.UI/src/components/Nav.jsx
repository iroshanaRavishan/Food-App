import styles from "./nav.module.css"

export default function Nav() {

    const user = localStorage.getItem('user');
    const currentPath = window.location.pathname;

    async function logOutHandler() {
        const response = await fetch("https://localhost:7181/api/Auth/logout", {
            method: "GET",
            credentials: "include"
        })
        const data = await response.json();
        if(response.ok) {
            localStorage.removeItem("user");
            document.location = "/auth";
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
                        <a href="/auth" className={currentPath === '/auth' ? styles.active : ''}>Login</a>
                        <a href="/home" className={currentPath === '/home' ? styles.active : ''}>Home</a>
                        <a href="/admin" className={currentPath === '/admin' ? styles.active : ''}>Admin</a>
                        <span onClick={logOutHandler}>Log Out</span>
                    </span> :
                    <span className={styles.itemHolder}>
                        <a href="/auth" className={currentPath === '/auth' ? styles.active : ''}>Login</a>
                        <a href="/home" className={currentPath === '/home' ? styles.active : ''}>Home</a>
                        <a href="/admin" className={currentPath === '/admin' ? styles.active : ''}>Admin</a>
                    </span>
            }
        </div>
    </div>
}