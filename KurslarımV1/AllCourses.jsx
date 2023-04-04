import Course from "./Course"
import "./allCoursescss.css"

function courses({Courses,removeCourse}) {
    return ( 
    <div>
        <div className="header">
            <h2>Kurslarım</h2>
        </div>
        <div className="includescoursesdiv">
            {
                Courses.map((course,index)=>
                {
                    return(
                        <Course {...course} key={index} removeOneCourse={removeCourse} />
                    )

                })
            }
        </div>

    </div> );
}

export default courses;