
import {createSlice} from "@reduxjs/toolkit"
import { useReducer } from "react"
import { addcourse } from "./courseslice";


const formslice = createSlice(
    {
        name:"form",
        initialState:
        {
            name:"",
            description:"",
            cost:0,
        },
        reducers:
        {
            changename(state,action)
            {
                state.name=action.payload;
            },
            changedescription(state,action)
            {
                state.description=action.payload;
            },
            changecost(state,action)
            {
                state.cost = action.payload;
            }
        
        },
        extraReducers(builder)
        {
            builder.addCase(addcourse,(state,action)=>
            {
                state.name="";
                state.description="";
                state.cost=0;
            })
        }
    })

export const {changename,changedescription,changecost} = formslice.actions;
export const formreducer = formslice.reducer;