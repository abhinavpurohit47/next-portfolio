import React from "react";
import { FunctionComponent } from "react";
import { Experience } from "../type";

const ExperienceCard: FunctionComponent<{ experience: Experience }> = ({
  experience: { Icon, title, about, from, organization },
}) => {
  function createMarkup() {
    return {
      __html: about,
    };
  }
  return (
    // <div className="flex w-full">
    //   <div className="flex flex-col justify-center">
    //     {/* <h1>{Icon}</h1> */}

    //
    //     <span className="flex flex-row w-full">
    //       <h4 className="float-left font-normal">{from}</h4>
    //       <h4 className="float-right font-medium">{organization}</h4>
    //     </span>
    //     <p>{about}</p>
    //   </div>
    // </div>
    <div className="md:justify-center md:w-full ">
      <div className="flex flex-col w-full">
        <span className="flex flex-row text-blue-500">
          <Icon className="w-6 h-5 mx-2 my-1 text-green" />
          <h2 className="justify-center font-bold text-pink-600 align-center">
            {title}
          </h2>
        </span>
        <div className="flex flex-row justify-between m-2">
          <h4 className="flex flex-row float-left font-medium text-gray-500">
            {organization}
          </h4>
          <h4 className="float-right font-normal">{from}</h4>
        </div>
        <span className="font-normal text-gray-700">{about}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
