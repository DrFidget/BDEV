import React from "react";
import bgimg from "../../assets/netflixteaser.png";
import netflix from "../../assets/ntflix.png";
const bgimage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgimg})`,
  width: "100%",
  backgroundSize: "cover",
  height: "700px",
};

export const Home = () => {
  return (
    <div className=" w-full relative flex justify-center" style={bgimage}>
      <div className=" w-11/12 xl:w-3/4 flex justify-between items-center h-auto py-0 absolute top-4">
        <div className="flex items-center">
          {/* Replace "nnetflix logo" with your Netflix logo */}
          <img src={`${netflix}`} alt="Netflix Logo" className="h-8 lg:h-12" />
        </div>
        <div className=" flex justify-center items-center">
          <button
            className="bg-red-600 text-white px-4 py-1 rounded text-c10"
            style={{ backgroundColor: "#e50914" }}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center ">
        <div className=" flex flex-col justify-center items-center w-11/12 smd:w-4/5 gap-4">
          <div className="text-white text-center text-c9 lg:text-H1 font-extrabold tracking-wide">
            Unlimited movies, TV shows, and more
          </div>
          <div className="text-white text-center lg:text-normal text-xl">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="text-white text-center lg:text-normal text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="grid w-full  smd:grid-cols-3 smd:w-px570 smd:h-14 h-28 gap-2 mt-2 ">
            <div className="h-full smd:col-span-2 rounded-md shadow-md flex items-center bord ">
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
              className=" px-5 smd:px-5 w-fit h-full flex items-center justify-center rounded-md text-white text-normal"
              style={{ backgroundColor: "#E50914" }}
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
