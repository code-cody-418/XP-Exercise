import React from "react";
import {Button, Col, Container, Row, Carousel} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import "./menuStyle.css"
import {ProfileInfo} from "../../profile/ProfileInfo";
import {SignOut} from "../sign-out/SignOut";
import comingSoon from "../../../../images/Exp-Ninja-Coming-soon-01.png"
import comingSoonTwo from "../../../../images/vegeta-shadow.jpg"
import {SignUpModal} from "../sign-up/SignUpModal";


export const MenuModal = ({handleClose, show, auth, profile}) => {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="menu-modal"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body className="show-grid menuBackground border border-5 border-white rounded">
                    <Container>
                        <Row className="websiteName align-items-center text-xl-center">
                            <Col>
                                <h2 className="menuTitleAnimation ">EXP NINJA</h2>
                            </Col>
                            <Col md={2} className="align-self-end">
                                <Button className="inMenuButton border-0" size="lg" onClick={handleClose}>
                                    Close Menu
                                </Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            {auth ? (
                                <>
                                    <Col sm={4}>
                                        <ProfileInfo profile={profile} />
                                        <SignOut/>
                                    </Col>
                                    <Col sm={6}>
                                        <Carousel fade nextLabel="" prevLabel="">
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={comingSoon}
                                                    alt="First slide"
                                                    width="350"
                                                    height="250"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={comingSoonTwo}
                                                    alt="Second slide"
                                                    width="350"
                                                    height="250"
                                                />
                                            </Carousel.Item>
                                            {/*<Carousel.Item>*/}
                                            {/*    <img*/}
                                            {/*        className="d-block w-100"*/}
                                            {/*        src={comingSoon}*/}
                                            {/*        alt="Third slide"*/}
                                            {/*        width="350"*/}
                                            {/*        height="250"*/}

                                            {/*    />*/}
                                            {/*</Carousel.Item>*/}
                                        </Carousel>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={4} className="mb-2">
                                        <SignInForm/>
                                        <SignUpModal />
                                    </Col>
                                </>
                            )
                            }
                        </Row>

                        <Row className="justify-content-end">
                            <Col sm={2} className="align-self-start">
                                <Button className="inMenuButton border-0" size="lg" href='/' >
                                    Home
                                </Button>
                            </Col>
                            <Col sm={2} className="align-self-end">
                                <Button className="inMenuButton border-0" size="lg" href='/credit' >
                                    Credits
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
        ;
}
