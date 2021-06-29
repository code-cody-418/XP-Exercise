import React from "react"
import {Navigation} from "./shared/Navigation";
import {Footer} from "./shared/Footer";
import {Col, Container, Row} from "react-bootstrap";

import goku from "../images/goku-trainer.png"
import sakura from "../images/sakura-trainer.png"
import Katara from "../images/katara-trainer.png"

export const Home = () => {
    return (
        <>
            <Navigation />
            <h1>Home</h1>

            <Container>
                <Row>
                    <Col>
                        <img src={goku} alt="Goku training" />
                    </Col>
                    <Col>
                        <img src={sakura} alt="Sakura training" />
                    </Col>
                    <Col>
                        <img src={Katara} alt="Katara training" />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}
