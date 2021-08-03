import React, {useEffect, useState} from "react"
import {Container, Nav, Navbar} from "react-bootstrap";
import biceps from "../../images/biceps.svg"
import {SignInModal} from "./main-nav/sign-in/SigninModal";
import {fetchAuth} from "../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";

export const Menu = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the user
    const isModalOpen = () => {
        if (!auth) {
            return !auth;
        }
        else if (show === true && auth) {
            return true;
        }
    };
    return (
        <>
            {/*<Navbar bg="light" expand="lg">*/}
            {/*    <Container>*/}

            {/*        <Navbar.Brand href="">*/}
            {/*            <img*/}
            {/*                alt="biceps"*/}
            {/*                src={biceps}*/}
            {/*                width="30"*/}
            {/*                height="30"*/}
            {/*                className="d-inline-block align-top"*/}
            {/*            />{' '}*/}
            {/*            XP_Exercise*/}
            {/*        </Navbar.Brand>*/}

            {/*        <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
            {/*        <Navbar.Collapse id="basic-navbar-nav">*/}
            {/*            <Nav className="me-auto">*/}
            {/*                /!*<Nav.Link href="">Sign-up</Nav.Link>*!/*/}
            {/*                /!*<Nav.Link href="">Sign-in</Nav.Link>*!/*/}
            {/*                <SignInModal show = {show} handleClose = {handleClose} handleShow = {handleShow}/>*/}
            {/*            </Nav>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}

            <SignInModal show = {show} handleClose = {handleClose} handleShow = {handleShow}/>

        </>
    )
}
