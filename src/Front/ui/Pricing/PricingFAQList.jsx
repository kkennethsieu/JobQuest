import PricingFAQItem from "./PricingFAQItem";

const faqs = [
  {
    title: "How does Track My Job help me stay organized?",
    description:
      "Track My Job provides an intuitive board where you can track job applications, save contacts, store notes, and manage documents—all in one place. This helps you stay on top of your job search without losing track of important details.",
  },
  {
    title: "Is Track My Job free to use?",
    description:
      "Yes! We offer a free Basic plan that lets you track applications and add notes. If you need more features like unlimited boards and document uploads, you can upgrade to a Pro or Team plan.",
  },
  {
    title: "Can I use Track My Job on my phone?",
    description:
      "Absolutely! Track My Job is fully responsive, so you can access it from any device—desktop, tablet, or mobile browser—without any downloads required.",
  },
  {
    title: "Can I collaborate with others on my job applications?",
    description:
      "Yes! With our Team plan, you can invite others to collaborate on job applications, share notes, and manage applications together—perfect for career coaches or job search accountability groups.",
  },
  {
    title: "How do I get started?",
    description:
      "Getting started is easy! Just sign up for a free account, create your first board, and start tracking your job applications. No credit card required!",
  },
];

function PricingFAQ() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center mt-16 px-4 sm:px-6 lg:px-8">
      <h3 className="w-full sm:w-[80%] md:w-[60%] text-center text-3xl font-bold mb-10 mt-10">
        Frequently Asked Questions
      </h3>
      <ul className="w-full sm:w-[80%] md:w-[60%] space-y-6 mb-10 divide-y divide-blue-200">
        {faqs.map((question) => (
          <PricingFAQItem question={question} key={question.title} />
        ))}
      </ul>
    </div>
  );
}

export default PricingFAQ;
