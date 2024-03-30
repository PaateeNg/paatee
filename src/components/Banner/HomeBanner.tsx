"use client";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative object-contain w-full h-[400px]">
      <Image
        src="/assets/img/homebanner.jpeg"
        alt=""
        height={555}
        width={1440}
        className="absolute w-full object-cover md:max-h-[480px] lg:max-h-[555px] -z-20"
      />
      <div className="absolute w-full md:h-[480px] lg:h-[555px] -z-10 bg-[rgba(58,58,58,0.6)]">

      </div>
      <div className="md:flex flex-col flex-grow justify-center text-center h-full w-ful">
        <span className="block font-{500} text-[56px] text-white">
          Let's get the party started
        </span>
        <span className="block font-{500} text-[24px] text-white">
          Venues, Vendors and planners all in one place
        </span>
        <div className="flex w-full justify-center align-middle mt-8">
          <span className="flex justify-center items-center w-[184px] h-[48px] rounded-[24px] bg-[#F63D68] text-white">Get Started</span>
        </div>
      </div>
    </div>
  );
}
