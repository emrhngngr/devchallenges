import React from "react";
import heroImage from "./resources/hero-image-business-card.png";
import whiteOverlay from "./resources/white-overlay.svg";
import avatarImage from "./resources/avatar-image-business-card.png";

export default function App() {
  return (
    <>
      <div className="container ">
        <div className="flex flex-col mt-32 lg:mt-32">
          <div className="w-[70%] md:w-[50%] lg:w-[35%] mx-auto bg-white rounded-xl">
            <div className="hero-section relative">
              <img
                className="w-full rounded-xl"
                src={heroImage}
                alt="Avatar"
              />
              <img
                className="absolute bottom-[-6px] w-full"
                src={whiteOverlay}
                alt="Overlay"
              />
            </div>
            <div className="content mx-auto justify-start">
              <h3 className="mx-8 font-semibold text-[20px] lg:text-[24px] text-[#111729]">
                Perfect solution for small <br /> business
              </h3>
              <h3 className="text-md my-6 mx-8 lg:font-semibold text-[#677489]">
                Small businesses need to generate leads to grow.
                <br /> You can use tools like Ringy.
              </h3>
            </div>
            <hr className="font-light" />
            <div className="avatar w-full grid grid-cols-6 m-6">
              <div className="col-span-2">
                <img className="w-1/3 rounded-full mx-auto border-4 border-[#e7ecf3]" src={avatarImage} alt="avatar" />
              </div>
              <div className="col-span-4 h-10">
                <h4 className="text-[#111729] font-bold sm:text-[16px]">Amy Burgess</h4>
                <h6 className="text-[#677489]  font-semibold text-[10px] sm:text-[14px]">Customer Manger, Solution Oy</h6>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
