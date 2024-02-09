import { useState } from "react";
import IconMinus from "../assets/images/icon-minus";
import IconPlus from "../assets/images/icon-plus";
import IconStar from "../assets/images/icon-star";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
          <div className="">
            <button
              className="w-[100%]  flex items-center justify-between border-t-2  pt-3 pb-3 border-red-900"
              onClick={toggleCollapse}
            >
              <span>What is frontend Mentor and how it will help me?</span>
              <span className="pl-5 pr-5 ">
                {isCollapsed ? <IconMinus /> : <IconPlus />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                isCollapsed ? "max-h-0" : "max-h-screen"
              }`}
            >
              <p className="pt-4 pb-4">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
          </div>
          <div className="">
            <button
              className="w-[100%]  flex items-center justify-between border-t-2  pt-3 pb-3 border-red-900 "
              onClick={toggleCollapse}
            >
              <span className="">Is Frontend Mentor free?</span>
              <span className="pl-5 pr-5 ">
                {isCollapsed ? <IconMinus /> : <IconPlus />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                isCollapsed ? "max-h-0" : "max-h-screen"
              }`}
            >
              <p className="pt-4 pb-4">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
          </div>
          <div className="">
            <button
              className="w-[100%]  flex items-center justify-between border-t-2  pt-3 pb-3 border-red-900"
              onClick={toggleCollapse}
            >
              <span>Can I use Frontend Mentor projects in my portfolio?</span>
              <span className="pl-5 pr-5 ">
                {isCollapsed ? <IconMinus /> : <IconPlus />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                isCollapsed ? "max-h-0" : "max-h-screen"
              }`}
            >
              <p className="pt-4 pb-4">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
          </div>
          <div className="">
            <button
              className="w-[100%]  flex items-center justify-between border-t-2  pt-3 pb-3 borde"
              onClick={toggleCollapse}
            >
              <span>How can I get help if I'm stuck on a challenge?</span>
              <span className="pl-5 pr-5 ">
                {isCollapsed ? <IconMinus /> : <IconPlus />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                isCollapsed ? "max-h-0" : "max-h-screen"
              }`}
            >
              <p className="pt-4 pb-4">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
