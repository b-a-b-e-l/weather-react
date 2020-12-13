import React from "react";

export default function WeatherIcon(props) {
  return <img src="icons/{props.code}.svg" alt={props.alt} />;
}
