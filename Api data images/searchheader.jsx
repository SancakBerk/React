import "./Searchheader.css"
import { useState } from 'react';



function Searchheader({search}) {
    const [valueinput, setValue] = useState("");

    const formSubmit =(event)=>
    {
        event.preventDefault();
        search({valueinput});

    }
    const handleChange =(event)=>
    {
        setValue(event.target.value);
    }
    
    return ( 
        <div className="container">
            <form className="formdiv" onSubmit={formSubmit}>

                <label htmlFor="">Ne Arıyorsunuz?</label>
                <input type="text" value ={valueinput} onChange={handleChange} />
            </form>
        </div>
     );
    <div></div>
}

export default Searchheader;