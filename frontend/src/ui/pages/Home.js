import React, {useEffect, useState} from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row} from "react-bootstrap";
import goku from "../../images/goku-trainer.png"
import naruto from "../../images/naruto-01.png"
import kakashi from '../../images/kakashi-01.png'
import ReactPlayer from "react-player";
import "../styles.css"
import {OrbitControls} from "@react-three/drei";
import AnimationScene from "../AnimationScene";


export const Home = (props) => {

    //logic for character button selection
    function SelectCharacterButtons(props) {
        if (props.name === "kakashi") {
            return <button>Kakashi</button>
        } else if (props.name === "naurto") {
            return <button>Naruto</button>
        } else if (props.name === "goku") {
            return (
                <>
                    <Col>
                        <ClickStanding />
                    </Col>
                    <Col>
                        <ClickJab />
                    </Col>
                    <Col>
                        <ClickHook />
                    </Col>
                    <Col>
                        <ClickBicepCurl />
                    </Col>
                    <Col>
                        <ClickPunchCombo />
                    </Col>
                    <Col>
                        <ClickLaying />
                    </Col>
                </>
            )
        }
        return (
            <>
            </>
        )
    }

    //sets state of buttons for each character
    const [gokuAction, setGokuAction] = useState('standing')
    const [narutoAction, setNarutoAction] = useState('standing')
    const [kakashiAction, setKakashiAction] = useState('standing')

    //goku buttons
    const ClickStanding = () => <Button onClick={() => setGokuAction('standing')}>Standing</Button>
    const ClickJab = () => <Button onClick={() => setGokuAction('jab')}>Jab</Button>
    const ClickBicepCurl = () => <Button onClick={() => setGokuAction('bicepCurl')}>Bicep Curl</Button>
    const ClickHook = () => <Button onClick={() => setGokuAction('hook')}>Hook</Button>
    const ClickLaying = () => <Button onClick={() => setGokuAction('laying')}>Laying</Button>
    const ClickPunchCombo = () => <Button onClick={() => setGokuAction('punchCombo')}>Punch Combo</Button>

    //set state of selected character Component
    const [character, setCharacter] = useState("naruto")

    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    console.log("Goku Action:", gokuAction)

    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <h1 className="text-center">Trainers</h1>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src={goku}
                             alt="Goku training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setCharacter('goku')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250"/>
                    </Col>
                    <Col>
                        <img src={naruto}
                             alt="Naruto training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setCharacter('naruto')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250"/>
                    </Col>
                    <Col>
                        <img src={kakashi}
                             alt="Kakashi training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setCharacter('kakashi')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*npm module for runnning videos, see docs for more functionality*/}
                        <ReactPlayer url="https://www.youtube.com/watch?v=3ZHwkpyvDqE" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                        <AnimationScene gokuAction={gokuAction} narutoAction={narutoAction} kakashiAction={kakashiAction} name={character}/>
                </Row>
                <Row>
                    <SelectCharacterButtons name={character} />
                </Row>
            </Container>
            <Footer />
        </>
    )
}
