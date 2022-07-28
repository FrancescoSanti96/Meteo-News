import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { getWeather } from "../../redux/reducers/weatherSlice";

function Weather() {
  const [loader, setLoader] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  //Redux
  //Inizialize list for contain the result of the weather API
  const list = useSelector((state: any) => state.weather.weatherList);
  const dispatch = useDispatch();

  //Function for consume the API and get the data.
  const sendCity = async () => {
    try {
      const resp = await axios.get(
        `http://api.weatherstack.com/current?access_key=8e2acd1175ae80673f3f74e84c2f3412&query=${inputValue}`
      );
      dispatch(getWeather(resp?.data?.current));
      setLoader(false);
    } catch (error: any) {
      console.log(error.data);
      alert(`Error: ${error?.message || ""}`);
    }
  };

  return (
    <>
      <div>
        {/* Weather */}
        {/* Insert the city */}
        <div className="flex">
          <input
            type="text"
            className="text-xl sm:text-xxl block pl-2 h-12 rounded-md w-1/2 focus-visible:outline-primaryBg"
            placeholder="Inserisci la città"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* If the list is empty show button Cerca else show Anulla */}
          {Object.keys(list).length === 0 ? (
            <button
              className="text-primaryBg bg-send hover:bg-sendHover font-bold h-12 py-0 px-2 text-m rounded-md"
              onClick={() => {
                // console.log(inputValue)
                sendCity();
                setLoader(true);
              }}
            >
              Cerca
            </button>
          ) : (
            <button
              className="text-primaryBg bg-error hover:bg-errorHover font-bold h-12 py-0 px-2 text-m rounded-md"
              onClick={() => {
                dispatch(getWeather({}));
                setInputValue("");
              }}
            >
              Annulla
            </button>
          )}

          {/* Loading weather data from API */}
          {loader && (
            <span>
              <TailSpin
                height="50"
                width="50"
                color="#4d4d4d"
                ariaLabel="loading"
              />
            </span>
          )}
        </div>
        {/* Show result of the weather only if the object is full of data. */}
        {Object.keys(list).length > 0 && (
          <div className="flex items-center mt-4">
            <img
              src={list?.weather_icons}
              alt="weather_icons"
              className="inline"
            />
            <div className="ml-4">
              <h5>
                Temperatura: <b>{list?.temperature}</b>
              </h5>
              <h5>
                Descrizione: <b>{list?.weather_descriptions}</b>
              </h5>
              <h5>
                Umidità: <b>{list?.humidity}</b>
              </h5>
              <h5>
                Velocità vento: <b>{list?.wind_speed}</b>
              </h5>
            </div>
          </div>
        )}

        <div></div>
      </div>
    </>
  );
}

export default Weather;
