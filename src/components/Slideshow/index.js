import React from "react";
// import { Container, Col, Row } from "../Grid"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
// import placeholder from "../../assets/placeholder-img.png"
// import image1 from "../../assets/landscape-flowers.jpg"
// import image2 from "../../assets/landscape-fence.jpg"
// import image3 from "../../assets/yardwork.jpg"
// import image4 from "../../assets/yardwork-tree.jpg"
// import image5 from "../../assets/yardwork-zoom.jpg"
// import image6 from "../../assets/yardwork-garden.jpg"

const slideImages = [
 "../../assets/placeholder-img.png",
  "../../assets/landscape-flowers.jpg",
  "../../assets/landscape-fence.jpg",
  "../../assets/yardwork.jpg",
  "../../assets/yardwork-tree.jpg",
  "../../assets/yardwork-zoom.jpg",
  "../../assets/yardwork-garden.jpg"
];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
  // var slideIndex = 1;
  // showSlides(slideIndex);
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
    // var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  // }
// return(
// <Container>
//   <div className="slideshow">
//   <div class="mySlides">
//     <div class="numbertext">1 / 6</div>
//     <img src="./assets/landscape-fence.jpg" />
//   </div>

//   <div class="mySlides">
//     <div class="numbertext">2 / 6</div>
//     <img src="./assets/landscape-flowers.jpg" />
//   </div>

//   <div class="mySlides">
//     <div class="numbertext">3 / 6</div>
//     <img src="./assets/yardwork-garden.jpg" />
//   </div>
    
//   <div class="mySlides">
//     <div class="numbertext">4 / 6</div>
//     <img src="./assets/yardwork-tree.jpg" />
//   </div>

//   <div class="mySlides">
//     <div class="numbertext">5 / 6</div>
//     <img src="./assets/yardwork-zoom.jpg" />
//   </div>
    
//   <div class="mySlides">
//     <div class="numbertext">6 / 6</div>
//     <img src="./assets/yardwork.jpg" />
//   </div>
    
//   <a class="prev" onclick={plusSlides(-1)}>❮</a>
//   <a class="next" onclick={plusSlides(1)}>❯</a>

//   <div class="caption-container">
//     <p id="caption"></p>
//   </div>

//   <Row>
//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/landscape-fence.jpg" onclick={currentSlide(1)} alt="The Woods" />
//     </Col>

//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/landscape-flowers.jpg" onclick={currentSlide(2)} alt="Cinque Terre" />
//     </Col>

//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/yardwork-garden.jpg" onclick={currentSlide(3)} alt="Mountains and fjords" />
//     </Col>

//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/yardwork-tree.jpg" onclick={currentSlide(4)} alt="Northern Lights" />
//     </Col>

//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/yardwork-zoom.jpg" onclick={currentSlide(5)} alt="Nature and sunrise" />
//     </Col>

//     <Col size="sm-1 md-1 lg-1">
//       <img class="demo cursor" src="./assets/yardwork.jpg" onclick={currentSlide(6)} alt="Snowy Mountains" />
//     </Col>
// </Row>
// </div>
// </Container>
// )
// }

export default Slideshow;

/* <Container fluid> 
<div className="card-header">
<Row>
    <Col size="md-4 sm-12">
    <div className="mySlides">
      <img src={image1} styles={{width:50}} alt="" />
  </div>
</Col>

<Col size="md-4 sm-12">
  <div className="mySlides">
      <img src={image2} styles={{width:50}} alt=""/>
  </div>
</Col>

<Col size="md-4 sm-12">
  <div className="mySlides">
      <img src={image3} styles={{width:50}} alt=""/>
  </div>
  </Col>
  </Row>

<Row>
<Col size="md-4 sm-12">
  <div className="mySlides">
      <img src={image4} styles={{width:50}} alt=""/>
  </div>
  </Col>

  <Col size="md-4 sm-12">
  <div className="mySlides">
      <img src={image5} styles={{width:50}} alt=""/>
  </div>
</Col>
<Col size="md-4 sm-12">
  <div className="mySlides">
      <img src={image6} styles={{width:50}} alt=""/>
  </div>
  </Col>
  </Row>
  </div>
  </Container> */