import axios from "axios"
const searchImages = async (term)=>
  {
    const response = await axios.get("https://api.unsplash.com/search/photos",
    {
      headers:  
      {
        Authorization:"Client-ID ZwDJTRUhkDTfQA4PvrC1j7TNgSsA0kSXbqo3vtnqUeQ", //access key
      },
      params:
      {
        query:term.valueinput,    //isteidğimiz parametreler
      },
    });
    return response.data.results;
  };

  export default searchImages;