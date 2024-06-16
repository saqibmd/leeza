/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-20 flex flex-wrap">
      <div className="w-full md:w-[24vw] mb-8 md:mb-0 md:mr-4 flex flex-col items-center md:items-start">
        <div className="w-24 h-24 overflow-hidden mb-4">
          <img
            className="w-full h-full object-cover object-center"
            src="./assets/images/leeza.webp"
            alt=""
          />
        </div>
        <div className="mt-4 text-center md:text-left">
          <p className="text-sm text-gray-600">
            Registered not-for-profit organization u/s 8 of the Companies Act
            with Reg. No: 159344 and Goodmind Care Foundation’s Corporate
            Identification Number is (CIN) U85300TG2022NPL159344
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Phone No: <a href="tel:+919391557552">+91 9391557552</a>
          </p>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <a href="mailto:support@goodmind.app">support@goodmind.app</a>
          </p>
          <p className="text-sm text-gray-600">
            Location: NMDC Colony, Venkatadri Colony, Masab Tank, Hyderabad,
            Telangana 500264
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-8 md:mt-0 ml-0 md:ml-20 gap-4">
        <div className="flex flex-col gap-2 mt-4">
          <a href="#" className="text-black hover:underline">
            Company
          </a>
          <a href="#" className="text-black hover:underline">
            Corporate
          </a>
          <a href="#" className="text-black hover:underline">
            Blogs
          </a>
          <a href="#" className="text-black hover:underline">
            AI Wellness Buddy
          </a>
          <a href="#" className="text-black hover:underline">
            AI Therapist
          </a>
          <a href="#" className="text-black hover:underline">
            Contact us
          </a>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <a href="#" className="text-black hover:underline">
            Legal
          </a>
          <a href="#" className="text-black hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="text-black hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-black hover:underline">
            Refund Policy
          </a>
          <a href="#" className="text-black hover:underline">
            Shipping Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
