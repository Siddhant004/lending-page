import React from "react";
import img1 from "../images/spl.jpg";
const Market = [
  {
    heading: "Market Resarch",
    title: "even the all powerful pointing has no control about the blind",
  },
  {
    heading: "Financial Services",
    title: "even the all powerful pointing has no control about the blind",
  },
  {
    heading: "online marketing",
    title: "even the all powerful pointing has no control about the blind",
  },
  {
    heading: "24/7 Help and support",
    title: "even the all powerful pointing has no control about the blind",
  },
];
function MarketPage() {
  return (
    <div>
      <main>
        <section className="fly flex ">
          <div className="rgt-con h-[40vw] w-[50vw] pt-[50px]  ">
            <img src={img1} />
          </div>
          <div className="lft-con ml-[70px] overflow-x-hidden ">
            {Market.map((card) => (
              <div
                data-aos="slide-left"
                data-aos-once="true"
                className=" cont-card1 py-10 hover:animate-ping cursor-pointer"
              >
                <h6>{card.heading}</h6>
                <span className="title text-[18px]  ">{card.title}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MarketPage;
