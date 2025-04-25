import { Link } from "react-router-dom";
import Title from "../ui/HomePage/Title";
import HomeFeatures from "../ui/HomePage/HomeFeatures";
import GetStarted from "../ui/GetStarted";

function Homepage() {
  return (
    <>
      <Title />
      <img
        src="front_pic.png"
        className="mt-4 mb-4 rounded-2xl w-[80%] mx-auto"
      />
      <HomeFeatures />
      <GetStarted />
    </>
  );
}

export default Homepage;
