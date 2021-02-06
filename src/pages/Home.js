import React, { useState } from 'react';
import { Input, TextArea, FormBtn } from "../components/Form"
import { Col, Row, Container } from "../components/Grid"
// import Brand from "../components/Brand" 

function Home() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            console.log("Your submission was " + formObject.title + " " + formObject.service)
         }       
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    <h1>Cut N Edge</h1>
                {/* <Brand /> */}
                </Col>
            </Row>
            <Row>
            <Col size="md-4 sm-12">
                    <h3>How can I help you today?</h3>
                </Col>
                <Col size="md-8 sm-12">
                    <form>
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