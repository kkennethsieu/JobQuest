import PricingList from "../ui/Pricing/PricingList";
import PricingTitle from "../ui/Pricing/PricingTitle";
import PricingFAQ from "../ui/Pricing/PricingFAQList";
import GetStarted from "../ui/GetStarted";

function Pricing() {
  return (
    <>
      <PricingTitle />
      <PricingList />
      <PricingFAQ />
      <GetStarted />
    </>
  );
}

export default Pricing;
