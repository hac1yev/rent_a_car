import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialAuthState,
    reducers: {
        authLogin(state,action) {
            state.isAuth = action.payload;
        },
        authLogout(state,action) {
            state.isAuth = action.payload;
        }
    }
});

export const authSliceAction = authSlice.actions;