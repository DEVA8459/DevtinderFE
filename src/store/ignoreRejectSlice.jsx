import { createSlice } from "@reduxjs/toolkit";

const ignoreRejectSlice =createSlice({
    name:"ingoreReject",
    initialState:null,
    reducers:{
        addIgnoreReject:(state,action)=>{
            return action.payload;
        },
        removeIgnoreReject: (state,action)=>{
            return state.filter(
              (connection) => connection?.user?._id !== action.payload
            );
        }
    }
})

export const { addIgnoreReject,removeIgnoreReject } = ignoreRejectSlice.actions;
export default ignoreRejectSlice.reducer;