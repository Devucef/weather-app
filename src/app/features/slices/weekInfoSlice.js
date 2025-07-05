import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    lat : undefined,
    lon : undefined,
}


const WeekInfoSlice = createSlice({
    name :"weekInfo",
    initialState,
    reducers:{
        setCoords:(state,action)=>{
            const {lat , lon} = action.payload;
            state.lat =lat
            state.lon =lon            
        }
    }
})

export const {setCoords} = WeekInfoSlice.actions;

export default WeekInfoSlice.reducer;