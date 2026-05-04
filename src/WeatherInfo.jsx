import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherInfo = () => {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    temp: 26.05,
    tempMin: 26.05,
    tempMax: 26.05,
    humidity: 65,
    feels_like: 26.05,
    weather: "haze",
  });

  const updateInfo = (newWeatherInfo) => {
    setWeatherInfo(newWeatherInfo);
  };

  return (
    <div>
      <Typography variant="h4" component="h4">
        Weather Information
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherInfo;
