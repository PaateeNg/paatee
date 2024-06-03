import PVCard from "@/components/PVCard/PVCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function VendorCards() {
  interface VendorCardDataProps {
    cat1?: string;
    cat2?: string;
    cat3?: string;
    cat4?: string;
  }
  
  const VendorCardData: VendorCardDataProps = {
    cat1: "Weddings",
    cat2: "Social Gatherings",
    cat3: "Corporate",
    cat4: "Birthdays"
  };

  return (
    <div className="px-[51px] my-[80px]">
      <div className="text-[24px] font-bold mb-2 px-4">
        <span>Our Top Vendors</span>
      </div>
      <div />
      <Swiper spaceBetween={200} slidesPerView={3}>
        <SwiperSlide>
          <PVCard 
          cat1={VendorCardData.cat1}
          cat2={VendorCardData.cat2}
          cat3={VendorCardData.cat3}
          cat4={VendorCardData.cat4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PVCard 
          cat1={VendorCardData.cat1}
          cat2={VendorCardData.cat2}
          cat3={VendorCardData.cat3}
          cat4={VendorCardData.cat4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PVCard 
          cat1={VendorCardData.cat1}
          cat2={VendorCardData.cat2}
          cat3={VendorCardData.cat3}
          cat4={VendorCardData.cat4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PVCard 
          cat1={VendorCardData.cat1}
          cat2={VendorCardData.cat2}
          cat3={VendorCardData.cat3}
          cat4={VendorCardData.cat4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PVCard 
          cat1={VendorCardData.cat1}
          cat2={VendorCardData.cat2}
          cat3={VendorCardData.cat3}
          cat4={VendorCardData.cat4}
          />
        </SwiperSlide>
        <SwiperSlide />
      </Swiper>
      <div className="w-full flex justify-center">
        <button className="h-[44px] w-[148px] rounded-full border border-red-400 text-red-400 font-bold p-3 mt-5 mb-5 ml-5">
          See all Planners
        </button>
      </div>
    </div>
  );
}
