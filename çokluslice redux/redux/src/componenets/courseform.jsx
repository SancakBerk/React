import React from 'react'
import "../styles/courseform.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changename,changedescription,changecost } from '../store/slices/formslice'
import { addcourse } from '../store/slices/courseslice'
function courseform() {
  const {name,description,cost} = useSelector((state)=>{return{
    name:state.form.name,
    description:state.form.description,
    cost:state.form.cost,
  }})


  const Handlesubmit =(event)=>
  {
    event.preventDefault();

    dispatch(addcourse({name,description,cost}));

  }
  const dispatch =useDispatch();
  return (
    <form action="" className="courseformdiv" onSubmit={Handlesubmit}>
      <h1>Kurs Ekle</h1>
      <div className="flexrow">
        <div>
          <h2>Ad</h2>
          <input type="text" onChange={(event)=>{dispatch(changename(event.target.value))}} value={name} />
        </div>
        <div>
          <h2>Açıklama</h2>
          <textarea type="number" name="" onChange={(event)=>{dispatch(changedescription(event.target.value))}} value={description} ></textarea>
        </div>
        <div>
          <h2>Fiyat</h2>
          <input type="number" onChange={(event)=>{dispatch(changecost(parseInt(event.target.value)))}} value={cost} />
        </div>
        <button>Kaydet</button>
      </div>
    </form>
  )
}

export default courseform