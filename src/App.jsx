import { useState } from "react";
import IconMinus from "../assets/images/icon-minus";
import IconPlus from "../assets/images/icon-plus";
import IconStar from "../assets/images/icon-star";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  // const toggleCollapse = (index) => {
  //   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  const toggleCollapse = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="border border-red-500 rounded-md w-[590px] h-[400px] m-auto px-8 py-8">
        <div>
          <div className=" flex items-center justify-start gap-4 pt-4 pb-6">
            <span>
              <IconStar />
            </span>
            <h1 className="text-4xl"> FAQs</h1>
          </div>
          {faqData.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`w-[100%] flex items-center justify-between pt-3 pb-3 ${
                    activeIndex === index
                      ? "transition-border duration-300 ease-in-out"
                      : "border-t-2 border-red-900 transition-border duration-500 ease-in-out"
                  }`}
                  onClick={() => toggleCollapse(index)}
                >
                  <span>{item.question}</span>
                  <span className="pl-5 pr-5 ">
                    {activeIndex === index ? <IconMinus /> : <IconPlus />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-max-h ${
                    activeIndex === index
                      ? "duration-500 ease-in-out max-h-screen"
                      : "duration-300 ease-in-out max-h-0"
                  }`}
                >
                  <p className="pt-4 pb-4">{item.answer}Hello</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const faqData = [
  {
    question: "What is frontend Mentor and how it will help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
];

export default App;
