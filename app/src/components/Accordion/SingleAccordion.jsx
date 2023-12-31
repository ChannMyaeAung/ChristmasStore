import { useState } from "react";
import { motion } from "framer-motion";

const SingleAccordion = ({ accordion }) => {
  const [expandedId, setExpandedId] = useState(null);

  /* using the id of the accordion to check which one is being clicked on. */
  const toggleAnswer = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <article className="flex flex-col p-3 transition-all border-8 cursor-pointer rounded-xl border-sky-300 shadow-sky-200 bg-sky-50 hover:bg-sky-200">
      {/* Question Starts*/}
      <div
        className="flex items-center justify-between gap-3"
        onClick={() => toggleAnswer(accordion.id)}
      >
        <h2 className="text-lg">{accordion.question}</h2>
        <motion.button
          className={` bg-sky-300 rounded-md p-0.5 duration-300 hover:bg-cyan-700 ${
            expandedId === accordion.id ? "bg-cyan-700" : ""
          }`}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 duration-300 font-bold hover:stroke-white  ${
              expandedId === accordion.id ? "rotate-45 stroke-white " : ""
            }`}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </motion.svg>
        </motion.button>
      </div>
      {/* Question Ends Here */}

      {/* Answer Starts*/}
      {/* if the id matches, show the answer. if not, hide the answer */}
      <div
        className={`grid duration-300 ${
          expandedId === accordion.id
            ? "grid-rows-[1fr] mt-3"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-6 text-gray-600">{accordion.answer}</p>
        </div>
      </div>
      {/* End of Answers section */}
    </article>
  );
  /* End of a single article */
};

export default SingleAccordion;
