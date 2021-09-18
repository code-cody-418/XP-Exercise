import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profile from "./profileSlice"
import auth from "./authSlice"
import move from './moveSlice'
import name from './nameSlice'
import autoWorkout from './autoWorkoutSlice'
import videoPlay from './videoPlaySlice'


const reducer = combineReducers({profile, auth, move, name, autoWorkout, videoPlay})

export const store = configureStore({reducer})
