import { createSlice } from "@reduxjs/toolkit";
const countslice=createSlice({
    name:"Counter", //name of reducer
    initialState:0, //initial value of state
    reducers:{   //individual action methods to separate the logic.
        increment:(state,action)=>{
            return state+1;
        },
        decrement:(state,action)=>{
          return state-1;
        },
        reset:(state,action)=>{
            return 0;
        }
    }
})

//action to use in dispatch method...........
export const {increment,decrement,reset} =countslice.actions;

//reference of reducer to configure in store.......
export default countslice.reducer;