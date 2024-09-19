import { configureStore } from '@reduxjs/toolkit'
import  movieSlice  from './mainSlice';

export const store = configureStore({
    reducer:{
       home: movieSlice
    },
});



