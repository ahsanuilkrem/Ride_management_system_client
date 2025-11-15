import React from "react";
import { Link } from "react-router";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          🚗 Ready to Ride?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Book your ride in seconds and experience safe, fast, and reliable service anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/rider"
            
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Book a Ride
          </Link>
          <a
           
            className="bg-transparent border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
