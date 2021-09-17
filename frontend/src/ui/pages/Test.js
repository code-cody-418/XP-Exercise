import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {idle, stretch} from "../../store/moveSlice";

export const Test = () => {

    const moveSetting = useSelector((state) => state.moves.setMoves)

    const dispatch = useDispatch()

    return (
        <>
            <h1>Test</h1>


            <button
            onClick={() => dispatch(idle())}
            >
                Idle
            </button>
            <h2>{moveSetting}</h2>
            <button
            onClick={() => dispatch(stretch())}
            >
                Stretch
            </button>
        </>
    )
}
