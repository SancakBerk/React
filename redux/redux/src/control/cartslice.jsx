import {createSlice} from "@reduxjs/toolkit"

const initialstate=
{
    cartItems:[],
    quantity:0,
    total:0,
}

const cartslice = createSlice({

    name:"cart",
    initialstate,
    reducers:
    {
        clearcart:(state)=>
        {
            state.cartItems=[];
        }
    }
});

console.log(cartslice)

export const {clearcart} =createSlice.actions;
export default cartslice.reducer