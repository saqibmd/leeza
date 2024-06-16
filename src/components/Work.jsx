/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const workData = [
  {
    title: "Corporates",
    description: `We help employers create healthier, happier workplaces for
      themselves. Our platform offers non-judgemental therapeutic
      solutions to all concerns related to mental health care and
      maintenance. Join the pioneers who have created healthier
      workplaces for 10+ million lives`,
    imgSrc: "src/assets/images/2613733.webp",
    imgAlt: "Corporates Image",
  },
  {
    title: "Institutions",
    description: `We assist leading institutes in creating healthier, more flourishing and non-judgemental campuses. Our technological platform offers non-stigmatic solutions to all the mental health care concerns. Join the leaders who helped create happier campuses for 10+ million lives.`,
    imgSrc: "src/assets/images/3326540.webp",
    imgAlt: "Institutions Image",
  },
  {
    title: "Therapists",
    description: `We help all kinds of mental health professionals get the patient that fits their expertise easily through our platform. Join our space where we connect with professionals, communicate and operate on creating healthier and happier lives!`,
    imgSrc: "src/assets/images/7355084.webp",
    imgAlt: "Therapists Image",
  },
];

const WorkCard = ({ title, description, imgSrc, imgAlt }) => (
  <div className="w-full md:w-[24vw] h-[68vh] bg-white rounded-lg overflow-hidden my-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <h1 className="text-center text-2xl pt-4 pb-4">{title}</h1>
    <div className="w-full h-48 mt-4 bg-red-200 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
    <p className="text-center px-3 pt-8">{description}</p>
  </div>
);

const Work = () => {
  return (
    <div className="w-full bg-green-300 px-4 md:px-16 py-6">
      <h1 className="text-center pt-2 text-white text-2xl mb-3">
        Who we work with?
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6">
        {workData.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Work;
