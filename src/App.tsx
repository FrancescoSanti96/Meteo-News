import React from "react";
import News from "./components/news";
import Weather from "./components/weather";
import {CalendarIcon, PlusIcon} from "@heroicons/react/outline";

function App() {
  return (
    <>
    <div className="container mx-auto pt-2 px-5 lg:px-20 ">
      <div className="mt-5"><Weather /></div>
      
      <div className="mt-5">
      <CalendarIcon
            className="h-10 w-10 sm:h-12 sm:w-12 inline mr-3"
            aria-hidden="true"
          />
      <button className="bg-send hover:bg-sendHover rounded-full">
      <a href="https://calendar.google.com/"> <PlusIcon
            className="p-2 h-10 w-10 sm:h-12 sm:w-12 inline"
            aria-hidden="true"
          /></a>
      </button>
     
      </div>
      <div className="mt-5"><News /></div>
    </div>
       
    </>
      );
};

export default App;
