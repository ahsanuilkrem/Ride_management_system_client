

import React from "react";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Mitchell",
    role: "Regular Rider",
    feedback:
      "The service is super fast and reliable. I always get a driver within a minute! Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Khan",
    role: "Business Traveller",
    feedback:
      "Transparent pricing and accurate tracking make every ride smooth. Love the clean UI and experience.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "David Parker",
    role: "Daily Commuter",
    feedback:
      "Drivers are well-behaved and punctual. Payments are easy with UPI and cards. Great service overall!",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold text-center mb-10">
        ⭐ Customer Feedback 
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              "{review.feedback}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
