import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../moves"

export const moveSlice = createSlice({
    name: 'move',
    initialState: {
        setMoves: moves.idle
    },
    reducers: {
        idle: (state) => {
            state.setMoves = moves.idle
        },
        stretch: (state) => {
          state.setMoves = moves.neckStretch
        },
        settingMove: (state, action) => {
            state.setMoves = action.payload
        }
    }
})

export const { idle, stretch } = moveSlice.actions

export default moveSlice.reducer
