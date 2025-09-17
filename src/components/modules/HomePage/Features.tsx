// src/pages/Features.tsx

import React from "react";

interface FeatureGroup {
  title: string;
  description: string;
  capabilities: string[];
}

const roles: FeatureGroup[] = [
  {
    title: "Rider",
    description: "Convenient, safe, and affordable transport for everyone.",
    capabilities: [
      "Book instant or scheduled rides",
      "Live driver tracking",
      "Secure cashless payments",
      "Ride history & receipts",
      "24/7 customer support",
    ],
  },
  {
    title: "Driver",
    description: "Flexible earning opportunities with powerful tools.",
    capabilities: [
      "Real-time trip requests",
      "Earnings dashboard",
      "Driver ratings & reviews",
      "Navigation & trip optimization",
      "In-app support and help center",
    ],
  },
  {
    title: "Admin",
    description: "Powerful tools to manage the platform and users.",
    capabilities: [
      "User & driver management",
      "Analytics and reporting",
      "Ride fare configuration",
      "Dispute resolution tools",
      "System-wide notifications",
    ],
  },
];

const Features: React.FC = () => {
  return (
    <section className="my-12 ">
      <div className="container mx-auto px-7 py-7 bg-muted rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-12">Platform Features</h1>

        <div className="grid gap-10 md:grid-cols-3">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{role.title}</h2>
              <p className="text-muted-foreground mb-4">{role.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {role.capabilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
