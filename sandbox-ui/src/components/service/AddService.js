import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

const AddServiceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceName: "",
    consumerId: 0,
    anchorId: "",
    authType: "JWT",
    integrationType: "ERP"
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
      const response = await axios.post(`${base_url}/v1/services`, formData);
      console.log("Service added:", response.data);
      toast.success("Service has been added successfully");
      navigate("/services");
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Something went wrong while adding service");
    }
  };

  return (
    <Container>
      <h2 className="text-center my-3">Add Service Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="serviceName">Service Name</Label>
          <Input
            type="text"
            name="serviceName"
            id="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="consumerId">Consumer ID</Label>
          <Input
            type="number"
            name="consumerId"
            id="consumerId"
            value={formData.consumerId}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="anchorId">Anchor ID</Label>
          <Input
            type="text"
            name="anchorId"
            id="anchorId"
            value={formData.anchorId}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="authType">Auth Type</Label>
          <Input
            type="select"
            name="authType"
            id="authType"
            value={formData.authType}
            onChange={handleChange}
          >
            <option value="JWT">JWT</option>
            {/* Add other auth types as needed */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="integrationType">Integration Type</Label>
          <Input
            type="select"
            name="integrationType"
            id="integrationType"
            value={formData.integrationType}
            onChange={handleChange}
          >
            <option value="ERP">ERP</option>
            {/* Add other integration types as needed */}
          </Input>
        </FormGroup>
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddServiceForm;
