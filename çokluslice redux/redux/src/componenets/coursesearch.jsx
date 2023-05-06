import React from 'react'
import { changesearchterm } from '../store/slices/courseslice' 
import { useSelector,useDispatch } from 'react-redux'
import "../styles/coursesearch.css"
function coursesearch() {
    const searchterm = useSelector((store)=>{
        return store.courses.searchterm
    })


    const dispatch = useDispatch();
  return (
    <div className="coursesearchdiv">
        <h3>Kurslarım</h3>
        <div>
            <label htmlFor="">Ara</label>
            <input type="text" 
            onChange={(event)=>{dispatch(changesearchterm(event.target.value))}}
            value={searchterm}
            />
        </div>
    </div>
  )
}

export default coursesearch