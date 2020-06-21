import React from "react";
import fbase from "../../firebase";
import { DatePicker, Select } from "antd";
import { Line } from "react-chartjs-2";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../Header";

import "./style.less";

const { Option } = Select;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Mastercard",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [46, 65, 59, 80, 57, 63],
    },
  ],
};

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
        <div className="main">
          <h1 style={{ color: "white", fontSize: 40 }}>Donation Activity</h1>
          <div>
            <DatePicker style={{ width: 200 }} />
            <Select defaultValue="jack" style={{ width: 200, marginLeft: 16 }}>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
              <Option value="jack">Jack</Option>
            </Select>
          </div>

          <div style={{ margin: 16 }}>
            <Line
              data={data}
              width={800}
              height={250}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          <div className="split">
            <div className="totals">
              <h3 className="title">Total Donations Today</h3>
              <p className="value">$0.41</p>
              <h3 className="title">Total Donations from 6/13/20 - 6/20/20</h3>
              <p className="value">$1.41</p>
              <h3 className="title">Total Donations for June 2020</h3>
              <p className="value">$25.26</p>
              <h3 className="title">Total Donations from MasterCard</h3>
              <p className="value">$65.41</p>
            </div>

            <div className="transactions">
              <h3 className="title">Recent Activity</h3>
              <div className="list">
                <div>
                  <h4 className="sub-title">Date</h4>
                  <p className="value">6/15/20</p>
                  <p className="value">6/15/20</p>
                  <p className="value">6/15/20</p>
                  <p className="value">6/15/20</p>
                </div>
                <div>
                  <h4 className="sub-title">Description</h4>
                  <p className="value">Subscription</p>
                  <p className="value">Subscription</p>
                  <p className="value">Subscription</p>
                  <p className="value">Subscription</p>
                </div>
                <div>
                  <h4 className="sub-title">Purchase Price</h4>
                  <p className="value">$15.15</p>
                  <p className="value">$15.15</p>
                  <p className="value">$15.15</p>
                  <p className="value">$15.15</p>
                </div>
                <div>
                  <h4 className="sub-title">Amount Donated</h4>
                  <p className="don-value">$0.85</p>
                  <p className="don-value">$0.85</p>
                  <p className="don-value">$0.85</p>
                  <p className="don-value">$0.85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
