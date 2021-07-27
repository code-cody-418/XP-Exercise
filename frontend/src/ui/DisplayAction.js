import React from "react";
import {Button} from "react-bootstrap";

export const DisplayAction = ({name, narutoAction, korraAction, gokuAction, kakashiAction}) => {
    return (
        <>
            <Button className='startWorkoutButton'>{kakashiAction}</Button>
        </>
    )
}
