import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genras: {},
  },
  reducers: {
    getApiConfig :(state,action)=>{
        state.url=action.payload

    },
    getGenrasConfig:(state,action)=>{
        state.genras=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig,getGenrasConfig } = movieSlice.actions;

export default movieSlice.reducer;



