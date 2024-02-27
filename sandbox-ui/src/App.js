import React, { useEffect } from "react";
import './App.css';
import { Container, Row, Col } from "reactstrap"
import { ToastContainer, toast } from "react-toastify"
import Home from './components/Home';
import Header from './components/Header';
import AllUpstreams from './components/upstream/AllUpstream'
import AllConsumers from './components/consumer/AllConsumers'
import AllWebhooks from './components/webhook/AllWebhooks';
import Menus from './components/Menus';
import UpdateCourseForm from "./components/UpdateCourseForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllServices from "./components/service/AllServices";
import AddConsumer from "./components/consumer/AddConsumer";
import AddServiceForm from "./components/service/AddService";
import AddUpstreamForm from "./components/upstream/AddUpstream";
import AddWebhook from "./components/webhook/AddWebhook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Container fluid>
          <Header />
          <Row>
            <Col md={3}>
              <Menus />
            </Col>
            <Col md={9}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-webhook' element={<AddWebhook />} />
                <Route path='/webhooks' element={<AllWebhooks />} />
                <Route path='/add-upstream' element={<AddUpstreamForm />} />
                <Route path='/upstreams' element={<AllUpstreams />} />
                <Route path="/services" element={<AllServices />} />
                <Route path='/add-service' element={<AddServiceForm />} />
                <Route path='/view-consumers' element={<AllConsumers />} />
                <Route path='/add-consumer' element={<AddConsumer />} />
                <Route path='/update-course/:id' element={<UpdateCourseForm />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
