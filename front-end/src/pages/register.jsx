import { register } from '../ApiServices/AuthService'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleRegisterClick = async () => {
        const {jwt, success} = await register({ email, password /**, username */ })

        if (success) {
            localStorage.setItem('car-app-jwt', jwt)
            navigate('/Homepage')
        } else {
            alert('Error registering')
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div id="register-elements-div">
            <h1>Vocab Resource Website</h1>
            <form className="login-register-form">
                <input className="borderless" id="register-username" placeholder="username" onChange={handleUsernameChange}></input>
                <input className="borderless" id="register-email" placeholder="email" type="email" onChange={handleEmailChange}></input>
                <input className="borderless" id="register-password" placeholder="password" type="password" onChange={handlePasswordChange}></input>
                <button className="borderless" onClick={handleRegisterClick}>Register</button>
            </form>
        </div>
    )
}