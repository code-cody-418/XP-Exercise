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
                {/*<Modal.Header className="menuBackground">*/}
                {/*    <Modal.Title id="example-custom-modal-styling-title" className="menuTitleAnimation">*/}
                {/*        Exp Ninja*/}
                {/*    </Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body className="show-grid menuBackground border border-5 border-white rounded">
                    <Container>
                        <Row className="menuTitleAnimation text-white">
                            <h2>Exp Ninja</h2>
                        </Row>
                        <Row className="align-items-center">

                            {auth ? (
                                <>
                                    <Col >
                                        <ProfileInfo profile={profile} videoPlay={videoPlay}
                                                     thirtySeconds={thirtySeconds}/>
                                    </Col>
                                    <Col md={2}>
                                        <SignOut/>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="secondary" size="lg" onClick={handleClose}>
                                            Close Menu
                                        </Button>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={4}>
                                        <SignInForm/>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="secondary" size="lg" onClick={handleClose}>
                                            Close Menu
                                        </Button>
                                    </Col>
                                </>
                            )
                            }
                        </Row>
                    </Container>
                </Modal.Body>
                {/*<Modal.Footer className="menuBackground">*/}
                {/*    */}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    )
        ;
}
