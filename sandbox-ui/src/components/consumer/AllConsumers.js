import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Table,} from "reactstrap";
import { toast } from "react-toastify";
import Consumers from "./Consumers";
import Popup from "../Popup";
import base_url from "../../api/bootapi";
import axios from "axios";

const AllConsumers = () => {
  const navigate = useNavigate();
  const [consumers, setConsumers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConsumer, setSelectedConsumer] = useState(null);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/v1/consumers/`)
      .then((response) => {
        console.log("Consumers : ", response)
        toast.success("course has loaded")
        setConsumers(response.data)
      },
        (error) => {
          console.log(error);
          toast.error("Something went Wrong")
        }
      )
  }

  useEffect(() => {
    console.log("inside use effect")
    getAllCoursesFromServer();
  }, []);

  const AddConsumerForm = () => {
    console.log("Add consumer is called using the submit button");
    navigate('/add-consumer')
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const viewConsumerDetails = (consumer) => {
    setSelectedConsumer(consumer);
    toggleModal();
    console.log("View Consumer Details :", consumer);
  }



  return (
    <div style={{ marginBottom: '20px' }}>
      <Container className="text-center">
        <Row>
          <Col xs="6">
            <h1>Consumer List</h1>
          </Col>
          <Col xs="6">
            <Button onClick={AddConsumerForm} color="success">
              {"Add Consumer"}
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
                  <th>Consumer ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {consumers.map((consumer) => (
                  <tr key={consumer.consumerId}>
                    <td>{consumer.consumerId}</td>
                    <td>{`${consumer.firstName} ${consumer.lastName}`}</td>
                    <td>{consumer.companyEmail}</td>
                    <td>
                      <Button
                        color="info"
                        onClick={() => viewConsumerDetails(consumer)}
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
        componentName={Consumers}
        componentData={selectedConsumer}
        propName="consumer"
      />
    </div>
  );
}

export default AllConsumers;
