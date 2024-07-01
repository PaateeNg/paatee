import PVCard from "@/components/PVCard/PVCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import planner1 from '../../../../public/assets/img/planner1.png'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useRef, useState } from "react";
import "swiper/css";
import Image from "next/image";
import PVCardMobile from "@/components/PVCard/PVCardMobile";

export default function PlannerCards() {
  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("hovered");
    }
  };
  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("hovered");
    }
  };
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };
  const handleScrollRight = () => {
    if (containerRef.current) {
      const newScrollLeft = scrollLeft + 100;
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  const handleScrollLeft = () => {
    if (containerRef.current) {
      const newScrollLeft = scrollLeft - 100;
      containerRef.current.scrollTo({
        left: newScrollLeft < 0 ? 0 : newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  interface PlannerCardDataProps {
    cat1?: string;
    cat2?: string;
    cat3?: string;
    cat4?: string;
  }
  const PlannerCardData: PlannerCardDataProps = {
    cat1: "Weddings",
    cat2: "Social Gatherings",
    cat3: "Corporate",
    cat4: "Birthdays"
  };

  const arrItems = [
    PlannerCardData,
    PlannerCardData,
    PlannerCardData,
    PlannerCardData
  ];

  return (
    <div className="px-2 md:px-[51px] my-[80px]">
      <div className="text-[24px] font-bold mb-2 px-4">
        <span>Our Top Planners</span>
      </div>
      <div className="">
        <div className="flex max-w-full pt-[8px] pb-[16px] gap-[8px] overflow-x-scroll whitespace-nowrap  lg:hidden">
          {arrItems.map(data => {
              return (
                <div key={data.cat1} className="h-[250px] max-w-[167px] w-full rounded-[8px] p-[8px]">
                  <PVCardMobile
                    cat1={data.cat1}
                    cat2={data.cat2}
                    cat3={data.cat3}
                    cat4={data.cat4}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <section className="hover-container hide_md">
        <div className="relative flex items-center">
          <button
            className="absolute z-50 w-[54px] arrow-slider left h-[50px] bg-[#fff] shadow-lg rounded-[100px] flex justify-center items-center  text-[25px] "
            onClick={handleScrollLeft}
          >
            <AiOutlineArrowLeft />
          </button>
          <div
            className="flex max-w-[1192px] gap-[20px] w-full overflow-x-auto scrollbar-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
            ref={containerRef}
          >
            {arrItems.map(data => {
              return (
                <div key={data.cat1} className="flex mb-[px]">
                  <PVCard
                    cat1={data.cat1}
                    cat2={data.cat2}
                    cat3={data.cat3}
                    cat4={data.cat4}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="absolute z-50 w-[54px] arrow-slider right-10 h-[50px] bg-[#fff] shadow-lg rounded-[100px] flex justify-center items-center text-[25px]"
            onClick={handleScrollRight}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

// export default function PVCards() {
//   interface PlannerCardDataProps {
//     cat1?: string;
//     cat2?: string;
//     cat3?: string;
//     cat4?: string;
//   }
//   const PlannerCardData: PlannerCardDataProps = {
//     cat1: "Weddings",
//     cat2: "Social Gatherings",
//     cat3: "Corporate",
//     cat4: "Birthdays"
//   };
//   return (
//     <div className="px-[51px] my-[80px]">
//       <div className="text-[24px] font-bold mb-2 px-4">
//         <span>Our Top Planners</span>
//       </div>
//       <div />
//       <Swiper spaceBetween={200} slidesPerView={3}>
//         <SwiperSlide>
//           <PVCard
//             cat1={PlannerCardData.cat1}
//             cat2={PlannerCardData.cat2}
//             cat3={PlannerCardData.cat3}
//             cat4={PlannerCardData.cat4}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PVCard
//             cat1={PlannerCardData.cat1}
//             cat2={PlannerCardData.cat2}
//             cat3={PlannerCardData.cat3}
//             cat4={PlannerCardData.cat4}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PVCard
//             cat1={PlannerCardData.cat1}
//             cat2={PlannerCardData.cat2}
//             cat3={PlannerCardData.cat3}
//             cat4={PlannerCardData.cat4}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PVCard
//             cat1={PlannerCardData.cat1}
//             cat2={PlannerCardData.cat2}
//             cat3={PlannerCardData.cat3}
//             cat4={PlannerCardData.cat4}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PVCard
//             cat1={PlannerCardData.cat1}
//             cat2={PlannerCardData.cat2}
//             cat3={PlannerCardData.cat3}
//             cat4={PlannerCardData.cat4}
//           />
//         </SwiperSlide>
//         <SwiperSlide />
//       </Swiper>
//       <div className="w-full flex justify-center">
//         <button className="h-[44px] w-[148px] rounded-full border border-red-400 text-red-400 font-bold p-3 mt-5 mb-5 ml-5">
//           See all Planners
//         </button>
//       </div>
//     </div>
//   );
// }
