import React from "react";
import {Button} from "react-bootstrap";
import {moves} from "../moves";

export const DisplayAction = ({name, narutoAction, korraAction, gokuAction, kakashiAction}) => {

    if (kakashiAction === moves.idle) {
        return <h2 className='textActionAnimation'>{moves.capitalIdle}</h2>
    }

    return (
        <>


        </>
    )
}
