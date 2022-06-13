import Location from "../components/Location";
import Current from "../components/Current";
import sample from "../utils/sampleData";

export default function Home() {
  return (
    <div className="h-screen">
      <Location data={sample} />
      <Current data={sample.current} />
    </div>
  );
}
