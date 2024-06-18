/* eslint-disable no-unused-vars */
import '../layouts/footers.css'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footers = () => {
  return (
    <footer className="text-white py-4 footer">
      <Container className=''>
        {/* Primera fila con cinco elementos */}
        <Row className="justify-content-between">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/UNIÓN EUROPEA.png" alt="Logo UE" className="img-fluid lgeu hver" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/FAO.png" alt="Logo MAS" className="img-fluid hver sizefoot" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/soberania.png" alt="Logo ONEI" className="img-fluid hver" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/mas sin fondo.png" alt="Logo Soberania Alimentaria" className="img-fluid hver" />
            </a>
          </Col>
        </Row>

        {/* Segunda fila con tres elementos */}
        <Row className="justify-content-around">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/LOGO DESIRA.png" alt="Logo Obsevatorio" className="img-fluid hver" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/saen.png" alt="Logo 1" className="img-fluid hver" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/onei.png" alt="Logo 2" className="img-fluid hver" />
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-5 d-flex justify-content-center align-items-center">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Logo Consultores.png" alt="Logo 3" className="img-fluid hver" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;
