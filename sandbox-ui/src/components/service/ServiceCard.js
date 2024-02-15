import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const cardBodyStyle = {
    textAlign: "left", // Align text to the left
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-text">Service ID: {service.serviceId}</h5>
        <p className="card-title">{service.serviceName}</p>
        <p className="card-text" style={cardBodyStyle}>Integration Type: {service.integrationType}</p>
        <p className="card-text" style={cardBodyStyle}>Consumer ID: {service.consumerId}</p>
        <p className="card-text" style={cardBodyStyle}>Anchor ID: {service.anchorId}</p>
        <p className="card-text" style={cardBodyStyle}>Auth Type: {service.authType}</p>
        <p className="card-text" style={cardBodyStyle}>JWT Token: {service.jwtToken}</p>
        <p className="card-text" style={cardBodyStyle}>API Username: {service.apiUsername}</p>
        <p className="card-text" style={cardBodyStyle}>API Password: {service.apiPassword}</p>
        <p className="card-text" style={cardBodyStyle}>API Key: {service.apiKey}</p>
        <p className="card-text" style={cardBodyStyle}>API Secret: {service.apiSecret}</p>
        <p className="card-text" style={cardBodyStyle}>API Refresh Token: {service.apiRefreshToken}</p>
        <p className="card-text" style={cardBodyStyle}>Active: {service.active ? 'Yes' : 'No'}</p>
        <p className="card-text" style={cardBodyStyle}>Created At: {new Date(service.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
