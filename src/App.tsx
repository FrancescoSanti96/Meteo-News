import React, { useState } from 'react';
import axios from "axios";

function App() {
  // const [loader, setLoader] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [weatherValue, setweatherValue] = useState([]);

  const sendCity = async () => {
    try {
      const resp = await axios.get(
        `http://api.weatherstack.com/current?access_key=8e2acd1175ae80673f3f74e84c2f3412&query=${inputValue}`
      );
      // console.log(resp.data);[]
      setweatherValue(resp.data);
      // setLoader(true);
    } catch (error: any) {
      console.log(error.data);
      alert(`Error: ${error?.message || ""}`);
    }
  };

 

  return (
    <>
    <div className='container mx-auto pt-2 px-5 lg:px-60 '>

    {/* Weather */}
    {/* Insert the city */}
    <div className='flex'>
    <input
          type="text"
          className="text-xl sm:text-xxl block pl-2 h-12 rounded-md focus-visible:outline-primaryBg" 
          placeholder="Inserisci la città"
          onChange={(e) => setInputValue(e.target.value)}
          />
    <button className="text-primaryBg bg-send hover:bg-sendHover font-bold h-12 py-0 px-2 text-m rounded-md"
    onClick={()=> {
      console.log(inputValue)
      sendCity();
      // setLoader(true);
    }}
    >
    Cerca
    </button>
    </div>
</div>

    </> 
  );
}

export default App;
