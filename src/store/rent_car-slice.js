import { createSlice } from "@reduxjs/toolkit";

const initialRentCarState = {
    rent_car_data: [
        {
            takeDate: null,
            deliveryDate: null,
            takePlace: '',
            deliveryPlace: '',
            perDayRent: 0,
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
    ],
    isTakeOverDelivery: false
};

export const rentCarSlice = createSlice({
    name: 'rentCarSlice',
    initialState: initialRentCarState,
    reducers: {
        getCarData(state,action) {
            state.rent_car_data[0] = {...state.rent_car_data[0], ...action.payload}
        },
        getTakeDate(state,action) {
            state.rent_car_data[0].takeDate = action.payload.getTime();

            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate){
                if(state.rent_car_data[0].takeDate <= state.rent_car_data[0].deliveryDate) {
                    state.isTakeOverDelivery = false;
                }
            }

            var timeDifference = state.rent_car_data[0].deliveryDate - action.payload;
            var dayCount = timeDifference / (24 * 60 * 60 * 1000);

            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate) {
                if(dayCount >= 3) {
                    state.rent_car_data[0].plusThreeDay = true;
                }else{
                    state.rent_car_data[0].plusThreeDay = false;
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
            state.rent_car_data[0].deliveryDate = action.payload.getTime()
            var timeDifference = action.payload - state.rent_car_data[0].takeDate;
            var dayCount = timeDifference / (24 * 60 * 60 * 1000);


            if(state.rent_car_data[0].takeDate && state.rent_car_data[0].deliveryDate){
                if(dayCount >= 3) {
                    state.rent_car_data[0].plusThreeDay = true;
                }else{
                    state.rent_car_data[0].plusThreeDay = false;
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