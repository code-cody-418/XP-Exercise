import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {moves} from "../moves";
import {names} from "./names";

export const DisplayAction = ({name, narutoAction, korraAction, gokuAction, kakashiAction}) => {

    const [textAnimation, setTextAnimation] = useState(moves.capitalJumpingJack)

    useEffect(() => {
        if (name === names.kakashi) {
            if (kakashiAction === moves.idle) {
                return setTextAnimation(moves.capitalIdle)
            } else if (kakashiAction === moves.jumpingJack) {
                return setTextAnimation(moves.capitalJumpingJack)
            } else if (kakashiAction === moves.armStretch) {
                return setTextAnimation(moves.capitalArmStretch)
            } else if (kakashiAction === moves.neckStretch) {
                return setTextAnimation(moves.capitalNeckStretch)
            } else if (kakashiAction === moves.touchToes) {
                return setTextAnimation(moves.capitalTouchToes)
            } else if (kakashiAction === moves.pushUp) {
                return setTextAnimation(moves.capitalPushUp)
            }  else if (kakashiAction === moves.sitUps) {
                return setTextAnimation(moves.capitalSitUps)
            } else if (kakashiAction === moves.kick) {
                return setTextAnimation(moves.capitalKick)
            } else if (kakashiAction === moves.squat) {
                return setTextAnimation(moves.capitalSquat)
            } else if (kakashiAction === moves.bicepCurl) {
                return setTextAnimation(moves.capitalBicepCurl)
            } else if (kakashiAction === moves.coolDown) {
                return setTextAnimation(moves.capitalCoolDown)
            }
        } else if (name === names.korra) {

        }
    }, [kakashiAction, korraAction, narutoAction, gokuAction])

    return (
        <>
            <h2 className='actionText'>{textAnimation}</h2>
        </>
    )
}
