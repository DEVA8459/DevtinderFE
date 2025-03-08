import { createSlice } from "@reduxjs/toolkit";

const connectionSlice =createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addconnection:(state,action)=>{
            return action.payload;
        },
        removeConnection: (state,action)=>{
            return state.filter(
              (connection) => connection._id !== action.payload
            );
        }
    }
})

export const { addconnection,removeConnection } = connectionSlice.actions;
export default connectionSlice.reducer;