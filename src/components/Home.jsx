import React, { useEffect, useState } from "react";

import axios from "axios";
import Tiles from "./Tiles.jsx";

const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [bgImage, setBgImage] = useState("");

  //   const fetchImage = async () => {
  //     const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  //     const url = `https://api.unsplash.com/photos/random?query=abstract&orientation=landscape&client_id=${accessKey}`;

  //     try {
  //       const response = await axios.get(url);
  //       setBgImage(response.data.urls.regular);
  //     } catch (error) {
  //       console.error("Error fetching image:", error);
  //     }
  //   };

  useEffect(() => {
    // Fetch time and date
    const updateTimeDate = () => {
      const currentTime = new Date();
      const options = { hour: "numeric", minute: "numeric", hour12: true };
      const formattedTime = currentTime.toLocaleTimeString("en-US", options);
      const formattedDate = currentTime.toLocaleDateString("en-US");
      setTime(formattedTime);
      setDate(formattedDate);
    };

    // Fetch a random image on component mount
    // fetchImage();

    // Update time and date every minute
    updateTimeDate();
    const intervalId = setInterval(updateTimeDate, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let [value, setValue] = useState("");
  let query = "";
  const generateQuery = () => {
    let words = value.split(" ");
    let n = value.split(" ").length;

    for (let i = 0; i < n; i++) {
      if (i === n - 1) {
        query += words[i];
      } else {
        query += words[i] + "+";
      }
    }
  };
  generateQuery();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-white bg-black bg-opacity-60">
      <img
        // src={bgImage}
        src="https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="unsplash"
        className="w-full h-full -z-10 overflow-hidden absolute top-0 left-0 opacity-100 object-fill"
      />
      <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          {/* <p className="text-5xl font-200">{time}</p> */}
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="h-10 w-10 flex justify-center items-center bg-transparent rounded-md"
          >
            <a
              href={`https://www.google.co.in/inputtools/try/`}
              className="mx-1"
            >
              <img
                src="https://softwares.center/wp-content/uploads/2018/06/ap_resize.png"
                alt="b"
                className="h-10 w-10 pt-[7px] pb-[4px] opacity-70"
              />
            </a>
          </button>
          <button
            type="submit"
            className="h-10 w-10 flex justify-center items-center bg-transparent rounded-md"
          >
            <a
              href={`https://www.bing.com/images/search?q=${
                query ? query : "bing"
              }`}
              className="mx-1"
            >
              <img
                src="https://r.bing.com/rp/f21jlSMmEDN43OaavcdaB-7Phq0.svg"
                alt="b"
                className="h-10 w-10 pt-[9px] pb-[6px] opacity-70"
              />
            </a>
          </button>

          <form
            type="submit"
            action={`https://www.bing.com/search?q=${query ? query : "bing"}`}
            method="POST"
            className="relative"
          >
            <label className="absolute px-4 py-2">
              <svg
                aria-hidden="true"
                width="23"
                height="23"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4167 0C15.7555 0 20.0833 4.32792 20.0833 9.66667C20.0833 11.9759 19.2736 14.0959 17.9227 15.7584L24.4571 22.2929C24.8476 22.6835 24.8476 23.3165 24.4571 23.7071C24.1021 24.0621 23.5465 24.0944 23.1551 23.8039L23.0429 23.7071L16.5084 17.1727C14.8459 18.5236 12.7259 19.3333 10.4167 19.3333C5.07792 19.3333 0.75 15.0055 0.75 9.66667C0.75 4.32792 5.07792 0 10.4167 0ZM10.4167 2C6.18248 2 2.75 5.43248 2.75 9.66667C2.75 13.9008 6.18248 17.3333 10.4167 17.3333C14.6508 17.3333 18.0833 13.9008 18.0833 9.66667C18.0833 5.43248 14.6508 2 10.4167 2Z"
                  fill="#767676"
                ></path>
              </svg>
            </label>
            <input
              type="text"
              className="border-0 md:min-w-[600px] min-w-[200px] outline-none focus:outline-none  rounded-full pl-16 pr-4 pt-[7px] pb-[9px] transition-all ease-in-out duration-75 focus:bg-opacity-[12%] hover:bg-opacity-[12%] bg-opacity-10 bg-white text-white"
              placeholder="Enter your search query"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onSubmit={() =>
                window.location.replace(
                  `https://www.bing.com/search?q=${query ? query : "bing"}`
                )
              }
            />
          </form>

          <button
            type="submit"
            className="h-10 w-10 flex justify-center items-center bg-transparent rounded-md"
          >
            <a href={`https://www.bing.com/search?q=${query ? query : "bing"}`}>
              <img
                src="https://logos-world.net/wp-content/uploads/2021/02/Bing-Logo.png"
                alt="b"
                className="h-full w-full"
              />
            </a>
          </button>

          <button
            type="submit"
            className="h-10 w-10 flex justify-center items-center bg-transparent rounded-md"
          >
            <a
              href={`https://www.google.com/search?q=${
                query ? query : "google"
              }`}
            >
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt="G"
                className="h-full w-full p-[7.5px]"
              />
            </a>
          </button>

          <button
            type="submit"
            className="h-10 w-10 flex justify-center items-center bg-transparent rounded-md"
          >
            <a href={`https://duckduckgo.com/?q=${query ? query : "google"}`}>
              <img
                src="https://2.bp.blogspot.com/-1h850ZEqVl4/W2u2pqoYcAI/AAAAAAAAEok/wjR1MexVrr4hB8y_s5l08jYejVphdyebACLcBGAs/s1600/DuckDuckGo.png"
                alt="d"
                className="h-full w-full cover scale-150"
              />
            </a>
          </button>
        </div>
      </div>

      <Tiles />
    </div>
  );
};

export default Home;
