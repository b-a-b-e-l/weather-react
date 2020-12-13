import React from "react";
import clearskyday from "./icons/clearskyday.svg";
import clearskynight from "./icons/clearskynight.svg";
import fewcloudsday from "./icons/fewcloudsday.svg";
import fewcloudsnight from "./icons/fewcloudsnight.svg";
import scatteredday from "./icons/scatteredday.svg";
import scatterednight from "./icons/scatterednight.svg";
import brokencloudsday from "./icons/brokencloudsday.svg";
import showerday from "./icons/showerday.svg";
import showernight from "./icons/showernight.svg";
import rainday from "./icons/rainday.svg";
import thunderstormday from "./icons/thunderstormday.svg";
import snowday from "./icons/snowday.svg";
import mistday from "./icons/mistday.svg";

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
