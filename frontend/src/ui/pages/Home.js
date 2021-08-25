import React, {useEffect, useState} from "react"
import {Menu} from "../shared/Menu";
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
import {DisplayAction} from "../DisplayAction";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../../store/profileSlice";
import {useJwtToken} from "../shared/useJwtToken";
import {httpConfig} from "../shared/utils/http-config";
import {ProfileInfo} from "../shared/ProfileInfo";
import animeMontage from "./Anime Training Montage AMV.mp4"


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
                        {videoPlay === false ? (
                            <Button
                                className='startWorkoutButton'
                                onClick={() => {
                                    setAutoWorkout(true)
                                    return (
                                        setVideoPlay(true)
                                    )
                                }}
                            >Start Workout</Button>
                        ) : (
                            <Button
                                className='startWorkoutButton'
                                onClick={() => {
                                    setAutoWorkout(true)
                                    setKakashiAction(moves.idle)
                                    setNarutoAction(moves.idle)
                                    setKorraAction(moves.idle)
                                    setGokuAction(moves.idle)
                                    return (
                                        setVideoPlay(false)
                                    )
                                }}
                            >Pause Workout</Button>
                        )
                        }
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

    //redux functionality to get profile data
    const dispatch = useDispatch();

    const {authenticatedUser} = useJwtToken();

    const sideEffects = () => {
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
        }
        // dispatch(fetchAuth());
    }

    useEffect(sideEffects, [authenticatedUser, dispatch]);

    const auth = useSelector(state => state.auth);
    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));

    //function to call api that adds a Exp to profile
    const expUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/expUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        console.log(reply);
                    }
                );
        }
    }

    //function to call api that adds a Exp to profile
    const levelUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            if ((profile.profileExp + '').indexOf('00') > -1 === true) {
                httpConfig.put(`/apis/profile/levelUp/${profile.profileId}`, profile)
                    .then(reply => {
                            if (reply.status === 200) {
                                console.log(reply);
                                dispatch(fetchProfileByProfileId(profile.profileId));
                            }
                            console.log(reply);
                        }
                    );
            }
        }
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
        setNarutoAction(moves.celebration)
        setKorraAction(moves.celebration)
        setGokuAction(moves.celebration)
    }
    const handleShow = () => setShow(true);


    //set an auto workout vs a manuel workout
    const [autoWorkout, setAutoWorkout] = useState(true)


    // array of youtube videos
    // const youTubePlaylists = [
    //     'https://www.youtube.com/embed/3ZHwkpyvDqE',
    //     'https://www.youtube.com/embed/4zHK8pRl78o',
    //     'https://www.youtube.com/embed/dY09rc_8-Rc'
    // ]


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
            expUp()
            levelUp()
        } else if (videoPlay === true) {
            const intervalId = setInterval(() => {
                setThirtySeconds(thirtySeconds => thirtySeconds - 1)
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [videoPlay, thirtySeconds, kakashiAction, narutoAction, korraAction, gokuAction])

    //function to call api that adds a coin to profile
    const coinUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/coinUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        console.log(reply);
                    }
                );
        }
    }

//_____________________________________________________________________________________________________________________
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Great Job Training!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <img src={trainInsaiyan} alt="training "/>
                </Modal.Body>
                <Modal.Footer>
                    {auth ? (
                        <Button variant="secondary" onClick={() => {
                            coinUp();
                            handleClose()
                        }}>
                            COLLECT REWARDS
                        </Button>
                    ) : (
                        <Button variant="secondary" onClick={() => {
                            handleClose()
                        }}>
                            Great Job!!!
                        </Button>
                    )
                    }
                </Modal.Footer>
            </Modal>
            <Container fluid={true}>
                <Row>
                    <Menu profile={profile} videoPlay={videoPlay} thirtySeconds={thirtySeconds}/>
                </Row>
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
                        <div className='underCanvas'>
                            <Button
                                className='thirtySecondTimerButton mt-0'
                                onClick={() => setThirtySeconds(30)}
                            >{thirtySeconds}</Button>
                            <DisplayAction gokuAction={gokuAction} narutoAction={narutoAction}
                                           kakashiAction={kakashiAction} korraAction={korraAction}
                                           name={name}/>
                        </div>
                    </Col>
                    <Col lg={4} className='ms-0 ps-0 removeTop'>
                        <ReactPlayer url={animeMontage}

                                     width={'100%'}
                                     height={'400px'}
                                     playing={videoPlay}
                                     onEnded={() => {
                                         handleShow()
                                         setVideoPlay(false)
                                         setSeconds(0)
                                     }}
                                     onPlay={() => setVideoPlay(true)}
                                     onPause={() => setVideoPlay(false)}
                                     // config={{
                                     //     youtube: {
                                     //         playerVars: { showinfo: 1,
                                     //             origin: 'http://143.244.183.237/',
                                     //             // origin: 'http://localhost:3000/',
                                     //             enablejsapi: 1
                                     //         }
                                     //     }
                                     // }}
                            //extra callbacks for videoplayer
                                     controls={true}
                            // muted={true}

                            //this is logic that determines auto-workouts
                                     onProgress={(played) => {
                                         if (autoWorkout === true && videoPlay === true) {
                                             //determines an action of each character based on elapsed seconds and resets 30 seconds timer
                                             if (seconds <= 30) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.armStretch)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.touchToes)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.armStretch)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.armStretch)
                                                 }
                                             } else if (seconds === 31) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 60) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.neckStretch)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.armStretch)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.touchToes)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.touchToes)
                                                 }
                                             } else if (seconds === 61) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 90) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.touchToes)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jumpingJack)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.burpee)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.jumpingJack)
                                                 }
                                             } else if (seconds === 91) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 120) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.sitUps)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jab)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossJumps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.upRock)
                                                 }
                                             } else if (seconds === 121) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 150) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.pushUp)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.hook)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossRotation)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.footwork)
                                                 }
                                             } else if (seconds === 151) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 180) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.jumpingJack)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.punchCombo)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.freeze)
                                                 }
                                             } else if (seconds === 181) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 210) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.pushUp)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 211) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 240) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.kick)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.bicepCurl)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.sitUps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bikeCrunch)
                                                 }
                                             } else if (seconds === 241) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 270) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.bicepCurl)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.plank)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.bicepCurl)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.sitUps)
                                                 }
                                             } else if (seconds === 271) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 300) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.squat)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.sitUps)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.pushUp)
                                                 }
                                             } else if (seconds === 301) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 330) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.pushUp)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.burpee)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bicepCurl)
                                                 }
                                             } else if (seconds === 331) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 360) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.sitUps)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossJumps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 361) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 390) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.pushUp)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jumpingJack)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossRotation)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.jumpingJack)
                                                 }
                                             } else if (seconds === 391) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 420) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.jumpingJack)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jab)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.upRock)
                                                 }
                                             } else if (seconds === 421) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 450) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.hook)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.pushUp)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.footwork)
                                                 }
                                             } else if (seconds === 451) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 480) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.kick)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.punchCombo)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.sitUps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.freeze)
                                                 }
                                             } else if (seconds === 481) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 510) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.bicepCurl)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.bicepCurl)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 511) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 540) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.squat)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.bicepCurl)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bikeCrunch)
                                                 }
                                             } else if (seconds === 541) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 570) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.plank)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.burpee)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.sitUps)
                                                 }
                                             } else if (seconds === 571) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 600) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.sitUps)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.sitUps)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossJumps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.pushUp)
                                                 }
                                             } else if (seconds === 601) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 630) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.pushUp)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.pushUp)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossRotation)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bicepCurl)
                                                 }
                                             } else if (seconds === 631) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 660) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.jumpingJack)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 661) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 690) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jumpingJack)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.pushUp)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.jumpingJack)
                                                 }
                                             } else if (seconds === 691) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 720) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.kick)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jab)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.sitUps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.upRock)
                                                 }
                                             } else if (seconds === 721) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 750) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.bicepCurl)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.hook)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.bicepCurl)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.footwork)
                                                 }
                                             } else if (seconds === 751) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 780) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.squat)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.punchCombo)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.freeze)
                                                 }
                                             } else if (seconds === 781) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 810) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.burpee)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 811) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 840) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.sitUps)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.bicepCurl)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossJumps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bikeCrunch)
                                                 }
                                             } else if (seconds === 841) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 870) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.pushUp)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.plank)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.crossRotation)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.sitUps)
                                                 }
                                             } else if (seconds === 871) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 900) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.jumpingJack)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.sitUps)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.pushUp)
                                                 }
                                             } else if (seconds === 901) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 930) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.pushUp)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.pushUp)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.bicepCurl)
                                                 }
                                             } else if (seconds === 931) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 960) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.kick)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.sitUps)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.coolDown)
                                                 }
                                             } else if (seconds === 961) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 990) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.bicepCurl)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jumpingJack)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.bicepCurl)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.jumpingJack)
                                                 }
                                             } else if (seconds === 991) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 1010) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.squat)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.jab)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.upRock)
                                                 }
                                             } else if (seconds === 1011) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             } else if (seconds <= 1030) {
                                                 if (name === names.kakashi) {
                                                     setKakashiAction(moves.coolDown)
                                                 } else if (name === names.goku) {
                                                     setGokuAction(moves.coolDown)
                                                 } else if (name === names.korra) {
                                                     setKorraAction(moves.coolDown)
                                                 } else if (name === names.naruto) {
                                                     setNarutoAction(moves.footwork)
                                                 }
                                             } else if (seconds === 1031) {
                                                 setThirtySeconds(28)
                                                 expUp()
                                                 levelUp()
                                             }
                                             //when video stops character turns idle
                                         } else if (autoWorkout === true && videoPlay === false) {
                                             if (name === names.kakashi) {
                                                 return setKakashiAction(moves.idle)
                                             }
                                         }
                                     }}
                        />
                        <div className='underCanvas'>
                            <ProfileInfo profile={profile} videoPlay={videoPlay} thirtySeconds={thirtySeconds}
                                         auth={auth}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*<Footer/>*/}
        </>
    )
}
