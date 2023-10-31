import { createSlice } from "@reduxjs/toolkit";

const initialRentCarState = {
    rent_car_data: [
        {
            takeDate: null,
            deliveryDate: null,
            takePlace: '',
            deliveryPlace: '',
            plusThreeDay: false,
            totalFee: 0,
            dayCount: 0
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
    ],
    isTakeOverDelivery: false
};

export const rentCarSlice = createSlice({
    name: 'rentCarSlice',
    initialState: initialRentCarState,
    reducers: {
        
        getTakeDate(state,action) {
            state.rent_car_data[0].takeDate = action.payload;

            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate){
                if(state.rent_car_data[0].takeDate <= state.rent_car_data[0].deliveryDate) {
                    state.isTakeOverDelivery = false;
                }
            }

            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate) {
                var timeDifference = state.rent_car_data[0].deliveryDate - action.payload;
                state.rent_car_data[0].dayCount = timeDifference / (24 * 60 * 60 * 1000) + 1;

                if(state.rent_car_data[0].dayCount >= 3) {
                    state.rent_car_data[0].plusThreeDay = true;
                    state.rent_car_data[0].totalFee = state.rent_car_data[0].dayCount * 150;
                }else{
                    state.rent_car_data[0].plusThreeDay = false;
                    state.rent_car_data[0].totalFee = state.rent_car_data[0].dayCount * 150 + 30;
                }
            }
        },
        getIsTakeOverDelivery(state) {
            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate) {
                if(state.rent_car_data[0].takeDate > state.rent_car_data[0].deliveryDate) {
                    state.isTakeOverDelivery = true;
                }else{
                    state.isTakeOverDelivery = false;
                }
            }
        },
        getDeliveryDate(state,action) {
            state.isTakeOverDelivery = false;
            state.rent_car_data[0].deliveryDate = action.payload;
            
            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate){
                var timeDifference = action.payload - state.rent_car_data[0].takeDate;
                state.rent_car_data[0].dayCount = timeDifference / (24 * 60 * 60 * 1000) + 1;

                if(state.rent_car_data[0].dayCount >= 3) {
                    state.rent_car_data[0].plusThreeDay = true;
                    state.rent_car_data[0].totalFee = state.rent_car_data[0].dayCount * 150;
                }else{
                    state.rent_car_data[0].plusThreeDay = false;
                    state.rent_car_data[0].totalFee = state.rent_car_data[0].dayCount * 150 + 30;
                }
    
            }
        },
        getTakePlace(state,action) {
            state.rent_car_data[0].takePlace = action.payload
        },
        getDeliveryPlace(state,action) {
            state.rent_car_data[0].deliveryPlace = action.payload
        },
        resetStepForm(state) {
            state.rent_car_data = initialRentCarState.rent_car_data
        }
    }
});

export const rentCarSliceAction = rentCarSlice.actions;