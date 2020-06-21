import React from "react";
import logo from '../../Assets/Logo.png';
import "./style.less";

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();

        // handle login stuff
    }

    return (
        <div className="login-container">
            <img alt="Make Cents" src={logo} height="50"></img>
            <div className="login-header">
                <h1>Log In</h1>
            </div>
            <div className="input-container">
                <form onSubmit={handleLogin}>
                    <div className="input-field">
                        <input name="email" type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <input name="password" type="password" placeholder="Password" />
                    </div>
                    <div className="input-button">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
