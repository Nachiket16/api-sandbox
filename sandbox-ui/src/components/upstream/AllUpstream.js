import axios from "axios";
import { Button, Container, Row, Col, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpstreamCard from "./UpstreamsCard";
import base_url from "../../api/bootapi";
import Popup from "../Popup";

const AllUpstream = () => {
    const navigate = useNavigate();
    const [upstreams, setUpstreams] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUpstream, setSelectedUpstream] = useState(null);

    useEffect(() => {
        getAllUpstreamFromServer();
    }, []);

    const getAllUpstreamFromServer = () => {
        axios.get(`${base_url}/v1/upstreams/`)
            .then((response) => {
                console.log("upstreams : ", response.data)
                toast.success("Upstream loaded successfully")
                setUpstreams(response.data)
            })
            .catch((error) => {
                console.error(error)
                toast.error("Something went wrong")
            });
    };

    const handleAddUpstreamForm = () => {
        console.log("Add upstream is called using the submit button");
        navigate('/add-upstream');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const viewUpstreamDetails = (upstream) => {
        setSelectedUpstream(upstream);
        toggleModal();
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <Container className="text-center">
                <Row>
                    <Col xs="6">
                        <h1>Upstream List</h1>
                    </Col>
                    <Col xs="6">
                        <Button onClick={handleAddUpstreamForm} color="success">
                            Add Upstream
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
                                    <th>Upstream Id</th>
                                    <th>Name</th>
                                    <th>Base URL</th>
                                    <th>Source System</th>
                                    <th>Auth Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upstreams.map((upstream) => (
                                    <tr key={upstream.upstreamId}>
                                        <td>{upstream.upstreamId}</td>
                                        <td>{upstream.upstreamName}</td>
                                        <td>{upstream.baseUrl}</td>
                                        <td>{upstream.sourceSystem}</td>
                                        <td>{upstream.authType}</td>
                                        <td>
                                            <Button
                                                color="info"
                                                onClick={() => viewUpstreamDetails(upstream)}
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
                componentName={UpstreamCard}
                componentData={selectedUpstream}
                propName="upstream"
            />
        </div>
    );
};

export default AllUpstream;
