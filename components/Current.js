import * as WiIcons from "react-icons/wi";
import dayjs from "dayjs";

export default function Current(data) {
  const currentDate = dayjs(new Date(data.dt));
  return (
    <div>
      <p>{currentDate}</p>
      <p>{data.current.temp} &#8451;C</p>
      <p>{data.current.feels_like}</p>
      <p>{data.current.wind_speed}</p>
    </div>
  );
}
