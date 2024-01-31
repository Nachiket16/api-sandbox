import React, { useEffect } from "react";
import './App.css';
import { Container, Row, Col } from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from './components/Home';
import Header from './components/Header';
import Allcourses from './components/Allcourses'
import AllConsumers from './components/AllConsumers'
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import UpdateCourseForm from "./components/UpdateCourseForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Consumers from "./components/Consumers";

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
                <Route path='/consumers' element={<Consumers />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<Allcourses />} />
                <Route path='/view-consumers' element={<AllConsumers />} />
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
