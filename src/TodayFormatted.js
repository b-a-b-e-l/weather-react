export default function TodayFormatted(props) {
  console.log(props.date);
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
