import React, { Component } from "react";
import { Container } from "../Grid";
import { Slide } from "react-slideshow-image";
import "../../styles.css";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/landscape-flowers.jpg";
import image2 from "../../assets/landscape-fence.jpg";
import image3 from "../../assets/yardwork.jpg";
import image4 from "../../assets/yardwork-tree.jpg";
import image5 from "../../assets/yardwork-zoom.jpg";
import image6 from "../../assets/yardwork-garden.jpg";

class Playground extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];
    return (
        <Container fluid>
      <div className="slideshow">
        <h3>Our Work</h3>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
      </Container>
    );
  }
}

export default Playground;
