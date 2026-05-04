import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormSharpIcon from "@mui/icons-material/ThunderstormSharp";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  let sunny_img =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8fDA%3D";
  let winter_img =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  let rainny_img =
    "https://media.istockphoto.com/id/1399991977/photo/spring-rain-open-black-umbrella-in-wet-weather-deep-sorrow-sad-mood-raining-in-city-heavy.jpg?s=612x612&w=0&k=20&c=dwunAZ35iIP2PCbVjhmSFphYoZzo9xqn6KmQMsypUCg=";
  return (
    <div className="weather-info-card">
      <Card sx={{ maxWidth: "22rem" }}>
        <CardMedia
          component="img"
          image={
            info.humidity > 80
              ? rainny_img
              : info.temp > 18
                ? sunny_img
                : winter_img
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="city-name"
          >
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormSharpIcon />
            ) : info.temp > 18 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Minimum Temperature : {info.tempMin}&deg;C</p>
            <p>Maximum Temperature : {info.tempMax}&deg;C</p>
            <p>Humidity: {info.humidity}% </p>
            <p>
              The Weather can be described as <i>{info.weather}</i> and feels
              like {info.feels_like}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
