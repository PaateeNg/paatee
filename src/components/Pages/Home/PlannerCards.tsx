import PlannerCard from "@/components/PlannerCard/PlannerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function PlannerCards() {
  return (
    <div className="px-[51px] my-[100px]">
      <div className="text-[24px] font-bold mb-2">
        <span>Our Top Planners</span>
      </div>
      <div>
        
      </div>
      <Swiper
        spaceBetween={200}
        slidesPerView={3}
      >
        <SwiperSlide>
          <PlannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <PlannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <PlannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <PlannerCard />
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center">
        <button className="h-[44px] w-[148px] rounded-full border border-red-400 text-red-400 font-bold p-3 mt-5 mb-5 ml-5">
          See all Planners
        </button>
      </div>
    </div>
  );
}
