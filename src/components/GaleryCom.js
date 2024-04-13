import React from "react"
import {Container, Row, Col} from 'react-bootstrap';
import Galery1 from "../assets/galery/hero-1.jpg";
import Galery2 from "../assets/galery/hero-2.jpg";
import Galery3 from "../assets/galery/hero3.jpg";
import Galery4 from "../assets/galery/hero-4.jpg";
import Galery5 from "../assets/galery/hero-5.jpg";
import Galery6 from "../assets/galery/hero-6.jpg";


const GaleryCom = () => {
    return <div className=" galery min-vh-100 d-flex align-items-center custom-bg">
        <Container>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                <Col>
                <img src={Galery1} alt="gambar-1" className="w-100"></img>
                </Col>
                <Col>
                <img src={Galery2} alt="gambar-1"  className="w-100"></img>
                </Col>
                <Col>
                <img src={Galery3} alt="gambar-1" className="w-100"></img>
                </Col>
                <Col>
                <img src={Galery4} alt="gambar-1" className="w-100"></img>
                </Col>
                <Col>
                <img src={Galery5} alt="gambar-1" className="w-100"></img>
                </Col>
                <Col>
                <img src={Galery6} alt="gambar-1" className="w-100"></img>
                </Col>
                
                
            </Row>
        </Container>
        </div>;
};

export default GaleryCom;