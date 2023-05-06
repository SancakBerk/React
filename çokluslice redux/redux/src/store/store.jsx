import { configureStore } from "@reduxjs/toolkit"
import { formreducer } from "./slices/formslice"
import { coursereducer } from "./slices/courseslice"

export const store = configureStore(
    {
        reducer:
        {
            form:formreducer ,
            courses:coursereducer,
        }
    })