import React, { useState } from "react";

const faqs = [
  {
    category: "Signing Up for a Grass Pad Subscription",
    questions: [
      { question: "How will DoggieLawn help me?", answer: "DoggieLawn provides natural grass pads for indoor use." },
      { question: "What sizes do you offer?", answer: "We offer small, medium, large, and extra-large sizes." },
    ],
  },
  {
    category: "Shipping Your Dog Grass Pad",
    questions: [
      { question: "When will my first DoggieLawn ship?", answer: "Your first order will ship within 2-3 business days." },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 relative top-[100px] px-10">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-6">
          <h3 className="text-xl font-semibold text-green-700">{section.category}</h3>
          <div className="border-t mt-2">
            {section.questions.map((item, questionIndex) => {
              const uniqueIndex = `${sectionIndex}-${questionIndex}`;
              return (
                <div key={uniqueIndex} className="border-b">
                  <button
                    className="w-full text-left py-3 px-2 flex justify-between items-center hover:bg-gray-100"
                    onClick={() => toggleQuestion(uniqueIndex)}
                  >
                    <span className="text-lg">{item.question}</span>
                    <span className="text-gray-500">{openIndex === uniqueIndex ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === uniqueIndex && <p className="px-4 pb-3 text-gray-600">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
