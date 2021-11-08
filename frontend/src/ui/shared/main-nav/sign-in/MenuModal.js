import React from "react";
import {Button, Col, Container, Row, Carousel, Dropdown} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import "./menuStyle.css"
import {ProfileInfo} from "../../profile/ProfileInfo";
import {SignOut} from "../sign-out/SignOut";
import comingSoon from "../../../../images/shop-images/CODVanguard.png"
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
