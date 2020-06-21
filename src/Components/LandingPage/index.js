import React from "react";
import Logo from '../../Assets/Logo.png';
import { Button } from 'antd';


import "./style.less";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="header">
                
                <img src={Logo} alt="Logo" className="logo" />
                <div className="buttons">
                    <Button className="login">Login</Button>
                    <Button className="sign-up">Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
