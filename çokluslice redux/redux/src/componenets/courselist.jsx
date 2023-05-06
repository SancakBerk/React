import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/courselist.css"
import { removecourse } from '../store/slices/courseslice'
import { useDispatch } from 'react-redux'
function courselist() {

  const {courses} = useSelector(({form,courses:{data,searchterm}})=>{
    const filteredcourses= data.filter((course)=>course.name.toLowerCase().includes(searchterm.toLowerCase()))
    return{
      courses: filteredcourses,
    }
    
  });
  
  const dispatch = useDispatch()
  return (
    <>
      {courses.map((course, index) => {
        return (
          <div key={index} className='eachcoursediv'>
            <h1> {course.name} </h1>
            <p> {course.description} </p>
            <p> {course.cost} TL </p>
            <button className="delete" onClick={() => { dispatch(removecourse(course.id)) }}>Sil</button>
          </div>
        )
      })}
    </>
  )
}

export default courselist