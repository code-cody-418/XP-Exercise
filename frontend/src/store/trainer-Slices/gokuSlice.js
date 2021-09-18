import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../ui/shared/interfaces/moves"

export const moveSlice = createSlice({
    name: 'move',
    initialState: {
        setMoves: moves.idle
    },
    reducers: {
        // idle: (state) => {
        //     state.setMoves = moves.idle
        // },
        // stretch: (state) => {
        //   state.setMoves = moves.neckStretch
        // },
        settingMove: (state, action) => {
            state.setMoves = action.payload
        }
    }
})

export const { settingMove } = moveSlice.actions

export default moveSlice.reducer
