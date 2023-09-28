// import React from 'react'
import { Home } from "./Home/Home";
import { Item1 } from "./items/Item1";
import { Item2 } from "./items/Item2";
import { Item3 } from "./items/Item3";
import { FAQ } from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <div
      className=" w-auto min-h-screen flex flex-col gap-2"
      style={{ backgroundColor: "#232323" }}
    >
      <Home />
      <Item1 />
      <Item2 />
      <Item3 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
