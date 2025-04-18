import { Link } from "react-router-dom";
import Title from "../ui/HomePage/Title";
import HomeFeatures from "../ui/HomePage/HomeFeatures";
import GetStarted from "../ui/GetStarted";

function Homepage() {
  return (
    <>
      <Title />
      <img src="front_pic.webp" className="mt-20 mb-20 rounded-2xl" />
      <HomeFeatures />
      <GetStarted />
    </>
  );
}

export default Homepage;
