import axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpstreamsCard from "./UpstreamsCard";
import base_url from "../../api/bootapi";

const AllUpstream = () => {
    const navigate = useNavigate();
    const [upstreams, setUpstreams] = useState([]);

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
                console.log(error)
                toast.error("Something went wrong")
            });
    };

    const handleAddUpstreamForm = () => {
        console.log("Add upstream is called using the submit button");
        navigate('/add-upstream');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h1 className="text-center my-3">All Upstream</h1>
            <Container className="text-center">
                <Row>
                    <Col xs="6">
                        <p>Add Upstream</p>
                    </Col>
                    <Col xs="6">
                        <Button onClick={handleAddUpstreamForm} color="success">
                            Add Upstream
                        </Button>
                    </Col>
                </Row>
            </Container>
            {upstreams.length > 0 ? (
                upstreams.map((upstream) => (
                    <div key={upstream.upstreamId} style={{ marginBottom: '15px' }}>
                        <UpstreamsCard upstream={upstream} />
                    </div>
                ))
            ) : (
                <p>No upstream found</p>
            )}
        </div>
    );
};

export default AllUpstream;
