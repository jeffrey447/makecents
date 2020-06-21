import React from "react";
import fbase from "../../firebase";
import { DatePicker, Select } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../Header";

import "./style.less";

const { Option } = Select;

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
        <p>
          Error: <b>{error}</b>
        </p>
      </div>
    );
  }

  if (!user) {
    // not logged in so
    history.push("/");

    // we have to return something so we'll return an empty page.
    return <div></div>;
  } else {
    // user is logged in so display the page.

    return (
      <div className="dashboard">
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Donation Activity</h1>
          <div>
            <DatePicker style={{ width: 200 }} />
            <Select defaultValue="jack" style={{ width: 200, marginLeft: 16 }}>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
