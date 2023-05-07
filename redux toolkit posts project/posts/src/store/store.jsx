import {configureStore} from "@reduxjs/toolkit"
import { FormSlice } from "./slices/formslice"
import { postSlice } from "./slices/postslice"

export const store = configureStore(
    {
        reducer:
        {
            form:FormSlice,
            Postslice:postSlice,
        }
    })

