import React from "react";
import style from "./FAQ.module.css";
export const FAQ = () => {
  return (
    <div className=" text-white bg-black flex flex-col  items-center gap-8 py-3">
      <div className="text-c9 lg:text-H1 font-extrabold tracking-wide w-full text-center">
        Frequently Asked Questions
      </div>
      <div className=" w-3/4 flex flex-col gap-2 ">
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          What is Netflix?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          How much does Netflix cost?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          Where can I watch?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          How do I cancel?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          What can I watch on Netflix?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
        <div
          className={` ${style.hov} lg:text-normal text-xl px-3 h-20 flex items-center relative`}
        >
          Is Netflix good for kids?
          <div className=" absolute right-5 text-c8">+</div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 items-center  ">
        <div className="text-white text-center lg:text-normal text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className=" smd:w-3/4 w-screen smd:px-0 px-5 flex-col flex smd:flex-row gap-2 smd:h-14">
          <div className="h-full smd:col-span-2 rounded-md shadow-md flex items-center bord smd:w-2/3">
            <input
              type="email"
              className="h-full w-full p-2 text-white bg-black rounded-md  opacity-60 "
              placeholder="Email address"
              style={{
                border: "1px solid white",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            className=" px-5 smd:px-5 w-fit h-full flex items-center justify-center rounded-md text-white text-normal smd:w-1/3"
            style={{ backgroundColor: "#E50914" }}
          >
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
