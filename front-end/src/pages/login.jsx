import { useState } from 'react';

import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = async () => {
        // const {jwt, success} = await register({ email, password })

        // if (success) {
        //     localStorage.setItem('car-app-jwt', jwt)
        //     navigate('/Homepage')
        // } else {
        //     alert('Error registering')
        // }
    }
    const handleNavToRegister = () => {
        navigate('/register')
    }

    return (
        <div id="login-elements-div">
            <h1>Vocab Resource Website</h1>
            <form className="login-register-form">
                <input className="borderless" id="login-email" placeholder="email" type="email" onChange={handleEmailChange}></input>
                <input className="borderless" id="login-password" placeholder="password" type="password" onChange={handlePasswordChange}></input>
                <button className="borderless" onClick={handleLogin}>Login</button>
            </form>
            <div>
                Dont have an account? <a id="register-link" onClick={handleNavToRegister}>Register</a>
            </div>
        </div>
    )
}