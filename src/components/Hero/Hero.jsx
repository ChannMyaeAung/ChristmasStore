import { useState } from "react";
import tree from "../../assets/tree.png";
import { heroContent, heroItems } from "./items";
import { motion } from "framer-motion";
import Santa from "./Santa";

const Hero = () => {
  // Create an array of state values, one for each item in heroContent
  const [showIcons, setShowIcons] = useState(heroContent.map(() => false));

  const toggleIconVisibility = (index) => {
    setShowIcons((arr) => {
      return arr.map((state, idx) => (idx === index ? !state : state));
    });
  };
  return (
    <section id="hero" className="flex flex-col gap-4 overflow-hidden ">
      <div className="flex flex-col w-full gap-6 md:flex-row">
        {heroContent.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={() => toggleIconVisibility(index)}
            className="relative w-full h-full mx-auto cursor-pointer"
          >
            {/* Image */}
            <figure className="mx-auto rounded-sm">
              <img
                src={item.img}
                alt={item.alt}
                className="object-cover w-full h-full"
              />
            </figure>
            {/* Content on the image */}
            <div className="absolute bottom-0 w-full">
              <div className="flex items-center justify-between gap-3 p-3 bg-gradient-to-r from-gray-100 to-slate-400">
                <span className="text-sm font-semibold uppercase text-secondaryRed">
                  {item.desc}
                </span>
                <button id="arrow__down" className="bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="hsla(3, 74%, 61%, 1)"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>
                </button>
              </div>
              {/* Content Shown when hovered on the image */}
              <div
                className={`grid ${
                  showIcons[index] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                } transition-[grid-template-rows] items-center bg-slate-50 duration-500 overflow-hidden `}
              >
                <div className="flex flex-wrap items-center w-full h-full overflow-hidden">
                  {heroItems.map((item) => (
                    <figure
                      key={item.id}
                      className="w-6 h-6 m-2 sm:w-10 sm:h-10"
                    >
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="object-contain w-full h-full"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Santa />
    </section>
  );
};
export default Hero;
