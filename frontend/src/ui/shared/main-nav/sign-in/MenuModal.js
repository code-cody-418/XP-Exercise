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
            <Button variant="primary" onClick={handleShow}>
                Menu
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="menu-modal"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title" className="menuTitleAnimation">
                        Exp Ninja
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col md={4}>
                                {auth ? (
                                    <>
                                        <ProfileInfo profile={profile} videoPlay={videoPlay}
                                                     thirtySeconds={thirtySeconds}/>
                                        <SignOut/>
                                    </>
                                ) : (
                                    <SignInForm/>
                                )
                                }
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
