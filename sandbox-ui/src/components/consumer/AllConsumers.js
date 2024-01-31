import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import Consumers from "./Consumers";
import base_url from "../../api/bootapi";
import axios from "axios";

const AllConsumers = () => {
  const navigate = useNavigate(); 

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

  const [consumers, setConsumers] = useState([]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h1 className="text-center my-3">All Consumers</h1>
      <Container className="text-center">
          <Row>
            <Col xs="6">
              <p>Add new consumer</p>
            </Col>
            <Col xs="6">
              <Button onClick={AddConsumerForm} color="success">
                {"Add Consumer"}
              </Button>
            </Col>
          </Row>
      </Container>
      {consumers.length > 0 ? (
        consumers.map((consumer) => (
          <div key={consumer.consumerId} style={{ marginBottom: '15px' }}>
            <Consumers consumer={consumer} />
          </div>
        ))
      ) : (
        <p>No consumers found</p>
      )}
    </div>

  );
}

export default AllConsumers;