import { Link } from "react-router-dom";
import FeaturesList from "../ui/Features/FeaturesList";
import FeaturesTitle from "../ui/Features/FeaturesTitle";
import GetStarted from "../ui/GetStarted";

function Features() {
  return (
    <>
      <FeaturesTitle />
      <FeaturesList />
      <GetStarted />
    </>
  );
}

export default Features;
