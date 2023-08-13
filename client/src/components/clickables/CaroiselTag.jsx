import img1 from "../../assets/images/signIn.jpg";
import img2 from "../../assets/images/skyline.jpg";
import img3 from "../../assets/images/heeeeheee.jpg";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function CaroiselTag() {
  return (
    <MDBCarousel showControls showIndicators fade dark>
      <MDBCarouselItem
        className="w-100 d-block "
        itemId={1}
        src={img1}
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block "
        itemId={2}
        src={img2}
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block "
        itemId={3}
        src={img3}
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
