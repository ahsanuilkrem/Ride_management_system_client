import React, { useState } from "react";


interface FAQItem {
    question: string;
    answer: string;
}


const faqList: FAQItem[] = [
    {
        question: "How do I request a ride?",
        answer:
            "Click the Book a Ride button from the Hero section, enter your pickup and destination locations, then choose a ride type and confirm your booking.",
    },
    {
        question: "Can I schedule a ride in advance?",
        answer:
            "Yes, you can schedule rides ahead of time by selecting the 'Schedule Ride' option in the booking screen.",
    },
    {
        question: "How do I become a driver?",
        answer:
            "Click the Become a Driver button from the Hero section, fill out the application form, and upload your documents. Our team will review and get back to you.",
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Yes, all payment data is securely encrypted and processed through trusted payment gateways.",
    },
    {
        question: "Can I cancel a ride after booking?",
        answer:
            "Yes, you can cancel a ride. However, a small fee may apply depending on how close to the pickup time you cancel.",
    },
];

const FAQ: React.FC = () => {
    const [search, setSearch] = useState("");

    const filteredFaqs = faqList.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold text-center mb-6">FAQs</h1>
                <p className="text-muted-foreground text-center mb-10">
                    Find answers to common questions about our platform.
                </p>

                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search questions..."
                        className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <details
                                key={index}
                                className="bg-white rounded-md p-4 shadow cursor-pointer"
                            >
                                <summary className="font-semibold text-lg">
                                    {faq.question}
                                </summary>
                                <p className="text-muted-foreground mt-2">{faq.answer}</p>
                            </details>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No FAQs matched your search.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
