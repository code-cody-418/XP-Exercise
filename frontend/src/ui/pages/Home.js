import React, {useEffect, useState} from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row} from "react-bootstrap";
import goku from "../../images/goku-trainer.png"
import naruto from "../../images/naruto-01.png"
import kakashi from '../../images/kakashi-01.png'
import ReactPlayer from "react-player";
import "../styles.css"
import AnimationScene from "../AnimationScene";


export const Home = () => {

    //sets state of buttons for each character
    const [gokuAction, setGokuAction] = useState('standing')
    const [narutoAction, setNarutoAction] = useState('standing')
    const [kakashiAction, setKakashiAction] = useState('standing')

    //logic for character button selection
    function SelectCharacterButtons(props) {
        if (props.name === "kakashi") {
            return <button>Kakashi</button>
        } else if (props.name === "naruto") {
            return (
                <>
                    <Col>
                        <Button onClick={() => setNarutoAction('standing')}>Standing</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setNarutoAction('footwork')}>Footwork</Button>
                    </Col>
                </>
            )
        } else if (props.name === "goku") {
            return (
                <>
                    <Col>
                        <Button onClick={() => setGokuAction('standing')}>Standing</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setGokuAction('jab')}>Jab</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setGokuAction('hook')}>Hook</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setGokuAction('bicepCurl')}>Bicep Curl</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setGokuAction('punchCombo')}>Punch Combo</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setGokuAction('laying')}>Laying</Button>
                    </Col>
                </>
            )
        }
        return (
            <>
            </>
        )
    }


    //set state of selected character Component
    const [name, setName] = useState('goku')

    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

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
                             onClick={() => setName('goku')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250" />
                    </Col>
                    <Col>
                        <img src={naruto}
                             alt="Naruto training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('naruto')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="250"
                             height="250"/>
                    </Col>
                    <Col>
                        <img src={kakashi}
                             alt="Kakashi training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('kakashi')}
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

                    <AnimationScene gokuAction={gokuAction} narutoAction={narutoAction} kakashiAction={kakashiAction} name={name}/>
                </Row>
                <Row>
                    <SelectCharacterButtons name={name} />
                </Row>
            </Container>
            <Footer />
        </>
    )
}
