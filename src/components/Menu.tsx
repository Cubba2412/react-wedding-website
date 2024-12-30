import React from "react";
import config from "../config/index.json";
import PDFViewer from "./PDFViewer";

const Menu = () => {
  const { menu } = config;
  return (
    <div className={`py-12 bg-background`} id="thingsToDo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="lg:text-center" id="menu">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          {menu.title}
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {menu.subTitle}
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {menu.description}
        </p>
      </div>

      {/* <div className="py-12 bg-background flex justify-center items-center min-h-screen">
        <div className="relative w-full max-w-4xl p-4 bg-white rounded-lg shadow-2xl transform transition-all hover:scale-105 h-[calc(100vh-8rem)]">
          <PDFViewer />
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Menu;
