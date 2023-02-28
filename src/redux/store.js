import {clockReducer} from './clock-slice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        updateLength: clockReducer
    }
})