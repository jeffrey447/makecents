import React from "react";
import Logo from "../../Assets/logo.svg";
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
        <div className = "org">
          
        </div>
      </div>
    </div>
  )
};

export default SelectOrg;
