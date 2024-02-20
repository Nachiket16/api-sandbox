import React from "react";

const UpstreamsCard = ({ upstream }) => {
  console.log(upstream);
  const cardBodyStyle = {
    textAlign: "left", // Align text to the left
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-text">Upstream Name: {upstream.upstreamName}</h5>
        <p className="card-text">Service ID: {upstream.serviceId}</p>
        <p className="card-text">Base URL: {upstream.baseUrl}</p>
        <p className="card-text">Source System: {upstream.sourceSystem}</p>
        <p className="card-text">Auth Type: {upstream.authType}</p>
        <p className="card-text">Auth Username: {upstream.authUsername}</p>
        <p className="card-text">Auth Password: {upstream.authPassword}</p>
        <p className="card-text">Auth Key: {upstream.authKey}</p>
        <p className="card-text">Auth Secret: {upstream.authSecret}</p>
        <p className="card-text">Auth Refresh Token: {upstream.authRefreshToken}</p>
        <p className="card-text">Header 1: {upstream.header1}</p>
        <p className="card-text">Header 2: {upstream.header2}</p>
        <p className="card-text">Header 3: {upstream.header3}</p>
        <p className="card-text">Header 4: {upstream.header4}</p>
        <p className="card-text">Header 5: {upstream.header5}</p>
      </div>
    </div>
  );
}

export default UpstreamsCard;
