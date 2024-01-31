import React from "react";

const Consumers = ({ consumer }) => {
  console.log(consumer);
  const cardBodyStyle = {
    textAlign: "left", // Align text to the left
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-text">Consumer ID: {consumer.consumerId}</h5>
        <p className="card-title">{`${consumer.firstName} ${consumer.lastName}`}</p>
        <p className="card-text" style={cardBodyStyle}>Email: {consumer.companyEmail}</p>
        <p className="card-text" style={cardBodyStyle}>Mobile: {consumer.mobile}</p>
        <p className="card-text" style={cardBodyStyle}>App ID: {consumer.appId}</p>
        <p className="card-text" style={cardBodyStyle}>Active: {consumer.active ? 'Yes' : 'No'}</p>
        <p className="card-text" style={cardBodyStyle}>Verified: {consumer.verified ? 'Yes' : 'No'}</p>
        <p className="card-text" style={cardBodyStyle}>Created At: {new Date(consumer.createdAt).toLocaleString()}</p>
        <p className="card-text" style={cardBodyStyle}>Updated At: {new Date(consumer.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Consumers;