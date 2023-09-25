import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false
}

const modeSlice = createSlice({
    name: "mode",
    initialState: initialState,
    reducers: {
        setMode (state, value) {
            state.darkMode = value.payload
            localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
        }
    }
})

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;