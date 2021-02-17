import React, { useState } from 'react';
import { Input, TextArea, FormBtn } from "../components/Form"
import { Col, Row, Container } from "../components/Grid"
import Banner from "../components/Banner";
import Contact from "../components/Contact";
// import FeaturedImage from "../components/FeaturedImage";
// import Slideshow from "../components/Slideshow";
import MissionStatement from "../components/MissionStatement";
import Services from "../components/Services";
// import Map from "../components/Map";
import GoogleApiWrapper from "../components/Map";
// import Navbar from "../components/Navbar"
// import { Nav } from 'react-bootstrap';
import Playground from "../components/Playground";


function Home() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.service) {
            console.log("Your submission was " + formObject.title + " " + formObject.service)
        }
    };

    return (
        <Container fluid>

            <Row>
                <Col size="md-12 sm-12">
                    <div className="banner">
                    <Banner />
                    </div>
                    {/* <Navbar /> */}
                    {/* Navbar or dropdown menu */}
                </Col>
            </Row>

            <Row>
                {/* <Col size="md-4 sm-12">
                <div className="clear-card">
            <FeaturedImage />
        </div>
        </Col> */}

                <Col size="md-8 sm-12">
                    <MissionStatement />
                </Col>
                <Col size="md-4 sm-12">
                    <Services />
                </Col>
            </Row>

            <Row>
                <Col size="md-12 sm-12">
                    <Playground />
                </Col>
            </Row>

            <Row>
                <Col size="md-4 sm-12">
                    <Contact />
                </Col>
                <Col size="md-4 sm-12">
                    <div className="google-maps">
                        <h3>Now servicing San Deigo!</h3>
                    <GoogleApiWrapper 
                    apiKey="AIzaSyBrzW4VK5MxtTEexIzUt1gDqDU9ZQZKcNw"/>
                    </div>
                </Col>

                <Col size="md-4 sm-12">
                    <form>
                        <h3>Request a quote:</h3>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="service"
                            placeholder="Service"
                        />
                        <FormBtn
                            disabled={!(formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;