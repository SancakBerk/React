import React from 'react'
import "../styles/coursevalue.css"
import { useSelector} from 'react-redux'

function coursevalue() {

    const totalcost = useSelector(({form,courses:{data,searchterm}})=>{
        const filteredcourses= data.filter((course)=>course.name.toLowerCase().includes(searchterm.toLowerCase()))

        let cost =0;
        for(let course of filteredcourses)
        {
            cost+= course.cost;
        }


        return cost;
      });

  return (
    <div className="coursediv">
        <h1>Toplam Tutar {totalcost} TL</h1>
    </div>
  )
}

export default coursevalue