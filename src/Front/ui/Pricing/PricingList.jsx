import PricingItem from "./PricingItem";

function PricingList() {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      features: [
        "Track applications",
        "Add notes",
        "1 board",
        "Charts Included",
      ],
      highlight: false,
    },
    {
      title: "Pro",
      price: "$5/mo",
      features: [
        "Everything in Basic",
        "Unlimited boards",
        "Upload documents",
        "Priority support",
      ],
      highlight: true,
    },
    {
      title: "Team",
      price: "$15/mo",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin tools",
        "Analytics dashboard",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <PricingItem plan={plan} key={plan.title} />
      ))}
    </div>
  );
}

export default PricingList;
