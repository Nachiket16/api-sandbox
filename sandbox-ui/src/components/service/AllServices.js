import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import ServiceCard from "./ServiceCard";
import base_url from "../../api/bootapi";
import axios from "axios";

const AllServices = () => {
    const navigate = useNavigate(); 

    const getAllServicesFromServer = () => {
      axios.get(`${base_url}/v1/services/`)
        .then((response) => {
          console.log("Services : ", response)
          toast.success("services has loaded")
          setServices(response.data)
        },
          (error) => {
            console.log(error);
            toast.error("Something went Wrong")
          }
        )
    }
    useEffect(() => {
      console.log("inside use effect")
      getAllServicesFromServer();
    }, []);
  
    const AddServiceForm = () => {
      console.log("Add service is called using the submit button");
      navigate('/add-service')
    }
  
    const [services, setServices] = useState([]);

    return (
        <div style={{ marginBottom: '20px' }}>
          <h1 className="text-center my-3">All Services</h1>
          <Container className="text-center">
              <Row>
                <Col xs="6">
                  <p>Add service</p>
                </Col>
                <Col xs="6">
                  <Button onClick={AddServiceForm} color="success">
                    {"Add Service"}
                  </Button>
                </Col>
              </Row>
          </Container>
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service.serviceId} style={{ marginBottom: '15px' }}>
                <ServiceCard service={service} />
              </div>
            ))
          ) : (
            <p>No service found</p>
          )}
        </div>
    
      );
}

export default AllServices;