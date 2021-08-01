import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animations from "./AnimationSlice";
import profile from "./profileSlice"
import auth from "./authSlice"


const reducer = combineReducers({animations, profile, auth})

export const store = configureStore({reducer})
