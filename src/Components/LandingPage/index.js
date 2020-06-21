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
                    <Button className="login" size="large">Login</Button>
                    <Button className="sign-up" size="large">Sign Up</Button>
                </div>
            </div>
            <div>
                <p className="paragraph">We live in a world where black communities live in fear because of injustice,  state-sanctioned violence and anti-Black racism. Only together and through action are we able to make a change.
Make Cents is a platform that allows users regardless of age, sex, and orientation help eradicate all this injustice. Users are able to automatically donate spare change to various origanizations that support black communities fight injustice.
Sign up now and donate your spare change to an issue that makes sense.</p>
            </div>
        </div>
    );
};

export default LandingPage;
