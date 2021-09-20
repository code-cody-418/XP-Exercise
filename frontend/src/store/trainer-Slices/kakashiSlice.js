import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../../ui/shared/interfaces/moves"

export const kakashiSlice = createSlice({
    name: 'kakashiMove',
    initialState: {
        setMove: moves.idle
    },
    reducers: {
        // idle: (state) => {
        //     state.setMoves = moves.idle
        // },
        // stretch: (state) => {
        //   state.setMoves = moves.neckStretch
        // },
        settingKakashiMove: (state, action) => {
            state.setMove = action.payload
        }
    }
})

export const { settingKakashiMove } = kakashiSlice.actions

export default kakashiSlice.reducer
