
import ImageItem from "./imageitem"

function ImageList({imagesplaceholder}) {
    return ( <div className="imageList">
        {
            imagesplaceholder.map((image,index)=>
            {
                return <ImageItem image= {image} key ={index}/>
            })
        }        
    </div> );
}

export default ImageList;