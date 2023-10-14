import { createSlice } from "@reduxjs/toolkit";

const initialStepSlice = {
    step: 0
};

export const stepSlice = createSlice({
    name: 'StepSlice',
    initialState: initialStepSlice,
    reducers: {
         continueStep(state,action) {
            state.step += action.payload
         },
         backStep(state,action) {
            state.step -= action.payload
         }
    }
});

export const stepSliceAction = stepSlice.actions;