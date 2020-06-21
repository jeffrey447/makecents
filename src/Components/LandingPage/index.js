import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
import Banner from "../../Assets/landing-image.jpg";

import "./style.less";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <img src={Logo} alt="Make Cents Logo" className="logo" />
        <div className="buttons">
          <Link to="/login">
            <Button className="login" size="large">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="sign-up" size="large">
              Sign Up
            </Button>
          </Link>

        </div>
      </div>
      <div className="content">
        <div className="paragraph-button">
          <p className="paragraph">
            We live in a world where black communities live in fear because of
            injustice, state-sanctioned violence and anti-Black racism. Only
            together and through action are we able to make a change. <br></br><br></br>Make Cents
            is a platform that allows users regardless of age, sex, and
            orientation help eradicate all this injustice. Users are able to
            automatically donate spare change to various origanizations that
            support black communities fight injustice. <br></br><br></br>Sign up now and donate your
            spare change to an issue that makes sense.
          </p>
          <Link to="/signup">
            <Button className="sign-up" size="large">
              Sign Up
            </Button>
          </Link>
        </div>
        <img className="banner" src={Banner} alt="Banner" />
      </div>
    </div>
  );
};

export default LandingPage;
