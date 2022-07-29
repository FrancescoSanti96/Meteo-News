import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { getNews } from "../../redux/reducers/newsSlice";
import {
  CashIcon,
  BeakerIcon,
  ChipIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

function News() {
  const [loader, setLoader] = useState<boolean>(true);

  //Redux
  //Inizialize list for contain the result of the news API
  const list = useSelector((state: any) => state.news.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    sendNews();
  }, []);

  //Function for consume the API and get the data.
  const sendNews = async () => {
    // if the list are already saved in the store I show them otherwise I make the API call,
    // this case solve the problem if we add another page for not reload the date.
    if (list.length === 0) {
      try {
        const resp = await axios.get(
          // "fff"
          `http://api.mediastack.com/v1/news?access_key=879bfe2758539fd63d1d8436d559ddb4&countries=it&languages=it&limit=5`
        );
        dispatch(getNews(resp?.data?.data));
        console.log(resp?.data?.data);
        setLoader(false);
      } catch (error: any) {
        console.log(error.data);
        alert(`Error: ${error?.message || ""}`);
      }
    } else {
      setLoader(false);
    }
  };

  //Function for get the news of a specific category but in english beacuse in italian dont't retrive date.
  const sendNewsCategory = async (category: string) => {
    try {
      const resp = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=879bfe2758539fd63d1d8436d559ddb4&languages=en&categories=${category}&limit=5`
      );
      dispatch(getNews(resp?.data?.data));
      setLoader(false);
    } catch (error: any) {
      console.log(error.data);
      alert(`Error: ${error?.message || ""}`);
    }
  };

  return (
    <>
      <div className="flex">
        <h1 className=" text-xxl mr-10">News</h1>
        {/* Show news of specif categroies */}
        <button
          //onClick call the function and pass the specific categorie
          onClick={() => {
            sendNewsCategory("science");
          }}
        >
          <BeakerIcon
            className="h-10 w-10 sm:h-12 sm:w-12 inline mr-3"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={() => {
            sendNewsCategory("business");
          }}
        >
          <CashIcon
            className="h-10 w-10 sm:h-12 sm:w-12 inline mr-3"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={() => {
            sendNewsCategory("technology");
          }}
        >
          <ChipIcon
            className="h-10 w-10 sm:h-12 sm:w-12 inline"
            aria-hidden="true"
          />
        </button>
      </div>

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

      <div className="flex justify-center mt-5 flex-col sm:flex-row items-center">
        {/* Use Map function for retrive from the list every item 'news' and visualize the card with the information */}
        {list?.map((it: any, index: any) => {
          return (
            <div className="border-solid border-2 border-secondary w-56 h-96 relative">
              <img
                className="rounded-t-lg px-5 py-2"
                src={it.image}
                alt="image news"
              />
              <div className="p-5">
                <h6 className="mb-2  font-bold tracking-tight text-primary ">
                  {it.title}
                </h6>
                <div className="text-xxs uppercase text-teal-700 mt-1 mb-2">
                  {it.author}
                </div>
                <a
                  href={it.url}
                  className="absolute bottom-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <ArrowNarrowRightIcon className="h-5 w-6" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
