import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../../ui/shared/interfaces/moves"

export const gokuSlice = createSlice({
    name: 'gokuMove',
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
        settingGokuMove: (state, action) => {
            state.setMove = action.payload
        }
    }
})

export const { settingGokuMove } = gokuSlice.actions

export default gokuSlice.reducer
