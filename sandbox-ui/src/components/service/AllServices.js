import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "reactstrap";
import { toast } from "react-toastify";
import ServiceCard from "./ServiceCard";
import base_url from "../../api/bootapi";
import axios from "axios";
import Popup from "../Popup";


const AllServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const viewServiceDetails = (service) => {
    setSelectedService(service);
    toggleModal();
  }


  return (
    <div style={{ marginBottom: '20px' }}>
      <Container className="text-center">
        <Row>
          <Col xs="6">
            <h1>Service List</h1>
          </Col>
          <Col xs="6">
            <Button onClick={AddServiceForm} color="success">
              {"Add Service"}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="12">
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Service Id</th>
                  <th>Name</th>
                  <th>Integration Type</th>
                  <th>Anchor id</th>
                  <th>Auth Type</th>
                  <th>JWT Token</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.serviceId}>
                    <td>{service.serviceId}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.integrationType}</td>
                    <td>{service.anchorId}</td>
                    <td>{service.authType}</td>
                    <td>{service.jwtToken}</td>
                    <td>
                      <Button
                        color="info"
                        onClick={() => viewServiceDetails(service)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Popup
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        componentName={ServiceCard}
        componentData={selectedService}
        propName="service"
      />
    </div>

  );
}

export default AllServices;