import React, {Suspense} from "react";
import {Button, Col, Container, Row, Carousel, Dropdown} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import "./menuStyle.css"
import {ProfileInfo} from "../../profile/ProfileInfo";
import {SignOut} from "../sign-out/SignOut";
import comingSoon from "../../../../images/shop-images/CODVanguard.png"
import comingSoonTwo from "../../../../images/vegeta-shadow.jpg"
import {SignUpModal} from "../sign-up/SignUpModal";
import {useDispatch, useSelector} from "react-redux";
import {EventParticipationInfo} from "../../../pages/home/EventParticipationInfo";
import {Canvas} from "@react-three/fiber";
import ChristmasHat01 from "../../../../3D-Models/event-models/Christmas-hat-01";
import ChristmasRedBall from "../../../../3D-Models/event-models/Christmas-red-ball";

import {OrbitControls} from "@react-three/drei";
import ChristmasPresent from "../../../../3D-Models/event-models/Christmas-present";
import SnowFlakes02 from "../../../../3D-Models/event-models/Snow-flakes-02";
import {httpConfig} from "../../utils/http-config";
import {fetchParticipation} from "../../../../store/eventParticipationSlices/participationSlice";
import {fetchProfileByProfileId} from "../../../../store/profileSlice";


export const MenuModal = ({handleClose, show, auth, profile, participation}) => {

    const dispatch = useDispatch()

    //this function updates participationCompleted
    const updateParticipationCoinsReward = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put('/apis/participation/updateParticipationCoins')
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(profile.profileId))
                        dispatch(fetchProfileByProfileId(profile.profileId))
                    }
                })
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="menu-modal"
                aria-labelledby="example-custom-modal-styling-title"
                className="mainModal"
                // fullscreen={true}
            >
                <Modal.Body className="show-grid menuBackground border border-5 border-white rounded">

                    <Container fluid>

                        <Row className="websiteName align-items-center text-xl-center">
                            <Col>
                                <h2 className="menuTitleAnimation ">EXP NINJA</h2>
                            </Col>
                        </Row>
                        {auth ? (
                            <div className="menuSelection">
                                <Button className="inMenuButton border-0" size="lg" href='/'>
                                    Home
                                </Button>
                                <Button className="inMenuButton border-0" size="lg" href='/profile'>
                                    Profile
                                </Button>
                                <Button className="inMenuButton border-0" size="lg" href='/shop'>
                                    Shop
                                </Button>
                                <Button className="inMenuButton border-0" size="lg" href='/credit'>
                                    Credits
                                </Button>
                                <Button className="inMenuButton border-0" size="lg" onClick={handleClose}>
                                    Close Menu
                                </Button>
                            </div>
                        ) : (
                            <div className="menuSelection">
                                <Button className="inMenuButton border-0" size="lg" href='/credit'>
                                    Credits
                                </Button>
                                <Button className="inMenuButton border-0" size="lg" onClick={handleClose}>
                                    Close Menu
                                </Button>
                            </div>
                        )
                        }


                        <Row>
                            {auth ? (
                                <>

                                    <Col sm={4}>
                                        <ProfileInfo profile={profile}/>
                                        <SignOut/>
                                    </Col>
                                    <Col sm={3}>
                                        <EventParticipationInfo participation={participation} profile={profile}/>

                                        <div className="eventCanvas">
                                            <Canvas
                                                camera={{position: [0, 15, 25], fov: 55}}
                                                resize={0.5}
                                                onCreated={({camera}) => camera.lookAt(0, -15, -35)}
                                            >
                                                {/*<OrbitControls />*/}

                                                <ambientLight intensity={1}/>

                                                <Suspense fallback={null}>
                                                    {/*<ChristmasHat01 />*/}
                                                    <group
                                                        onClick={() => {
                                                            updateParticipationCoinsReward()
                                                        }}
                                                    >
                                                        <ChristmasPresent
                                                            participation={participation}
                                                            profile={profile}
                                                        />
                                                    </group>
                                                    <SnowFlakes02 snow={"snowFallingSeven"}/>
                                                    <SnowFlakes02 snow={"snowFallingEight"}/>
                                                    <SnowFlakes02 snow={"snowFallingNine"}/>

                                                </Suspense>
                                            </Canvas>
                                        </div>
                                    </Col>
                                    {/*<Col sm={3}>*/}
                                    {/*<Carousel fade nextLabel="" prevLabel="">*/}
                                    {/*    <Carousel.Item>*/}
                                    {/*        <img*/}
                                    {/*            className="d-block w-100"*/}
                                    {/*            src={comingSoon}*/}
                                    {/*            alt="First slide"*/}
                                    {/*            width="350"*/}
                                    {/*            height="250"*/}
                                    {/*        />*/}
                                    {/*    </Carousel.Item>*/}
                                    {/*    <Carousel.Item>*/}
                                    {/*        <img*/}
                                    {/*            className="d-block w-100"*/}
                                    {/*            src={comingSoonTwo}*/}
                                    {/*            alt="Second slide"*/}
                                    {/*            width="350"*/}
                                    {/*            height="250"*/}
                                    {/*        />*/}
                                    {/*    </Carousel.Item>*/}
                                    {/*<Carousel.Item>*/}
                                    {/*    <img*/}
                                    {/*        className="d-block w-100"*/}
                                    {/*        src={comingSoon}*/}
                                    {/*        alt="Third slide"*/}
                                    {/*        width="350"*/}
                                    {/*        height="250"*/}

                                    {/*    />*/}
                                    {/*</Carousel.Item>*/}
                                    {/*</Carousel>*/}
                                    {/*</Col>*/}
                                </>
                            ) : (
                                <>
                                    <Col md={4} className="mb-2">
                                        <SignInForm/>
                                        <SignUpModal/>
                                    </Col>
                                </>
                            )
                            }
                        </Row>

                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
        ;
}
