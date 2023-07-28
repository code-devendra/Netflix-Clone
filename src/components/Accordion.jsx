import { useState } from "react";
import { accordionData } from "../utils";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <h2 className="text-center text-3xl lg:text-5xl text-white font-bold mt-12 my-5 mb-9">
        Frequently Asked Questions
      </h2>
      <div className=" w-11/12 max-w-5xl mx-auto mb-14 transition-all ease-in-out delay-500">
        {accordionData.map((item, index) => (
          <div className="border-gray-300 mb-2 rounded-sm" key={index}>
            <div
              className=" text-lg lg:text-xl text-white bg-[rgb(45,45,45)] hover:bg-[rgb(90,90,90)] cursor-pointer mb-1 px-4 py-4 flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <h3>{item.title}</h3>
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                } transition-all ease-in-out delay-400`}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Edit / Add_Plus">
                    {" "}
                    <path
                      id="Vector"
                      d="M6 12H12M12 12H18M12 12V18M12 12V6"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div
              className={` bg-[rgb(45,45,45)] text-base lg:text-lg tracking-wider text-white px-4 py-6  transition ease-in-out delay-500 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.summary}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
