import { createSlice } from "@reduxjs/toolkit";
import {moveSlice} from "./moveSlice";

export const autoWorkoutSlice = createSlice({
    name: 'autoWorkout',
    initialState: {
        setAutoWorkout: true
    },
    reducers: {
        settingAutoWorkout: (state, action) => {
            state.setAutoWorkout = action.payload
        }
    }
})

export const { settingAutoWorkout } = autoWorkoutSlice.actions

export default autoWorkoutSlice.reducer
