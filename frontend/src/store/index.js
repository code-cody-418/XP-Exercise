import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profile from "./profileSlice"
import auth from "./authSlice"
import move from './moveSlice'


const reducer = combineReducers({profile, auth, move})

export const store = configureStore({reducer})
