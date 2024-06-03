import { useRef, useState } from "react";
import styles from "./Login.module.css";

export default function Login(){
    const username = useRef("");
    const password = useRef("");
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.current?.value ==="user" && password.current?.value ==="password"){
            setError(null);
            setIsAuthenticated(true);
        }else{
            setError("Invalid Username or password");
            setIsAuthenticated(false);
        }
    }


    return(
        <div className={styles.container}>
            <h1>Login Page</h1>
            {error && (<div>{error}</div>)}

            {!isAuthenticated && (<form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" ref={username} required />
                </div>
                <div className={styles.group}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref={password} id="password" required />
                </div>
                <div className={styles.group}>
                    <button type="submit">Submit</button>
                </div>
            </form>)}

            {isAuthenticated && (<div>Welcome, user!</div>)}
        </div>
    )
};