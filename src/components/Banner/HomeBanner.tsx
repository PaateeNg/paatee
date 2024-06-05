"use client";
import Image from "next/image";
import PrimaryBtn from "../Buttons/PrimaryBtn";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> a25df2bb3ff37011ee441a5b7042703225abc75a

export default function HomeBanner() {
  return (
    <div className="relative object-contain w-full md:h-[480px] lg:h-[555px] overflow-hidden">
      <Image
        src="/assets/img/homebanner.jpeg"
        alt=""
        fill
        className="absolute w-auto object-cover -z-20"
      />
      <div className="absolute w-full md:h-[480px] lg:h-[555px] -z-10 bg-[rgba(58,58,58,0.6)]" />
      <div className="md:flex flex-col flex-grow justify-center text-center h-full w-ful">
        <span className="block font-{500} text-[56px] text-white">
<<<<<<< HEAD
          {"Let's get the party started"}
=======
          Let&lsquo; get the party started
>>>>>>> a25df2bb3ff37011ee441a5b7042703225abc75a
        </span>
        <span className="block font-{500} text-[24px] text-white">
          Venues, Vendors and planners all in one place
        </span>
<<<<<<< HEAD
        <PrimaryBtn center={true} title="Get Started" />
=======
        <Link href="/get-started" >

          <PrimaryBtn center={true} title="Get Started" />
        </Link>
          
        
>>>>>>> a25df2bb3ff37011ee441a5b7042703225abc75a
      </div>
    </div>
  );
}
