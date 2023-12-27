import { Container, Row, Col } from "reactstrap"
import './App.css';
import Header from './components/Header';
import Menus from "./components/Menus";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Consumers from "./components/Consumers";

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <h1 className="text-6xl text-center">
          API Sandbox
        </h1>
        <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
            <Routes>
                <Route path='/' element={<Consumers />} />
              </Routes>
            </Col>
          </Row>
      </Container>
    </>
  )
}