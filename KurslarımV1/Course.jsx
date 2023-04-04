import "./Coursecss.css"
function Course({id,content,title,price,removeOneCourse}) {
    return ( 
    <div className="coursediv">
        <div className="cardTitlePrice">
                <h2 className="cardTitle"> {title} </h2>
                <h4 className="carpPrice">{price}TL</h4>
        </div>
        <p>{content} </p>
        <div className="btndiv">
        <button className="cardDeleteBtn" onClick={()=>removeOneCourse(id)}>Sil</button>
        </div>

    </div> );
}

export default Course;