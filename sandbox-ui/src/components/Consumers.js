import React from "react";

const Consumers = ({consumer}) => {
    return(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`${consumer.firstName} ${consumer.lastName}`}</h5>
          <p className="card-text">Email: {consumer.companyEmail}</p>
          <p className="card-text">Mobile: {consumer.mobile}</p>
          <p className="card-text">Consumer ID: {consumer.consumerId}</p>
          <p className="card-text">App ID: {consumer.appId}</p>
          <p className="card-text">Active: {consumer.active ? 'Yes' : 'No'}</p>
          <p className="card-text">Verified: {consumer.verified ? 'Yes' : 'No'}</p>
          <p className="card-text">Created At: {new Date(consumer.createdAt).toLocaleString()}</p>
          <p className="card-text">Updated At: {new Date(consumer.updatedAt).toLocaleString()}</p>
        </div>
      </div>
      );
}

export default Consumers;