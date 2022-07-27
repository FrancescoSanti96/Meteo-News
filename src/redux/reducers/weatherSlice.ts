import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const initialState = {
    weatherList: []
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        
        getWeather: (state, action: PayloadAction<any>) => {
            state.weatherList = action.payload;
        },
    }
});

export const { getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;