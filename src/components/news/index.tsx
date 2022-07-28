import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { getNews } from "../../redux/reducers/newsSlice";

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
    // if the prezis are already saved in the store I show them otherwise I make the API call.
    if (list.length === 0) {
      try {
        const resp = await axios.get(
          `http://api.mediastack.com/v1/news?access_key=879bfe2758539fd63d1d8436d559ddb4&countries=it&sources=it&limit=5`
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

  return (
    <>
      <div className="flex">
        <h1 className="bg-secondaryBg text-xl sm:text-xxl">News</h1>
        <h1 className="bg-secondaryBg text-xl sm:text-xxl ml-8">I</h1>
        <h1 className="bg-secondaryBg text-xl sm:text-xxl ml-6">I</h1>
        <h1 className="bg-secondaryBg text-xl sm:text-xxl ml-6">I</h1>
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

      <div className="flex justify-center mt-5">
        {list?.map((it: any, index: any) => {
          return (
            // <div className="">
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
                <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                  {it.author}
                </div>
                <a
                  href={it.url}
                  className="absolute bottom-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
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
