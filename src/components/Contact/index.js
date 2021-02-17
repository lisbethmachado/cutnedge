import React from "react";
import { Container } from "../Grid"

function Contact() {
    return (
        <Container fluid>
        <div className="contact">
            <h3>Contact:</h3>
        <div className="card-header">
            <h5>Email:</h5>
            <p>cutnedgesd@gmail.com</p>

            <h5>Hours:</h5>
            <ul>
                <li> Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
            </ul>

            <h5>Phone:</h5>
            <p>+1(619)555-5555</p>
        </div>
        </div>
        </Container>
    )
}

export default Contact;