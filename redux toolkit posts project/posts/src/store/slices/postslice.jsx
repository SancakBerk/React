import { createSlice } from "@reduxjs/toolkit";


const postslice = createSlice(
    {
        name:"postslice",
        initialState:
        {
            AiFillLikenumber:0,
            FcLikenumber:0,
            AiFillDislikenumber:0,
            FcDislikenumber:0,
            FiCoffeenumber:0,
        },
        reducers:
        {
            increaseAiFillLike(state,action)
            {
                state.AiFillLikenumber+=1;
            },
            increaseFcLike(state,action)
            {
                state.FcLikenumber+=1;
            },
            increaseAiFillDislike(state,action)
            {
                state.AiFillDislikenumber+=1;
            },
            increaseFcDislike(state,action)
            {
                state.FcDislikenumber+=1;
            },increaseFiCoffee(state,action)
            {
                state.FiCoffeenumber+=1;
            },
        }
    })

export const postSlice = postslice.reducer;
export const {increaseAiFillLike,increaseFcLike,increaseAiFillDislike,increaseFcDislike,increaseFiCoffee} = postslice.actions
