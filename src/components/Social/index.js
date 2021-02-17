import React from "react";
import { Container } from "../Grid";
import linkedin from "../../assets/icons/linkedin.png"
import twitter from "../../assets/icons/twitter.png"
import facebook from "../../assets/icons/facebook.png"
import instagram from "../../assets/icons/instagram.png"

function Social() {
    return (
        <Container fluid>
            <h3>Follow us!</h3>
        <div className="clear-card">
            <a href="https://www.linkedin.com/" />
            <img src={linkedin} alt="Linkedin" />

            <a href="https://twitter.com/" />
            <img src={twitter} alt="Twitter" />

            <a href="https://www.facebook.com/" />
            <img src={facebook} alt="Facebook" />

            <a href="https://www.instagram.com/" />
            <img src={instagram} alt="Instagram" />
        </div>
</Container>
    )
}

export default Social;