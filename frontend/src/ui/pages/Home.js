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
                                onClick={() => setKakashiAction(moves.armStretch)}>Arm Stretch</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.neckStretch)}>Neck Stretch</Button>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.touchToes)}>Toe Touch</Button>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.pushUp)}>Push Ups</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.sitUps)}>Sit-ups</Button>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.jumpingJack)}>Jumping Jacks</Button>
                        <Button className='characterButton' onClick={() => setKakashiAction(moves.kick)}>Kick</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.squat)}>Squat</Button>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.bicepCurl)}>Bicep Curl</Button>
                        <Button className='characterButton'
                                onClick={() => setKakashiAction(moves.coolDown)}>Cool Down</Button>
                    </Col>
                </>
            )
        } else if (name === names.naruto && autoWorkout === false) {
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
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.armStretch)}>Arm
                            Stretch</Button>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.touchToes)}>Touch
                            Toes</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction(moves.upRock)}>Uprock</Button>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction(moves.footwork)}>Footwork</Button>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction(moves.freeze)}>Freeze</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.jumpingJack)}>Jumping
                            Jacks</Button>
                        <Button className='characterButton'
                                onClick={() => setNarutoAction(moves.bikeCrunch)}>Crunch's</Button>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.sitUps)}>Sit
                            Ups</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.pushUp)}>Push
                            Up</Button>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.bicepCurl)}>Bicep
                            Curl</Button>
                        <Button className='characterButton' onClick={() => setNarutoAction(moves.coolDown)}>Cool
                            Down</Button>
                    </Col>
                </>
            )
        } else if (name === names.goku && autoWorkout === false) {
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
                        <Button className='characterButton' onClick={() => setGokuAction(moves.touchToes)}>Touch
                            Toes</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.armStretch)}>Arm
                            Stretch</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.jumpingJack)}>Jumping
                            Jacks</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.jab)}>Jab</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.hook)}>Hook</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.punchCombo)}>Punch
                            Combo</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.bicepCurl)}>Bicep
                            Curl</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.plank)}>Plank</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.sitUps)}>Sit Ups</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.pushUp)}>Push
                            Ups</Button>
                        <Button className='characterButton' onClick={() => setGokuAction(moves.coolDown)}>Cool
                            Down</Button>
                    </Col>
                </>
            )
        } else if (name === names.korra && autoWorkout === false) {
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
                            }}>Auto</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.idle)}>Chillin</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.armStretch)}>Arm
                            Stretch</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.touchToes)}>Touch
                            Toes</Button>

                        <Button className='characterButton' onClick={() => setKorraAction(moves.burpee)}>Burpee</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.crossJumps)}>Cross
                            Jumps</Button>

                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.crossRotation)}>Cross
                            Rotations</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.pushUp)}>Push
                            Ups</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.sitUps)}>Sit
                            Ups</Button>
                    </Col>
                    <Col md={2} lg={1} className='mx-0 px-0'>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.bicepCurl)}>Bicep
                            Curl</Button>
                        <Button className='characterButton' onClick={() => setKorraAction(moves.coolDown)}>Cool
                            Down</Button>
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


    //Functionality to time events of video play
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

    //Functionality to 30 second workout timer
    const [thirtySeconds, setThirtySeconds] = useState(30)

    useEffect(() => {
        if (thirtySeconds === -1) {
            setThirtySeconds(30)
        } else if (videoPlay === true) {
            const intervalId = setInterval(() => {
                setThirtySeconds(thirtySeconds => thirtySeconds - 1)
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [videoPlay, thirtySeconds, kakashiAction, narutoAction, korraAction, gokuAction])

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
                        <Button
                            className='startWorkoutButton mt-0'
                            onClick={() => setThirtySeconds(30)}
                        >{thirtySeconds}</Button>
                        <Button
                            className={'startWorkoutButton mt-0'}
                        >{kakashiAction}</Button>
                    </Col>
                    <Col lg={4} className='ms-0 ps-0'>
                        <ReactPlayer url={youTubePlaylists}
                                     width={'100%'}
                                     height={'400px'}
                                     playing={videoPlay}
                                     onEnded={handleShow}
                                     onPlay={() => setVideoPlay(true)}
                                     onPause={() => setVideoPlay(false)}
                            //extra callbacks for videoplayer
                                     controls={true}
                            // muted={true}

                            //this is logic that determines auto-workouts
                                     onProgress={(played) => {
                                         if (autoWorkout === true && videoPlay === true) {
                                             //determines an action of each character based on elapsed seconds
                                             // if (seconds === 0) {
                                             //     if (name === names.kakashi) {
                                             //         return setKakashiAction(moves.idle)
                                             //     } else if (name === names.korra) {
                                             //         return setKorraAction('idle')
                                             //     }
                                             // }
                                             //stretching
                                             if (seconds <= 30) {
                                                 return setKakashiAction(moves.armStretch)
                                             } else if (seconds === 31) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 60) {
                                                 return setKakashiAction(moves.neckStretch)
                                             } else if (seconds === 61) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 90) {
                                                 return setKakashiAction(moves.touchToes)
                                             } else if (seconds === 91) {
                                                 return setThirtySeconds(30)
                                             }
                                             //first set
                                             else if (seconds <= 120) {
                                                 return setKakashiAction(moves.sitUps)
                                             } else if (seconds === 121) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 150) {
                                                 return setKakashiAction(moves.pushUp)
                                             } else if (seconds === 151) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 180) {
                                                 return setKakashiAction(moves.jumpingJack)
                                             } else if (seconds === 181) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 210) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 211) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 240) {
                                                 return setKakashiAction(moves.kick)
                                             } else if (seconds === 241) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 270) {
                                                 return setKakashiAction(moves.bicepCurl)
                                             } else if (seconds === 271) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 300) {
                                                 return setKakashiAction(moves.squat)
                                             } else if (seconds === 301) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 330) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 331) {
                                                 return setThirtySeconds(30)
                                             }
                                             //second set
                                             else if (seconds <= 360) {
                                                 return setKakashiAction(moves.sitUps)
                                             } else if (seconds === 361) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 390) {
                                                 return setKakashiAction(moves.pushUp)
                                             } else if (seconds === 391) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 420) {
                                                 return setKakashiAction(moves.jumpingJack)
                                             } else if (seconds === 421) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 450) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 451) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 480) {
                                                 return setKakashiAction(moves.kick)
                                             } else if (seconds === 481) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 510) {
                                                 return setKakashiAction(moves.bicepCurl)
                                             } else if (seconds === 511) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 540) {
                                                 return setKakashiAction(moves.squat)
                                             } else if (seconds === 541) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 570) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 571) {
                                                 return setThirtySeconds(30)
                                             }
                                             //third set
                                             else if (seconds <= 600) {
                                                 return setKakashiAction(moves.sitUps)
                                             } else if (seconds === 601) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 630) {
                                                 return setKakashiAction(moves.pushUp)
                                             } else if (seconds === 631) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 660) {
                                                 return setKakashiAction(moves.jumpingJack)
                                             } else if (seconds === 661) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 690) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 691) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 720) {
                                                 return setKakashiAction(moves.kick)
                                             } else if (seconds === 721) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 750) {
                                                 return setKakashiAction(moves.bicepCurl)
                                             } else if (seconds === 751) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 780) {
                                                 return setKakashiAction(moves.squat)
                                             } else if (seconds === 781) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 810) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 811) {
                                                 return setThirtySeconds(30)
                                             }
                                             //forth set
                                             else if (seconds <= 840) {
                                                 return setKakashiAction(moves.sitUps)
                                             } else if (seconds === 841) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 870) {
                                                 return setKakashiAction(moves.pushUp)
                                             } else if (seconds === 871) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 900) {
                                                 return setKakashiAction(moves.jumpingJack)
                                             } else if (seconds === 901) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 930) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 931) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 960) {
                                                 return setKakashiAction(moves.kick)
                                             } else if (seconds === 961) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 990) {
                                                 return setKakashiAction(moves.bicepCurl)
                                             } else if (seconds === 991) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 1010) {
                                                 return setKakashiAction(moves.squat)
                                             } else if (seconds === 1011) {
                                                 return setThirtySeconds(30)
                                             } else if (seconds <= 1030) {
                                                 return setKakashiAction(moves.coolDown)
                                             } else if (seconds === 1031) {
                                                 return setThirtySeconds(30)
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
