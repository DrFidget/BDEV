import img from "../../assets/internalimgs/strange.jpg";

const bgimage = {
  backgroundImage: `url(${img})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

export const Item2 = () => {
  return (
    <div
      className="bg-black text-white flex justify-center"
      style={{ height: "700px" }}
    >
      <div className="w-11/12 xl:w-3/4 flex flex-col smd:flex-row gap-0 justify-center items-center">
        <div className="w-full" style={bgimage}></div>
        <div className=" text-center smd:text-left w-full px-2 flex flex-col h-full justify-center">
          <span className="text-white text-c9 lg:text-H1 font-extrabold tracking-wide ">
            Download your shows to watch offline
          </span>{" "}
          <br />
          <span className="text-white  lg:text-normal text-xl">
            Save your favorites easily and always have something to watch.
          </span>
        </div>
      </div>
    </div>
  );
};
