import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";
import biceps from "../../images/biceps.svg"

export const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand href="">
                        <img
                            alt="biceps"
                            src={biceps}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        XP_Exercise
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Sign-up</Nav.Link>
                            <Nav.Link href="">Sign-in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
