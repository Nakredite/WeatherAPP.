import React, { useState } from "react";
import "./styles.css";

const api = {
  apiKey: "e904d1f546fb296a43392019e27d7aac",
  apiBase: "https://api.openweathermap.org/data/2.5/"
};

const GetDate = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const Find = (evt) => {
    if (evt.key === "Enter") {
      const apiUrl = `${api.apiBase}weather?q=${query}&appid=${api.apiKey}&units=metric`;

      console.log("API URL:", apiUrl);

      fetch(apiUrl)
        .then((res) => {
          console.log("Response:", res);
          return res.json();
        })
        .then((result) => {
          console.log("API Result:", result);
          setWeather(result);
          setQuery("");
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    }
  };

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="search here"
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={Find}
          />
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{GetDate(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
