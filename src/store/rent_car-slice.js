import { createSlice } from "@reduxjs/toolkit";

const initialRentCarSlice = {
    rent_car_data: [
        {
            takeDate: null,
            deliveryDate: null,
            takePlace: '',
            deliveryPlace: '',
            rent_fee: 0,
            service_fee: 30,
            plusThreeDay: false,
            totalFee: 0
        },
        {
            fullName: '',
            card_Numbers: '',
            usageDate: '',
            CVV: '',
            saveCard: false,
            email: '',
            contactNumber: '',
            contition: false,
        }
    ]
};

export const rentCarSlice = createSlice({
    name: 'rentCarSlice',
    initialState: initialRentCarSlice,
    reducers: {
        getCarData(state,action) {
            state.rent_car_data[0] = {...state.rent_car_data[0], ...action.payload}
        },
        getTakeDate(state,action) {
            state.rent_car_data[0].takeDate = action.payload
        },
        getDeliveryDate(state,action) {
            state.rent_car_data[0].deliveryDate = action.payload
        },
        getTakePlace(state,action) {
            state.rent_car_data[0].takePlace = action.payload
        },
        getDeliveryPlace(state,action) {
            state.rent_car_data[0].deliveryPlace = action.payload
        }
    }
});

export const rentCarSliceAction = rentCarSlice.actions;