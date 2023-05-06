import {createSlice,nanoid} from "@reduxjs/toolkit"

const courseslice = createSlice(
    {
        name:"slice",
        initialState:
        {
            searchterm:"",
            data:[],
        },
        reducers:
        {
            addcourse(state,action)
            {
                
                state.data.push({
                    name:action.payload.name,
                    description:action.payload.description,
                    cost: action.payload.cost,
                    id:nanoid(),
                })

            },
            removecourse(state,action)
            {
                const updatedcourses=state.data.filter((course)=>{
                    return course.id !==action.payload;
                })
                state.data=updatedcourses;
            },
            changesearchterm(state,action)
            {

                state.searchterm= action.payload;
            },

        }
        
    })

export const {addcourse,removecourse,changesearchterm} = courseslice.actions;
export const coursereducer = courseslice.reducer; 
