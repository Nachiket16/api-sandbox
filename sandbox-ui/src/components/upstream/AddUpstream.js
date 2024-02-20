import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

const AddUpstreamForm = () => {
  const [formData, setFormData] = useState({
    upstreamName: "",
    serviceId: 0,
    baseUrl: "",
    sourceSystem: "",
    authType: "",
    authUsername: "",
    authPassword: "",
    authKey: "",
    authSecret: "",
    authRefreshToken: "",
    header1: "",
    header2: "",
    header3: "",
    header4: "",
    header5: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/v1/upstreams`, formData);
      console.log("Upstream added:", response.data);
      toast.success("Upstream has been added successfully");
      // Optionally, you can reset the form after successful submission
      setFormData({
        upstreamName: "",
        serviceId: 0,
        baseUrl: "",
        sourceSystem: "",
        authType: "",
        authUsername: "",
        authPassword: "",
        authKey: "",
        authSecret: "",
        authRefreshToken: "",
        header1: "",
        header2: "",
        header3: "",
        header4: "",
        header5: ""
      });
    } catch (error) {
      console.error("Error adding upstream:", error);
      toast.error("Something went wrong while adding upstream");
    }
  };

  return (
    <Container>
      <h2 className="text-center my-3">Add Upstream Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="upstreamName">Upstream Name</Label>
          <Input
            type="text"
            name="upstreamName"
            id="upstreamName"
            value={formData.upstreamName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="serviceId">Service ID</Label>
          <Input
            type="number"
            name="serviceId"
            id="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="baseUrl">Base URL</Label>
          <Input
            type="text"
            name="baseUrl"
            id="baseUrl"
            value={formData.baseUrl}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="sourceSystem">Source System</Label>
          <Input
            type="text"
            name="sourceSystem"
            id="sourceSystem"
            value={formData.sourceSystem}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authType">Auth Type</Label>
          <Input
            type="text"
            name="authType"
            id="authType"
            value={formData.authType}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authUsername">Auth Username</Label>
          <Input
            type="text"
            name="authUsername"
            id="authUsername"
            value={formData.authUsername}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authPassword">Auth Password</Label>
          <Input
            type="text"
            name="authPassword"
            id="authPassword"
            value={formData.authPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authKey">Auth Key</Label>
          <Input
            type="text"
            name="authKey"
            id="authKey"
            value={formData.authKey}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authSecret">Auth Secret</Label>
          <Input
            type="text"
            name="authSecret"
            id="authSecret"
            value={formData.authSecret}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authRefreshToken">Auth Refresh Token</Label>
          <Input
            type="text"
            name="authRefreshToken"
            id="authRefreshToken"
            value={formData.authRefreshToken}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="header1">Header 1</Label>
          <Input
            type="text"
            name="header1"
            id="header1"
            value={formData.header1}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="header2">Header 2</Label>
          <Input
            type="text"
            name="header2"
            id="header2"
            value={formData.header2}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="header3">Header 3</Label>
          <Input
            type="text"
            name="header3"
            id="header3"
            value={formData.header3}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="header4">Header 4</Label>
          <Input
            type="text"
            name="header4"
            id="header4"
            value={formData.header4}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="header5">Header 5</Label>
          <Input
            type="text"
            name="header5"
            id="header5"
            value={formData.header5}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUpstreamForm;
