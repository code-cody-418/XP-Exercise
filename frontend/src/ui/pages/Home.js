import React, {useEffect, useState} from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row, Modal} from "react-bootstrap";
import goku from "../../images/goku-trainer.png"
import naruto from "../../images/naruto.png"
import kakashi from '../../images/kakashi-01.png'
import korra from '../../images/korra-trainer.png'
import trainInsaiyan from '../../images/train-insaiyan.jpg'
import ReactPlayer from "react-player/youtube";
import "../styles.css"
import AnimationScene from "../AnimationScene";




export const Home = () => {

    //sets state of buttons for each character
    const [gokuAction, setGokuAction] = useState('idle')
    const [narutoAction, setNarutoAction] = useState('idle')
    const [kakashiAction, setKakashiAction] = useState('idle')
    const [korraAction, setKorraAction] = useState('idle')

    //logic for character button selection
    function SelectCharacterButtons(props) {
        if (props.name === "kakashi") {
            if (props.kakashiAction === 'idle')
                return (
                    <Button
                        className='characterButton'
                        onClick={() => {
                            return (
                            setKakashiAction('armStretch'), setVideoPlay(true)
                            )}}
                    >Start</Button>
                )
            else if (props.kakashiAction === 'armStretch' || 'neckStretch')
                return (
                    <>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            if (kakashiAction === "armStretch") {
                                return setKakashiAction('neckStretch')
                            } else if (kakashiAction === 'neckStretch') {
                                return setKakashiAction('touchToes')
                            }
                        }}
                    >Next</Button>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            if (kakashiAction === "neckStretch") {
                                return setKakashiAction('armStretch')
                            } else if (kakashiAction === 'touchToes') {
                                return setKakashiAction('neckStretch')
                            }
                        }}
                    >Previous</Button>

                    </>
                )
            return (
                <>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('idle')}>Chillin</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('armStretch')}>Arm
                            Stretch</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('coolDown')}>Cool
                            Down</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('jumpingJack')}>Jumping
                            Jacks</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('kick')}>Kick</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('neckStretch')}>Neck
                            Stretch</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('squat')}>Squat</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKakashiAction('touchToes')}>Toe
                            Touch</Button>
                    </Col>
                </>
            )
        } else if (props.name === "naruto") {
            return (
                <>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('idle')}>Chillin</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction('footwork')}>Footwork</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction('bikeCrunch')}>Crunch's</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('coolDown')}>Cool
                            Down</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('freeze')}>Freeze</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('sitUps')}>Sit Ups</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('stretch')}>Stretch</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setNarutoAction('upRock')}>Uprock</Button>
                    </Col>
                </>
            )
        } else if (props.name === "goku") {
            return (
                <>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('idle')}>Chillin</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('jab')}>Jab</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('hook')}>Hook</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('bicepCurl')}>Bicep
                            Curl</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('punchCombo')}>Punch
                            Combo</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('laying')}>Laying</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton'
                                onClick={() => setGokuAction('kettlebell')}>Kettlebell</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setGokuAction('legStretch')}>Stretch</Button>
                    </Col>
                </>
            )
        } else if (props.name === "korra") {
            return (
                <>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('idle')}>Chillin</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('burpee')}>Burpee</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('coolDown')}>Cool
                            Down</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('crossJumps')}>Cross
                            Jumps</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('crossRotation')}>Cross
                            Rotations</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('pushUp')}>Push Ups</Button>
                    </Col>
                    <Col>
                        <Button className='characterButton' onClick={() => setKorraAction('stretch')}>Stretch</Button>
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
    const [name, setName] = useState('kakashi')

    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    //set state of playing video
    const [videoPlay, setVideoPlay] = useState(false)

    //set state of Seconds played on Video
    const [duration, setDuration] = useState(0)

    //sets up modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*<Navigation/>*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Great Job Training!!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <img src={trainInsaiyan} alt="training image" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            <Container fluid={true}>
                <Row>
                    <h1 className="trainerTitle text-center">Trainers</h1>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src={goku}
                             alt="Goku training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('goku')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="125"
                             height="125"/>
                    </Col>
                    <Col>
                        <img src={naruto}
                             alt="Naruto training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('naruto')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="125"
                             height="125"/>
                    </Col>
                    <Col>
                        <img src={kakashi}
                             alt="Kakashi training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('kakashi')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="125"
                             height="125"/>
                    </Col>
                    <Col>
                        <img src={korra}
                             alt="Korra training"
                             onPointerOver={() => setHovered(true)}
                             onPointerOut={() => setHovered(false)}
                             onClick={() => setName('korra')}
                             className="rounded-circle border border-dark mx-auto d-block"
                             width="125"
                             height="125"/>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3 align-items-center mx-lg-2 mx-md-1">
                    <Col xl={2} className='ps-sm-5 ml-auto'>
                        <SelectCharacterButtons name={name} gokuAction={gokuAction} narutoAction={narutoAction}
                                                kakashiAction={kakashiAction} korraAction={korraAction}/>

                    </Col>
                    <Col lg={5} className='canvasSize me-0 pe-0'>
                        <AnimationScene gokuAction={gokuAction} narutoAction={narutoAction}
                                        kakashiAction={kakashiAction} korraAction={korraAction}
                                        name={name}/>
                    </Col>
                    <Col lg={5} className='ms-0 ps-0'>
                        {/*npm module for runnning videos, see docs for more functionality*/}
                        <ReactPlayer url="https://www.youtube.com/watch?v=3ZHwkpyvDqE"
                                     controls={true}
                                     width={'100%'}
                                     height={'400px'}
                                     playing={videoPlay}
                                     // onStart={ () => console.log('onStart')}
                                     // onDuration={ (duration) => {
                                     //     return (
                                     //         setDuration,
                                     //             console.log('is this working', duration)
                                     //
                                     // )}}
                                        onEnded={ handleShow }
                        />

                    </Col>
                </Row>
            </Container>

            {/*<Footer/>*/}
        </>
    )
}
