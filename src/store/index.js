import { configureStore } from "@reduxjs/toolkit";
import { stepSlice } from "./step-slice";
import { rentCarSlice } from "./rent_car-slice";
import { authSlice } from "./auth-slice";

const store = configureStore({
    reducer: {
        stepReducer: stepSlice.reducer,
        rentCarReducer: rentCarSlice.reducer,
        authReducer: authSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;