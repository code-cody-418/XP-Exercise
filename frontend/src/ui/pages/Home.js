import React, {useEffect, useState} from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row, Modal} from "react-bootstrap";
import goku from "../../images/goku-trainer.png"
import naruto from "../../images/naruto.png"
import kakashi from '../../images/kakashi-01.png'
import korra from '../../images/korra-trainer.png'
import trainInsaiyan from '../../images/train-insaiyan.jpg'
import ReactPlayer from "react-player";
import "../styles.css"
import AnimationScene from "../AnimationScene";
import {moves} from "../../moves";
import {names} from "../names";


export const Home = () => {

    //sets state of buttons for each character
    const [gokuAction, setGokuAction] = useState(moves.idle)
    const [narutoAction, setNarutoAction] = useState(moves.idle)
    const [kakashiAction, setKakashiAction] = useState(moves.idle)
    const [korraAction, setKorraAction] = useState(moves.idle)

    //logic for character button selection
    function SelectCharacterButtons({name}) {
        if (autoWorkout === true) {
            return (
                <>
                    <Col xl={2} className='ps-sm-5 ml-auto'>
                        <Button
                            className='startWorkoutButton'
                            onClick={() => {
                                setAutoWorkout(true)
                                return (
                                    setVideoPlay(true)
                                )
                            }}
                        >Start Workout</Button>
                        <Button
                            className='startWorkoutButton'
                            onClick={() => {
                                setVideoPlay(true)
                                setAutoWorkout(false)
                            }}
                        >Customize Workout</Button>
                    </Col>
                </>
            )
        } else if (name === names.kakashi && autoWorkout === false) {
            return (
                <>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button
                            className='characterButton'
                            onClick={() => {
                                setAutoWorkout(true)
                                return (
                                    setVideoPlay(true)
                                )
                            }}
                        >Auto</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.idle)}>Chillin</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.armStretch)}>Arm
                            Stretch</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.coolDown)}>Cool
                            Down</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.jumpingJack)}>Jumping
                            Jacks</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.kick)}>Kick</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.neckStretch)}>Neck
                            Stretch</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.squat)}>Squat</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.touchToes)}>Toe
                            Touch</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.bicepCurl)}>Bicep Curl</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.pushUp)}>Push Ups</Button>

                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.sitUps)}>Sit-ups</Button>
                    </Col>
                </>
            )
        } else if (name === names.naruto) {
            return (
                <>

                    <Button className='characterButton' onClick={() => setNarutoAction('idle')}>Chillin</Button>


                    <Button className='characterButton'
                            onClick={() => setNarutoAction('footwork')}>Footwork</Button>


                    <Button className='characterButton'
                            onClick={() => setNarutoAction('bikeCrunch')}>Crunch's</Button>


                    <Button className='characterButton' onClick={() => setNarutoAction('coolDown')}>Cool
                        Down</Button>


                    <Button className='characterButton' onClick={() => setNarutoAction('freeze')}>Freeze</Button>


                    <Button className='characterButton' onClick={() => setNarutoAction('sitUps')}>Sit Ups</Button>


                    <Button className='characterButton' onClick={() => setNarutoAction('stretch')}>Stretch</Button>


                    <Button className='characterButton' onClick={() => setNarutoAction('upRock')}>Uprock</Button>

                </>
            )
        } else if (name === names.goku) {
            return (
                <>

                    <Button className='characterButton' onClick={() => setGokuAction('idle')}>Chillin</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('jab')}>Jab</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('hook')}>Hook</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('bicepCurl')}>Bicep
                        Curl</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('punchCombo')}>Punch
                        Combo</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('laying')}>Laying</Button>


                    <Button className='characterButton'
                            onClick={() => setGokuAction('kettlebell')}>Kettlebell</Button>


                    <Button className='characterButton' onClick={() => setGokuAction('legStretch')}>Stretch</Button>

                </>
            )
        } else if (name === names.korra) {
            return (
                <>

                    <Button className='characterButton' onClick={() => setKorraAction('idle')}>Chillin</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('burpee')}>Burpee</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('coolDown')}>Cool
                        Down</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('crossJumps')}>Cross
                        Jumps</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('crossRotation')}>Cross
                        Rotations</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('pushUp')}>Push Ups</Button>


                    <Button className='characterButton' onClick={() => setKorraAction('stretch')}>Stretch</Button>

                </>
            )
        }
        return (
            <>
            </>
        )
    }


    //set state of selected character Component
    const [name, setName] = useState(names.kakashi)


    //adds hover cursor to character select
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])


    //set state of playing video
    const [videoPlay, setVideoPlay] = useState(false)


    //sets up modal for when
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setKakashiAction(moves.celebration)
    }
    const handleShow = () => setShow(true);


    //set an auto workout vs a manuel workout
    const [autoWorkout, setAutoWorkout] = useState(true)


    //array of youtube videos
    const youTubePlaylists = [
        'https://www.youtube.com/watch?v=3ZHwkpyvDqE',
        'https://www.youtube.com/watch?v=4zHK8pRl78o',
        'https://www.youtube.com/watch?v=dY09rc_8-Rc'
    ]


    //Functionality to time events
    const [seconds, setSeconds] = useState(null)

    useEffect(() => {
        if (videoPlay === true) {
            const intervalId = setInterval(() => {
                setSeconds(seconds => seconds + 1)
                // console.log('seconds', seconds)
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [videoPlay])

//_____________________________________________________________________________________________________________________
    return (
        <>
            {/*<Navigation/>*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Great Job Training!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <img src={trainInsaiyan} alt="training "/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        COLLECT REWARDS
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
                <Row className="justify-content-center mb-3 align-items-center">
                    <SelectCharacterButtons name={name} gokuAction={gokuAction} narutoAction={narutoAction}
                                            kakashiAction={kakashiAction} korraAction={korraAction}/>
                    <Col md={6} lg={4} className='canvasSize me-0 pe-0'>
                        <AnimationScene gokuAction={gokuAction} narutoAction={narutoAction}
                                        kakashiAction={kakashiAction} korraAction={korraAction}
                                        name={name}/>
                    </Col>
                    <Col lg={4} className='ms-0 ps-0'>
                        {/*npm module for runnning videos, see docs for more functionality*/}
                        <ReactPlayer url={youTubePlaylists}
                                     width={'100%'}
                                     height={'400px'}
                                     playing={videoPlay}
                                     onEnded={handleShow}
                                     onPlay={() => setVideoPlay(true)}
                                     onPause={() => setVideoPlay(false)}
                                     controls={true}
                            // muted={true}


                            // onProgress={ () => {
                            //     if (seconds === 10) {
                            //     handleShow()
                            // }
                            // }}


                            //this is logic that determines auto-workouts
                                     onProgress={(played) => {
                                         if (autoWorkout === true && videoPlay === true) {
                                             //determines an action of each character based on elapsed seconds
                                             if (seconds === 0) {
                                                 if (name === names.kakashi) {
                                                     return setKakashiAction(moves.idle)
                                                 } else if (name === names.korra) {
                                                     return setKorraAction('idle')
                                                 }
                                             }
                                             //stretching
                                             else if (seconds < 30) {
                                                 return setKakashiAction(moves.armStretch)
                                             } else if (seconds < 60) {
                                                 return setKakashiAction(moves.neckStretch)
                                             } else if (seconds < 90) {
                                                 return setKakashiAction(moves.touchToes)
                                             }
                                             //first set
                                             else if (seconds < 120) {
                                                 return setKakashiAction(moves.sitUps)
                                             } else if (seconds < 150) {
                                                 return setKakashiAction(moves.pushUp)
                                             } else if (seconds < 180) {
                                                 return setKakashiAction(moves.jumpingJack)
                                             } else if (seconds < 210) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds < 240) {
                                                 return setKakashiAction(moves.kick)
                                             } else if (seconds < 270) {
                                                 return setKakashiAction(moves.bicepCurl)
                                             } else if (seconds < 300) {
                                                 return setKakashiAction(moves.squat)
                                             } else if (seconds < 330) {
                                                 return setKakashiAction(moves.coolDown)
                                             }
                                             //second set

                                             //end
                                             else if (seconds < 910) {
                                                 return setKakashiAction(moves.idle)
                                             }
                                             //when video stops character turns idle
                                         } else if (autoWorkout === true && videoPlay === false) {
                                             if (name === names.kakashi) {
                                                 return setKakashiAction(moves.idle)
                                             }
                                         }
                                     }}
                        />
                    </Col>
                </Row>
            </Container>
            {/*<Footer/>*/}
        </>
    )
}
