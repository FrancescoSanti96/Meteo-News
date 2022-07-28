// Configure the redux store of the app
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherSlice'
import newsReducer from './reducers/newsSlice'


export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        news: newsReducer,
    }
})