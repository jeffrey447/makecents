import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fbase from '../../firebase';

import "./style.less";

const Dashboard = ({ history }) => {
    const [user, loading, error] = useAuthState(fbase.auth);

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

        return <div className="dashboard">Dashboard</div>;
    }
};

export default Dashboard;
