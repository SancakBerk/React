import Angular from './images/angular.jpg';
import BootStrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./Course.css";

const courseMap =
{
    Angular:Angular,
    BootStrap:BootStrap,
    Ccsharp:Ccsharp,
    KompleWeb:KompleWeb
}

function course({CourseName}) {
    console.log(CourseName);
    return ( 
    <div className='imagediv'>
        <img src={courseMap[CourseName]} alt="" className='imageself' />
    </div> );
}

export default course  ;