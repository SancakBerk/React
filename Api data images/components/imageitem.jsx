function ImageItem({image}) {
    return ( 
    <div>
        <img src={image.urls.small} alt={image.alt_description} className="imgItem" />
    </div>
    );
}

export default ImageItem;