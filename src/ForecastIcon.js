import React from "react";
export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": "/icons/clearskyday.svg",
    "01n": "/icons/clearskynight.svg",
    "02d": "/icons/fewcloudsday.svg",
    "02n": "/icons/fewcloudsnight.svg",
    "03d": "/icons/scatteredday.svg",
    "03n": "/icons/scatterednight.svg",
    "04d": "/icons/brokencloudsday.svg",
    "04n": "/icons/brokencloudsday.svg",
    "09d": "/icons/showerday.svg",
    "09n": "/icons/showernight.svg",
    "10d": "/icons/rainday.svg",
    "10n": "/icons/rainday.svg",
    "11d": "/icons/thunderstormday.svg",
    "11n": "/icons/thunderstormday.svg",
    "13d": "/icons/snowday.svg",
    "13n": "/icons/snowday.svg",
    "50d": "/icons/mistday.svg",
    "50n": "/icons/mistday.svg",
  };
  return <img src={codeMapping[code]} alt={alt} className="forecasticon" />;
}
