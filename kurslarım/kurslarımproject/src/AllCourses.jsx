import Course from "./Course"
import "./allCoursescss.css"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function courses({ Courses, removeCourse }) {
    const [index, setIndex] = useState(0)
    const { content, title, price } = Courses[index];
    const randomCourse =()=>
    {
        let randomındex = Math.round(Math.random()*((Courses.length)-1));
        if (randomındex === index) 
        {
               randomındex= randomındex +1
        }
        setIndex(CheckIndex(randomındex));
    }

    const CheckIndex=(newindex)=>
    {
        if (newindex<0) 
        {
            return (Courses.length) -1   
        }
        if (newindex==Courses.length) 
        {
            return 0
        }
        return newindex
    }


    const prevCourse =()=>
    {
        setIndex((index)=>
        {
            let newindex = index -1;
            return CheckIndex(newindex);

        });
    }


    const afterCourse =()=>
    {
        setIndex((index)=>
        {
            let newindex = index +1;
            return CheckIndex(newindex);

        });
    }

    return (
        <div className="allcoursesdiv">
            <div className="header">
                <h2>Kurslarım</h2>
                <button className="randomcoursebutton" onClick={randomCourse}>Rastgele Kurs Ata</button>
            </div>
            <div className="navdiv">
                <div className="includescoursesdiv">
                    <button className="leftright" onClick={prevCourse}>
                        <FaChevronLeft />
                    </button>
                    <div className="coursediv">
                        <div className="cardTitlePrice">
                            <h2 className="cardTitle"> {title} </h2>
                            <h4 className="carpPrice">{price}TL</h4>
                        </div>
                        <p>{content} </p>
                        <div className="btndiv">
                        </div>

                    </div>

                    {/* {
                
                Courses.map((course,index)=>
                {
                    return(
                        <Course {...course} key={index} removeOneCourse={removeCourse} />
                    )

                })
            } */}
                    <button className="leftright" onClick={afterCourse}><FaChevronRight /></button>
                </div>
            </div>

        </div>);
}

export default courses;