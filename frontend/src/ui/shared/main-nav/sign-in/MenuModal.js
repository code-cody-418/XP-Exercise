import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import "./menuStyle.css"
import {ProfileInfo} from "../../ProfileInfo";
import {SignOut} from "../sign-out/SignOut";


export const MenuModal = (props) => {
    const {handleShow, handleClose, show, auth, profile, thirtySeconds, videoPlay} = props

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
                                    <Col>
                                        <ProfileInfo profile={profile} videoPlay={videoPlay}
                                                     thirtySeconds={thirtySeconds}/>
                                        <SignOut/>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={4}>
                                        <SignInForm/>
                                    </Col>
                                </>
                            )
                            }
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={2} className="align-self-start">
                                <Button className="inMenuButton border-0" size="lg" href='/' >
                                    Home
                                </Button>
                            </Col>
                            <Col md={2} className="align-self-end">
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
