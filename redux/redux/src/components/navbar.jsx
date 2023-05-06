import React from 'react'
import {BsFillBasketFill} from "react-icons/bs"
import { useSelector,useDispatch } from 'react-redux'
import { store } from '../store'
import {clearcart} from "../control/cartslice"
function navbar() {
    const {quantity,cartItems} = useSelector((store)=>store.cart)
    const dispatch = useDispatch()
  return (
    <nav>
        <div>
            <h3>Kurs Uygulaması</h3>
            <div>
                <p> {quantity} </p>
                <button onClick={()=>{dispatch(clearcart())}}></button>
            </div>
            <BsFillBasketFill/>
        </div>
    </nav>
  )
}

export default navbar