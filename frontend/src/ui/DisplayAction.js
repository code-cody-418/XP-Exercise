import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {moves} from "../moves";

export const DisplayAction = ({name, narutoAction, korraAction, gokuAction, kakashiAction}) => {

    const [textAnimation, setTextAnimation] = useState(moves.capitalJumpingJack)

    useEffect(() => {
        if (kakashiAction === moves.idle) {
            return setTextAnimation(moves.capitalIdle)
        } else if (kakashiAction === moves.jumpingJack) {
            return setTextAnimation(moves.capitalJumpingJack)
        }
    }, [kakashiAction, korraAction, narutoAction, gokuAction])

    return (
        <>
            <h2 className='actionText'>{textAnimation}</h2>
        </>
    )
}
