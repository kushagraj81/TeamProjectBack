

import React, { useState } from 'react';
import './loginStyle.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { alignCenter } from 'fontawesome';

export const Login = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userobj = {email : event.target.email.value, password: event.target.password.value};
        setError();
        setLoading(true);
        axios.post("http://localhost:8080/login", userobj)
        .then(response => {
            if(response.data == '')
            {
                setLoading(false);
                setError("Invalid Credentials");
                console.log(error);
            }
            else {
                setLoading(false);
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('dashboard/securities');
            }
        });
    }
    
    return (
        <div className="container">
            <form className="form-1" onSubmit={handleSubmit}>
                <h1 style={{color:'#b5fac7'}}>Login</h1>
                <label>Email</label>
                <input type="email" value={username} onChange={handleUsernameChange} name="email" id="email" required />
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}  name="password" id="password" required />
                {error && <span style={{color:"yellow", textAlign:"center"}}>{error}</span>}
                {loading && <span style={{textAlign:"center", color:"white"}}>Logging you in...</span>}
                <input type="submit"></input>            
            </form>
        </div>
    );
}

export default Login;