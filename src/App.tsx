import React from "react";
import News from "./components/news";
import Weather from "./components/weather";

function App() {
  return (
    <>
    <div className="container mx-auto pt-2 px-5 lg:px-20 ">
      <div className="mt-5"><Weather /></div>
      <div className="mt-5"><News /></div>
    </div>
       
    </>
      );
};

export default App;
