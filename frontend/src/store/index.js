import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profile from "./profileSlice"
import auth from "./authSlice"
import moves from './moveSlice'


const reducer = combineReducers({profile, auth, moves})

export const store = configureStore({reducer})
