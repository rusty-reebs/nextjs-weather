export default function Location({ lat, long, date }) {
  return (
    <div>
      <h1>San Juan del Sur, Nicaragua</h1>
      <p>{lat}</p>
      <p>{long}</p>
      <p>{date}</p>
    </div>
  );
}
