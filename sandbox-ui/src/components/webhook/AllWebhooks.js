import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Row, Col, Table } from "reactstrap";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WebhookCard from "./WebhookCard"
import Popup from "../Popup";

const AllWebhooks = () => {
    const navigate = useNavigate();
    const [webhooks, setWebhooks] = useState([]);
    const [selectWebhook, setSelectWebhook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(null);

    useEffect(() => {
        getAllWebhooksFromServer();
    }, []);

    const getAllWebhooksFromServer = () => {
        axios.get(`${base_url}/v1/webhooks/`)
            .then((response) => {
                console.log("webhooks : ", response.data)
                toast.success("Webhooks loaded successfully")
                setWebhooks(response.data)
            })
            .catch((error) => {
                console.error(error)
                toast.error("Something went wrong")
            })
    };

    const handleAddWebhookForm = () => {
        console.log("Add webhook called")
        navigate('/add-webhook')
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const viewWebhookDetails = (webhook) => {
        setSelectWebhook(webhook);
        toggleModal();
    }

    return (
        <div style={{ margin: '20px' }}>
            <Container className="text-center">
                <Row>
                    <Col xs="6">
                        <h1>Webhook List</h1>
                    </Col>
                    <Col xs="6">
                        <Button onClick={handleAddWebhookForm} color="success">
                            Add Webhook
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
                                    <th>Webhook Id</th>
                                    <th>Name</th>
                                    <th>Event Type</th>
                                    <th>Service Id</th>
                                    <th>Anchor Id</th>
                                    <th>API Endpoint</th>
                                    <th>Auth Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {webhooks.map((webhook) => (
                                    <tr key={webhook.webhookId}>
                                        <td>{webhook.webhookName}</td>
                                        <td>{webhook.webhookEvent}</td>
                                        <td>{webhook.serviceId}</td>
                                        <td>{webhook.anchorId}</td>
                                        <td>{webhook.apiEndpoint}</td>
                                        <td>{webhook.authType}</td>
                                        <td>
                                            <Button
                                                color="info"
                                                onClick={() => viewWebhookDetails(webhook)}
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
            componentName={WebhookCard}
            componentData={selectWebhook}
            propName="webhook"
          />
        </div>
    )
}

export default AllWebhooks;