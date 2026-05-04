import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { WEATHER_API_KEY } from "./config";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");

  const onChangeInput = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = async () => {
    const API_KEY = WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    let response = await fetch(API_URL);
    let data = await response.json();
    let result = {
      city: city,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feels_like: data.main.feels_like,
      weather: data.weather[0].description,
    };
    console.log(result);
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCity("");
    let info = await searchWeather();
    updateInfo(info);
  };

  return (
    <div className="search-box">
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          type="search"
          required
          value={city}
          onChange={onChangeInput}
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
