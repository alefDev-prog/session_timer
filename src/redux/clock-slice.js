import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    isRunning: false,
    isReset: true,

}

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        changeSession: (state, action) => {
            state.sessionLength = action.payload;
            
        },
        changeBreak: (state, action) => {
            state.breakLength = action.payload;
        },
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
            state.isRunning = false;
            state.isReset = true;
            
        },
        toggleRun: (state) => {
            if(!state.isRunning) {
                state.isRunning = true;
            }
            else {
                state.isRunning = false;
            }
        },
        started: (state) => {
            state.isReset = false;
        }
    }

});

export const {addBreak, subBreak, addSession, subSession, resetAll, toggleRun, started, changeSession, changeBreak} = clockSlice.actions;

export const clockReducer = clockSlice.reducer;