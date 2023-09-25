import { combineReducers } from "@reduxjs/toolkit";

import modeReducer from "../slices/modeSlice"

const rootReducer = combineReducers({
    mode: modeReducer
})

export default rootReducer