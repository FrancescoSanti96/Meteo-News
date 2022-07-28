import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const initialState = {
    newsList: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        
        getNews: (state, action: PayloadAction<any>) => {
            state.newsList = action.payload;
        },
    }
});

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;