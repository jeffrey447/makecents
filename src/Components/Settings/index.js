import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import fbase from '../../firebase';
import { createToast } from '../../toast';

import { PlaidLink } from 'react-plaid-link';

import { Button } from "antd";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";

import "./style.less";

const Settings = ({ history }) => {
    const [user, loading, error] = useAuthState(fbase.auth);

    const onSuccess = (token, metadata) => {
        //console.log(token);
        //console.log(metadata);

        /*
            if you wanted to remove their bank, you can just provide a
                null token and null name. it's equivalent.
        */
        axios.post(`http://localhost:5000/api/users/${user.uid}/add_bank`, {
            token: token,
            name: metadata.institution.name
        }).then((data) => {
            if (data.success) {
                // yeet
            } else {
                createToast(data.error);
            }
        }).catch((error) => {
            createToast(error);
        })
    };

    if (loading) {
        // can replace?
        return (
            <div>
                <p>Loading user...</p>
            </div>
        );
    }

    if (error) {
        // can replace?
        return (
            <div>
                <p>Error: <b>{error}</b></p>
            </div>
        );
    }

    if (!user) {
        // not logged in so
        history.push('/');

        // we have to return something so we'll return an empty page.
        return (
            <div></div>
        );
    } else {
        // user is logged in so display the page.

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
                <div className="account">
                    <h1 className="account-title">Account</h1>
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
        );
    }
};

export default Settings;