import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {settingMove} from "../../store/moveSlice";
import { moves } from "../shared/interfaces/moves";

export const Test = () => {

    const currentMove = useSelector((state) => state.move.setMoves)

    const dispatch = useDispatch()

    return (
        <>
            <h1>Test</h1>


            <button
            onClick={() => dispatch(settingMove(moves.kick))}
            >
                Set Move
            </button>
            <h2>{currentMove}</h2>
            <button
            // onClick={() => dispatch(stretch())}
            >
                Stretch
            </button>
        </>
    )
}
