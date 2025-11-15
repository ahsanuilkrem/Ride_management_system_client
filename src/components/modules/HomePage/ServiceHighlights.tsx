import React from "react";

interface HighlightItem {
  title: string;
  desc: string;
}

const highlights: HighlightItem[] = [
  {
    title: "🚀 Fast & Reliable Service",
    desc: "Find nearby drivers instantly with minimal waiting time."
  },
  {
    title: "📍 Accurate GPS Tracking",
    desc: "Track driver location, ETA, and route in real time."
  },
  {
    title: "💸 Transparent Pricing",
    desc: "No hidden charges. Fare is shown before booking."
  },
  {
    title: "🚗 Multiple Ride Options",
    desc: "Choose between Bike, Auto, Mini, Sedan, SUV, or Premium."
  },
  {
    title: "🛡️ Safety First",
    desc: "Verified drivers, ratings, emergency support, and trip sharing."
  },
  {
    title: "💳 Easy Payments",
    desc: "Supports Cash, UPI, Card, and Wallet payments."
  },
  {
    title: "⭐ 24/7 Customer Support",
    desc: "Get help anytime from our dedicated support team."
  }
];

const ServiceHighlights: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        ⭐ Service Highlights
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition shadow-sm hover:shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
