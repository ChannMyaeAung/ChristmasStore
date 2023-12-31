import React from "react";
import { accordions } from "./data";
import SingleAccordion from "./SingleAccordion";

const Accordion = () => {
  return (
    <div id="accordion__container" className="container px-4 py-8 mx-auto">
      <div
        id="accordion__heading"
        className="flex flex-col gap-3 mt-3 text-center"
      >
        <h1 className="text-2xl font-bold">Frequently asked questions</h1>
        <p className="text-base text-gray-500 md:text-base">
          Have questions? Explore our Frequently Asked Questions section for
          quick answers. If your questions isn't answered, feel free to reach
          out to our helpful support team.
        </p>
      </div>

      <div id="accordion__content" className="flex flex-col gap-3 mt-10">
        {accordions.map((accordion) => (
          <SingleAccordion key={accordion.id} accordion={accordion} />
        ))}
        {/* End of accordion container */}
      </div>
    </div>
  );
};

export default Accordion;
