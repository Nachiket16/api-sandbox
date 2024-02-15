import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddConsumer = () => {
  const navigate = useNavigate();
  const [consumerData, setConsumerData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    mobile: "",
    loginPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsumerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/v1/consumers`, consumerData);
      console.log("Consumer added:", response.data);
      toast.success("Consumer has been added successfully");
      navigate("/view-consumers")
    } catch (error) {
      console.error("Error adding consumer:", error);
      toast.error("Something went wrong while adding consumer");
    }
  };

  return (
    <Container>
      <h2 className="text-center my-3">Form for adding consumer</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={consumerData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={consumerData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="companyEmail">Company Email</Label>
          <Input
            type="email"
            name="companyEmail"
            id="companyEmail"
            value={consumerData.companyEmail}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Mobile</Label>
          <Input
            type="text"
            name="mobile"
            id="mobile"
            value={consumerData.mobile}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Login Password</Label>
          <Input
            type="text"
            name="loginPassword"
            id="loginPassword"
            value={consumerData.loginPassword}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddConsumer;