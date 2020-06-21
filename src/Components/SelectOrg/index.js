import React from "react";
import Logo from "../../Assets/logo.svg";
import BLM from "../../Assets/BLM.png";
import BAJI from "../../Assets/BAJI.png";
import COC from "../../Assets/COC.png";
import { Input } from 'antd';
import "./style.less";

const { Search } = Input;

const SelectOrg = () => {
  return (
    <div className="select-org">
      <img src={Logo} alt="Make Cents Logo" className="logo" />
      <div className="select-org-form">
        <h1 className="select-org-title">Select the organization you want to donate to</h1>
        <Search
          className="search-bar"
          placeholder="Search"
          onSearch={value => console.log(value)}
        />
        <div className="all-orgs">
          <div className = "org">
            <div className="org-logo-container">
              <img src={BLM} alt="BLM" className="org-logo" />
            </div>
            <div className="org-description-container">
              <h2 className="org-title">Black Lives Matter</h2>
              <p className="org-description">Black Lives Matter Foundation, Inc is a global organization in the US,
                UK, and Canada, whose mission is to eradicate white supremacy and build
                local power to intervene in violence inflicted on Black communities by
                the state and vigilantes.</p>
            </div>
          </div>
          <div className = "org">
            <div className="org-logo-container">
              <img src={BAJI} alt="BAJI" className="org-logo" />
            </div>
            <div className="org-description-container">
              <h2 className="org-title">Black Alliance for Just Immigration</h2>
              <p className="org-description">The Black Alliance for Just Immigration (BAJI) educates and engages African
              American and black immigrant communities to organize and advocate for racial, social, and economic justice.</p>
            </div>
          </div>
          <div className = "org">
            <div className="org-logo-container">
              <img src={COC} alt="COC" className="org-logo" />
            </div>
            <div className="org-description-container">
              <h2 className="org-title">Color of Change</h2>
              <p className="org-description">Color of Change helps people respond effectively to injustice in the world
               around us. As a national online force driven by more than 1.5 million members, Color of Change moves decision-makers
                in corporations and government to create a more human and less hostile world for Black people in America.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SelectOrg;
