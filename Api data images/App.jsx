import { useState } from 'react'
import './App.css'
import Searchheader from './searchheader';
import searchImages from "./Apidata";
import ImageList from "./components/imageList"

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async(term)=>
    {
      const result = await searchImages(term);
      setImages(result);
    }
  return (
    <div className="App">
      <Searchheader search={handleSubmit} />
      <ImageList imagesplaceholder={images} />

    </div>
  )
}

export default App
