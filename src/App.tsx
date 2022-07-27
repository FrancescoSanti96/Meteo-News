import React from 'react';

function App() {
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
          />
    <button className=" text-primaryBg bg-send hover:bg-sendHover font-bold h-12 py-0 px-2 border-transparent bg-transparent text-m rounded-md">
    Cerca
    </button>
    </div>

</div>
    </> 
  );
}

export default App;
