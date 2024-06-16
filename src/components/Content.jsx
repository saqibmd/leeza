/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const serviceData = [
  {
    title: "Smart Assessment",
    description: `We offer a cutting-edge mental wellness platform that revolutionizes
      self-care with a free AI-powered assessment tool. These Smart
      Assessments are designed to analyze various factors to offer a
      comprehensive understanding of individuals current mental condition.`,
    buttonText: "Take Assessment",
    imgSrc: "srcassetsimages\view-3d-male-teacher.webp",
    imgAlt: "Smart Assessment Image",
  },
  {
    title: "Counselling Sessions",
    description: `We are dedicated to fostering accessible online counseling sessions.
      We prioritize easy, worldwide access for online counseling sessions
      with flexible scheduling. Empowering worldwide access, our online
      counseling service ensures immediate support for all, prioritizing
      mental wellness.`,
    buttonText: "Book a Session",
    imgSrc: "src/assets/images/view-3d-man-with-tech-device.webp",
    imgAlt: "Counselling Sessions Image",
  },
  {
    title: "AI-Wellness Buddy",
    description: `Our AI wellness buddy utilizes cutting-edge technology to deliver
      personalized affirmations, reminders, and self-care tips based on
      individual user preferences and wellness goals. This helps to keep a
      track on individuals mental health and increase productivity.`,
    buttonText: "Talk to Guin",
    imgSrc: "src/assets/images/101.webp",
    imgAlt: "AI-Wellness Buddy Image",
  },
  {
    title: "AI-Wellness Therapy",
    description: `Our AI Therapy offers 24/7 accessibility, eliminating barriers.
      Users can engage from home or on-the-go, ensuring consistent
      support. Transition from AI-led to human therapist sessions is
      seamless, for a holistic approach. It is multi-lingual, with
      chat/video therapy for convenience.`,
    buttonText: "Connect Now!",
    imgSrc: "src/assets/images/view-3d-confident-businessman.webp",
    imgAlt: "AI-Wellness Therapy Image",
  },
];

const ServiceCard = ({ title, description, buttonText, imgSrc, imgAlt }) => (
  <div className="my-5 w-full md:w-[34vw] h-auto md:h-[64vh] bg-zinc-100 rounded-md flex flex-col justify-center items-center gap-4 p-5">
    <div className="w-36 h-36 overflow-hidden rounded-full">
      <img
        className="w-full h-full object-cover object-center"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
    <h1 className="text-lg font-semibold">{title}</h1>
    <p className="text-center px-2 md:px-5">{description}</p>
    <button className="px-4 py-2 rounded-md hover:bg-green-800 text-center bg-green-900 text-white">
      {buttonText}
    </button>
  </div>
);

const Content = () => {
  return (
    <div className="w-full py-5 px-5 md:px-20">
      <h2 className="text-lg font-semibold text-center mb-5">What We Offer</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12 items-center">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Content;
