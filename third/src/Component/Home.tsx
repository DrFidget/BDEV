import React, { useState } from "react";
import bgimage from "../assets/download.jpeg";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number; // Add humidity property
  };
  weather: [
    {
      description: string;
    }
  ];
}

const api = {
  key: "8f3f9bffa46b8ffb9977bce2909e7635",
  base: "https://api.openweathermap.org/data/2.5",
};

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = () => {
    fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Weather data not found");
        }
        return res.json();
      })
      .then((result: WeatherData) => {
        setWeatherData(result);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
        setWeatherData(null);
      });
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="bg-opacity-80 p-4 rounded-lg shadow-lg text-center">
        <input
          type="text"
          placeholder="Enter Location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg sm:text-xl"
        />
        <br />
        <button
          onClick={searchWeather}
          className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        {weatherData && (
          <div className="mt-4">
            <p className="text-4xl md:text-7xl font-extrabold text-white">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <br />
            <p className="text-4xl md:text-7xl font-extrabold text-white">
              TEMPERATURE: {weatherData.main.temp}°C
            </p>
            <br />
            <p className="text-4xl md:text-7xl font-extrabold text-white">
              HUMIDITY: {weatherData.main.humidity}%
            </p>
            <br />
            <p className="text-4xl md:text-7xl font-extrabold text-white">
              DESCRIPTION: {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
