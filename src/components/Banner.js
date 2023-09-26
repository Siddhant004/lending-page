import React from "react";
import lftimg from "../images/2.avif";

function Banner() {
  return (
    <div>
      <main>
        <section className="banner-con mt-[-48px] z-1">
          <div className="wrap-1 flex justify-between w-full">
            <div className="con w-6/12 pt-[5rem]">
              <p className="text-6xl">
                <span className="text-[#000] font-bold">Strategic </span>Design
                and <span className="text-[#000] font-bold">Technology</span>{" "}
                Agency
              </p>
              <p className="text-[22px] pt-[3rem]">
                “Everyone wants to live on top of the mountain, but all the
                happiness and growth occurs while you are climbing it.”– Andy
                Rooney, journalist
              </p>
              <button className="  mt-[60px] bg-[#31de79]  text-white font-bold py-4 px-10 rounded-full">
                get In Touch
              </button>
            </div>
            <div className="side-img w-6/12 ">
              <img className="h-[95vh] w-full object-cover" src={lftimg} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Banner;
