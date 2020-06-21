import React from "react";
import { PlaidLink } from 'react-plaid-link';

import { Button } from "antd";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
import Banner from "../../Assets/landing-image.jpg";


import "./style.less";



const Settings = () => {
  const onSuccess = (token, metadata) => {
    console.log(token);
    console.log(metadata);
  }
  return (
    
    <div className="settings">
      <div className="header">
        <img src={Logo} alt="Make Cents Logo" className="logo" />
        <div className="buttons">
          <Link to="/dashboard">
            <Button className="dashboard-button" size="large">
              Dashboard
            </Button>
          </Link>
          <Link to="/about">
            <Button className="about-button" size="large">
              About
            </Button>
          </Link>
          <Link to="/settings">
            <Button className="settings-button" size="large">
              Settings
            </Button>
          </Link>
          <Link to="/">
            <Button className="log-out" size="large">
              Log Out
            </Button>
          </Link>

        </div>
      </div>
      <PlaidLink
        clientName="Makes Cents"
        env="sandbox"
        product={['auth', 'transactions']}
        publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
        onSuccess={onSuccess}
      >
        Connect a bank account
      </PlaidLink>
    </div>

  )
};

export default Settings;
