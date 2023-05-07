import React from "react";
import "../styles/postlist.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FcLike, FcDislike } from "react-icons/fc";
import { FiCoffee } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import {increaseAiFillLike,increaseFcLike,increaseAiFillDislike,increaseFcDislike,increaseFiCoffee} from "../store/slices/formslice"


function postlist() {
  const dispatch = useDispatch();
  const {postsarray} = useSelector((state) => {
    return state.form;
  });
  return (
    <div className="main">
      {postsarray.map((item, index) => {
        return (
          <div className="postlistdiv" key={index}>
            <p className="postnumber"> {index + 1} </p>
            <h1 className="title">{item.title}</h1>
            <h2 className="author">{item.author}</h2>
            <p className="content">{item.content}</p>
            <div className="emogies">
              <div>
                <AiFillLike onClick={()=>{dispatch(increaseAiFillLike(item.id))}} />
                <p> {item.AiFillLikenumber} </p>
              </div>
              <div>
                <FcLike onClick={()=>{dispatch(increaseFcLike(item.id))}} />
                <p> {item.FcLikenumber} </p>
              </div>
              <div>
                <AiFillDislike onClick={()=>{dispatch(increaseAiFillDislike(item.id))}}/>
                <p> {item.AiFillDislikenumber} </p>
              </div>
              <div>
                <FcDislike onClick={()=>{dispatch(increaseFcDislike(item.id))}} />
                <p> {item.FcDislikenumber} </p>
              </div>
              <div>
                <FiCoffee onClick={()=>{dispatch(increaseFiCoffee(item.id))} }/>
                <p> {item.FiCoffeenumber} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default postlist;
