import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../../ui/shared/interfaces/moves"

export const korraSlice = createSlice({
    name: 'korraSlice',
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
        settingKorraMove: (state, action) => {
            state.setMove = action.payload
        }
    }
})

export const { settingKorraMove } = korraSlice.actions

export default korraSlice.reducer
