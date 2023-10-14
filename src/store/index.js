import { configureStore } from "@reduxjs/toolkit";
import { stepSlice } from "./step-slice";

const store = configureStore({
    reducer: {
        stepReducer: stepSlice.reducer
    },
});

export default store;