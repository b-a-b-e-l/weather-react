export default function TodayFormatted(props) {
  new Date(props.date);
  console.log(props.date);
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {" "}
      {day} {hours}:{minutes}{" "}
    </div>
  );
}
