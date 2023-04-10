import { useState } from 'react'
import './App.css'
import Course from './course'


function randomCourse() {
  const courseArray = ["Angular", "BootStrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)]; // return course (string)
}


function App() {
  const [courses, setcourses] = useState([]);

  const clickHandle = () => {
    setcourses([...courses, randomCourse()]);
  }
  return (
    <div className='genelclass'>
      <button onClick={clickHandle} className="buttonself" >Append Course</button>
      <div className="imagedivapp">
      {
        courses.map((coursename,index)=>
        {
          return <Course CourseName={coursename} key={index}/>
        })
        
      }
      </div>
    </div>
  )
}

export default App
