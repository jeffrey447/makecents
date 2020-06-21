import React from "react";
import { PlaidLink } from 'react-plaid-link';
import "./style.less";

const Settings = () => {
  const onSuccess = (token, metadata) => {
    console.log(token);
    console.log(metadata);
  }
  return (
    <div className="settings">
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
