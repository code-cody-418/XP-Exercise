import React, {useEffect, useState} from "react"
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {MenuModal} from "./main-nav/sign-in/MenuModal";
import {fetchAuth} from "../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";

export const Menu = ({profile, videoPlay, thirtySeconds}) => {
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
            <Button variant="primary" onClick={handleShow}>
                Menu
            </Button>
            <MenuModal show = {show} handleClose = {handleClose} handleShow = {handleShow} auth={auth} profile={profile} videoPlay={videoPlay} thirtySeconds={thirtySeconds}/>

        </>
    )
}
