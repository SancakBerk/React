import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios"
import Courses from "./AllCourses"
import Loading from "./Loading"
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteCourse =(id)=>
  {
    const afterDeletedCourses = courses.filter((course)=>
    {
      if (course.id !== id) {
        return course
      }
    })
    setCourses(afterDeletedCourses)
  }



  const fetchcourses=async ()=>
  {
    setLoading(true)
    try{
      const response =await axios.get("http://localhost:3000/courses")
      setCourses(response.data)
      setLoading(false)
    }
    catch(error)
    {
      setLoading(true)

    }
  }



  useEffect(()=>
  {
    fetchcourses();
    console.log(courses)

  },[])

  return (
    <div className="App">
      {
        loading 
        ? 
        <Loading/>
        :
        <>
        {
          courses.length==0 ? (
          <div className='Alldeleteddiv'>
            Kursların hepsini sildin
            <button className='refreshBtn' onClick={fetchcourses}>Yenile</button>
          </div> )
          :
          (<Courses Courses ={courses} removeCourse={deleteCourse} />)
        }
        </>
      }
    </div>
  )
}

export default App
