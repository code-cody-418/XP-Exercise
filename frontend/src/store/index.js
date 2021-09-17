import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animations from "./AnimationSlice";
import profile from "./profileSlice"
import auth from "./authSlice"
import moves from './moveSlice'


const reducer = combineReducers({animations, profile, auth, moves})

export const store = configureStore({reducer})
