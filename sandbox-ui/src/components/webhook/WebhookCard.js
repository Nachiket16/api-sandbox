import React from "react";

const WebhookCard = ({ webhook }) => {
    const cardBodyStyle = {
      textAlign: "left", 
    };
    
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-text">Webhook ID: {webhook.webhookId}</h5>
          <p className="card-text">Created At: {new Date(webhook.createdAt).toLocaleString()}</p>
          <p className="card-text">Updated At: {new Date(webhook.updatedAt).toLocaleString()}</p>
          <p className="card-text">Active: {webhook.active ? 'Yes' : 'No'}</p>
          <p className="card-text">Webhook Name: {webhook.webhookName}</p>
          <p className="card-text">Webhook Event: {webhook.webhookEvent}</p>
          <p className="card-text">Service ID: {webhook.serviceId}</p>
          <p className="card-text">Anchor ID: {webhook.anchorId}</p>
          <p className="card-text">API Endpoint: {webhook.apiEndpoint}</p>
          <p className="card-text">Auth Type: {webhook.authType}</p>
          <p className="card-text">Auth Username: {webhook.authUsername}</p>
          <p className="card-text">Auth Password: {webhook.authPassword}</p>
          <p className="card-text">Auth Key: {webhook.authKey}</p>
          <p className="card-text">Auth Secret: {webhook.authSecret}</p>
          <p className="card-text">Auth Refresh Token: {webhook.authRefreshToken}</p>
          <p className="card-text">Header 1: {webhook.header1}</p>
          <p className="card-text">Header 2: {webhook.header2}</p>
          <p className="card-text">Header 3: {webhook.header3}</p>
          <p className="card-text">Header 4: {webhook.header4}</p>
          <p className="card-text">Header 5: {webhook.header5}</p>
          <p className="card-text">Allowed Customer: {webhook.allowedCustomer}</p>
        </div>
      </div>
    );
  }

export default WebhookCard;