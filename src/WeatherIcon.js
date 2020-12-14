import React from "react";
import clearskyday from "/public/icons/clearskyday.svg";
import clearskynight from "/public/icons/clearskynight.svg";
import fewcloudsday from "/public/icons/fewcloudsday.svg";
import fewcloudsnight from "/public/icons/fewcloudsnight.svg";
import scatteredday from "/public/icons/scatteredday.svg";
import scatterednight from "/public/icons/scatterednight.svg";
import brokencloudsday from "/public/icons/brokencloudsday.svg";
import showerday from "/public/icons/showerday.svg";
import showernight from "/public/icons/showernight.svg";
import rainday from "/public/icons/rainday.svg";
import thunderstormday from "/public/icons/thunderstormday.svg";
import snowday from "/public/icons/snowday.svg";
import mistday from "/public/icons/mistday.svg";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": clearskyday,
    "01n": clearskynight,
    "02d": fewcloudsday,
    "02n": fewcloudsnight,
    "03d": scatteredday,
    "03n": scatterednight,
    "04d": brokencloudsday,
    "04n": brokencloudsday,
    "09d": showerday,
    "09n": showernight,
    "10d": rainday,
    "10n": rainday,
    "11d": thunderstormday,
    "11n": thunderstormday,
    "13d": snowday,
    "13n": snowday,
    "50d": mistday,
    "50n": mistday,
  };
  return <img src={codeMapping[code]} alt={alt} />;
}
