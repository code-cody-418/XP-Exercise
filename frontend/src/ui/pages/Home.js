import React, {useEffect, useState} from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row} from "react-bootstrap";

import goku from "../../images/goku-trainer.png"
import sakura from "../../images/sakura-trainer.png"
import korra from "../../images/korra-trainer.png"

import ReactPlayer from "react-player";

import "../styles.css"
import {OrbitControls} from "@react-three/drei";
import AnimationScene from "../AnimationScene";
import ClickedComponent from "../ClickedComponent";

export const Home = () => {


    //set state of Anime Component
    const [character, setCharacter] = useState("naruto")

    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    //sets state of animation
    const [value, setValue] = useState('standing')

    const ClickOne = () => <Button onClick={() => setValue('standing')}>Standing</Button>

    const ClickTwo = () => <Button onClick={() => setValue('situps')}>Sit-ups</Button>


    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <h1 className="text-center">Trainers</h1>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src={goku} alt="Goku training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setCharacter('goku')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250"/>
                    </Col>
                    <Col>
                        <img src={sakura} alt="Sakura training" className="rounded-circle border border-dark mx-auto d-block" width="250" height="250"/>
                    </Col>
                    <Col>
                        <img src={korra} alt="Korra training" className="rounded-circle border border-dark mx-auto d-block" width="250" height="250"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*npm module for runnning videos, see docs for more functionality*/}
                        <ReactPlayer url="https://www.youtube.com/watch?v=3ZHwkpyvDqE" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                        <AnimationScene value={value} name={character}/>
                </Row>
                <Row>
                    <Col>
                        <ClickOne />
                    </Col>
                    <Col>
                        <ClickTwo />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
