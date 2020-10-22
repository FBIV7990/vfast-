import React from "react";
import { connect } from "react-redux";
import slider1 from "../img/background check.jpg";
import slider2 from "../img/background verification.jpg";
import slider3 from "../img/contractor license.jpg";
import slider4 from "../img/employee document check.jpg";
import slider5 from "../img/tenant verification.jpg";
import slider6 from "../img/vehicle verification.jpg";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

class Slider extends React.Component {
  render() {
    const sliderImage = (
      <Carousel
        slidesPerPage={1}
        slidesPerScroll={1}
        animationSpeed={2000}
        autoPlay={3000}
        infinite={true}
        offset={0}
        // itemWidth={1590}
        clickToChange
        centered
      >
        <img src={slider1} className="image-responsive" />
        <img src={slider2} className="image-responsive" />
        <img src={slider3} className="image-responsive" />
        <img src={slider4} className="image-responsive" />
        <img src={slider5} className="image-responsive" />
        <img src={slider6} className="image-responsive" />
      </Carousel>
    );
    return (
      <div _ngcontent-sc1="" id="container">
        <div className="responsive-slider">{sliderImage}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedSlider = connect(mapStateToProps)(Slider);
export { connectedSlider as Slider };
