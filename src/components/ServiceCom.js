import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../assets/icon/icon-1.jpg";
import icon2 from "../assets/icon/icon-2.jpg";
import icon3 from "../assets/icon/icon-3.jpg";

const ServiceCom = () => {
  return (
    <div className="mb-5 service-bg gp-6">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="fw-bold">SERVICE</h1>
            <p className="text-black text-black-50 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              iusto.
            </p>
          </Col>
        </Row>
        <Row className=" row-cols-lg-3 row-cols-lg-2 row-cols-lg-1">
          <Col className="text-center">
            <img src={icon1} className="icon fs-2 mb-4 "></img>
            <h5>Makanan Bintang ⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center">
            <img src={icon2} className="icon fs-2 mb-4 "></img>
            <h5>Master Badroom ⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center">
            <img src={icon3} className="icon fs-2 mb-4 "></img>
            <h5> Cleaning Service⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center">
            <img src={icon3} className="icon fs-2 mb-4 "></img>
            <h5> Cleaning Service⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center">
            <img src={icon3} className="icon fs-2 mb-4 "></img>
            <h5> Cleaning Service⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center">
            <img src={icon3} className="icon fs-2 mb-4 "></img>
            <h5> Cleaning Service⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCom;
