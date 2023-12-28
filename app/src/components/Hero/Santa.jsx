import React from "react";
import santa from "../../assets/santa-claus.png";
import cityscape from "../../assets/christmas-cityscape.png";

const Santa = () => {
  return (
    <div className="relative flex justify-between w-full py-16 mt-6 ">
      {/* Santa Icon & Text Container */}
      <div className="flex-1 border-b-2 border-dashed border-b-secondaryRed -z-10">
        {/* Santa Icon */}
        <figure className="w-16 h-16 lg:w-20 lg:h-20">
          <img
            src={santa}
            alt="Santa Image"
            className="object-contain w-full h-full"
          />
        </figure>

        {/* Text Container */}
        <div className="absolute right-auto top-4 left-14">
          <p
            style={{ boxShadow: "3px 2px 0px 3px rgba(0,0,0,0.75)" }}
            className="p-1 sm:p-2 text-[12px] sm:text-sm font-bold uppercase border-2 border-black rounded-t-lg rounded-bl-none rounded-br-lg bg-slate-50"
          >
            Guide me to your home <br /> by purchasing items.
          </p>
        </div>
      </div>

      {/* City Scape */}
      <figure className="absolute bottom-0 right-4 w-20 h-20 scale-150 bg-center top-[4.5rem] lg:top-[2.7rem] lg:w-40 lg:h-40">
        <img
          src={cityscape}
          alt="Christmas Cityscape"
          className="object-cover w-full h-full lg:object-contain"
        />
      </figure>
    </div>
  );
};

export default Santa;
