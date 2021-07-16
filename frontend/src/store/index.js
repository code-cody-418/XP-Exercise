import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animations from "./AnimationSlice";


const reducer = combineReducers({animations})

export const store = configureStore({reducer})
