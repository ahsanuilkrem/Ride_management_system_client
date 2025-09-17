// src/pages/AboutUs.tsx

import React from "react";

const teamMembers = [
  {
    name: "Ayesha Rahman",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Imran Hossain",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tania Ahmed",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Rashed Karim",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const About: React.FC = () => {
  return (
    <section className="my-12 ">
      <div className="container mx-auto px-7 py-7 bg-muted rounded-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>

        {/* Company background */}
        <p className="text-foreground text-center mb-10 max-w-3xl mx-auto">
          We’re a next-generation ride-sharing platform built for reliability, affordability, and safety. Since our launch in 2025, our mission has been to make transportation more accessible and more human—empowering both riders and drivers through technology and community.
        </p>

        {/* Mission */}
        <div className="bg-muted p-6 rounded-lg mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10 ">Our Mission</h2>
          <p className="text-foreground">
            To redefine urban mobility by creating a seamless, safe, and inclusive ride-sharing experience that benefits everyone — from daily commuters to independent drivers and city infrastructure.
          </p>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Meet the Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-muted p-4 rounded-lg shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
