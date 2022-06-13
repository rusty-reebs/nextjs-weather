import * as WiIcons from "react-icons/wi";
import dayjs from "dayjs";

export default function Current(data) {
  const currentDate = dayjs(new Date(data.dt));
  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
}
