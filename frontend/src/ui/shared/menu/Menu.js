import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap";
import {MenuModal} from "../main-nav/sign-in/MenuModal";
import {fetchAuth} from "../../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";
import "../main-nav/sign-in/menuStyle.css"

export const Menu = ({profile}) => {
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

    return (
        <>
            <Button className="menuButtonAnimation menuButton border-0 text-lg-start" onClick={handleShow}>
                Menu
            </Button>
            <MenuModal show={show} handleClose={handleClose} handleShow={handleShow} auth={auth} profile={profile}/>
        </>
    )
}
