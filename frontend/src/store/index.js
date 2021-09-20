import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profile from "./profileSlice"
import auth from "./authSlice"
import name from './nameSlice'
import autoWorkout from './autoWorkoutSlice'
import videoPlay from './videoPlaySlice'
import kakashiMove from "./trainer-Slices/kakashiSlice";
import korraMove from "./trainer-Slices/korraSlice";
import gokuMove from "./trainer-Slices/gokuSlice"
import narutoMove from "./trainer-Slices/narutoSlice"
import thirtySecondTimer from "./timer-Slices/thirtySecondTimer"
import videoSecondsTimer from "./timer-Slices/vdeoSecondsTimer"

//bring in reducers here
const reducer = combineReducers({
    profile,
    auth,
    name,
    autoWorkout,
    videoPlay,
    kakashiMove,
    korraMove,
    gokuMove,
    narutoMove,
    thirtySecondTimer,
    videoSecondsTimer
})

export const store = configureStore({reducer})
