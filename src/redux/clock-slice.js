import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sessionLength: 25,
    breakLength: 5,
}

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        addBreak: (state) => {
            if(state.breakLength < 60){
            state.breakLength++;
            }
        },
        subBreak: (state) => {
            if(state.breakLength > 1){
            state.breakLength--; 
            }
        },

        addSession: (state) => {
            if(state.sessionLength < 60){
            state.sessionLength++;
            }
        },
        subSession: (state) => {
            if(state.sessionLength > 1){
            state.sessionLength--;
            }
        },
        resetAll: (state) => {
            state.sessionLength = 25;
            state.breakLength = 5;
        }
    }

});

export const {addBreak, subBreak, addSession, subSession, resetAll} = clockSlice.actions;

export const clockReducer = clockSlice.reducer;