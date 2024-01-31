import React, { useEffect } from "react";
import './App.css';
import { Container, Row, Col } from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from './components/Home';
import Header from './components/Header';
import Upstreams from './components/upstream/Upstreams'
import AllConsumers from './components/consumer/AllConsumers'
import Webhooks from './components/webhook/Webhooks';
import Menus from './components/Menus';
import UpdateCourseForm from "./components/UpdateCourseForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from "./components/service/Services";
import AddConsumer from "./components/consumer/AddConsumer";

function App() {
  return (
    <div>      
      <BrowserRouter>
      
        <ToastContainer />
        <Container>
          <Header />
        <div className="dropdown d-flex justify-content-end">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          </ul>
        </div>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/webhooks' element={<Webhooks />} />
                <Route path='/upstreams' element={<Upstreams />} />
                <Route path="/services" element={<Services/>}/>
                <Route path='/view-consumers' element={<AllConsumers />} />
                <Route path='/add-consumer' element={<AddConsumer />} />
                <Route path='/update-course/:id' element={<UpdateCourseForm/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
