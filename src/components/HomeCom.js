import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

const HomeComp = () => {
    return <div  className="home min-vh-100 w-100">
        <Container>
            <Row>
                <Col >
                <h1 className="text-white text-center fs-1">Mari bersantai sejenak</h1>
                <p className="text-white text-center text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et.</p>
                </Col>
            </Row>
        </Container>
        
    </div>;
};

export default HomeComp;