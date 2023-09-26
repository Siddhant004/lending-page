import React from "react";
import video from "../vedios/1.mp4";
import { Icon } from "@iconify/react";
const List = [
  {
    logo: "material-symbols:lab-research",
    title: "Reserach",
  },
  {
    icon: "fluent:data-area-20-filled",
    title: "Data Analysis",
  },
  {
    logo: "fluent:design-ideas-24-regular",
    title: "UI Design",
  },
  {
    logo: "streamline:shopping-catergories-sofa-decoration-furniture-interior-design-couch-sofa-decorate",
    title: "UX Design",
  },
  {
    logo: "arcticons:techcombank",
    title: "Technalogy",
  },
  {
    logo: "icon-park-solid:creative",
    title: "Creative",
  },
];
function BusinessStratigies() {
  return (
    <div>
      <section className="cont flex w-full pl-[70px] bg-[#f8f9fa]  pt-[15px]  ">
        <div className="fl cursor-pointer  ">
          {/* product 1 */}
          {List.map((card) => (
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className=" cont-card1 flex  items-center  gap-[60px] w-[20vw] p-[25px] border-[1px] border-[#000] rounded-[20px] my-[26px]  hover:animate-bounce "
            >
              <Icon icon={card.logo} />
              <span className="title text-[18px]  ">{card.title}</span>
            </div>
          ))}
        </div>
        <div className="lft-vedio w-[50vw] h-[60vh] pt-[50px] ml-[130px]  brightness-[0.9]">
          <video
            src={video}
            autoPlay="true"
            width="100%"
            height="100%"
            muted
            loop
          />
        </div>
      </section>
    </div>
  );
}

export default BusinessStratigies;
