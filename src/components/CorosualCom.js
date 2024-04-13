import React from "react";

import Carousel from 'react-bootstrap/Carousel';


import Corosual1 from "../assets/galery/hero-1.jpg"
import Corosual2 from "../assets/galery/hero-2.jpg"
import Corosual3 from "../assets/galery/hero3.jpg"
import Corosual4 from "../assets/galery/hero-4.jpg"
import Corosual5 from "../assets/galery/hero-5.jpg"

const CorosualCom = () => {
    return (
        <div>
         <Carousel>
      <Carousel.Item>
        <Corosual1 text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Corosual2 text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Corosual3 text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        
    );
};

export default CorosualCom;