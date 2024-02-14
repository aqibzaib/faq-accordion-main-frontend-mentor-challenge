import { useState } from "react";
import IconMinus from "../assets/images/icon-minus";
import IconPlus from "../assets/images/icon-plus";
import IconStar from "../assets/images/icon-star";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCollapse = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="border border-white rounded-lg min-w-[100%] max-w-[590px] h-fit m-auto px-8 py-4 bg-white drop-shadow-lg shadow-[hsl(292,16%,49%)]">
        <div>
          <div className="flex items-center justify-start gap-4 pt-4 pb-4">
            <span>
              <IconStar />
            </span>
            <h1 className="text-4xl"> FAQs</h1>
          </div>
          {faqData.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`w-[100%] flex items-center justify-between pt-5 pb-5 cursor-pointer  font-semibold text-wrap ${
                    activeIndex === index
                      ? "transition-border duration-300 ease-in-out "
                      : "border-t-2 border-[#e4e4e4] transition-border duration-500 ease-in-out "
                  }`}
                  onClick={() => toggleCollapse(index)}
                >
                  <span className="hover:text-[hsl(292,16%,49%)]">
                    {item.question}
                  </span>
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
                  <p className="pb-4 bg-white ">{item.answer}</p>
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
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skills levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio, it's an excellent way to showcase your skills to potential employer.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default App;
