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
      <div className="border border-red-500 rounded-md w-[450px] h-[400px] m-auto px-8 py-8">
        <div className="border border-black flex items-center justify-start gap-4">
          <span>
            <IconStar />
          </span>
          <h1 className="text-2xl"> FAQ</h1>
        </div>
        <div className="">
          <button
            className="w-[100%] border border-black flex items-center justify-between "
            onClick={toggleCollapse}
          >
            <span>What is frontend Mentor and how it will help </span>
            <span>{isCollapsed ? <IconMinus /> : <IconPlus />}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-h duration-700 ease-in-out ${
              isCollapsed ? "max-h-0" : "max-h-screen"
            }`}
          >
            sdfsdfdsaf sadf sdf sdad fsa df dsaf sd afds f sa fs adf sad f sda
            fsad f adf
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
