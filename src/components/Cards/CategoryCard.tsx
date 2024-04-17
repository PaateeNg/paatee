import Image from "next/image";

export default function CategoryCard() {
  return (
    <div className="relative flex flex-col align-middle md:max-w-[380px] h-[370px]">
      <Image src="/assets/img/category1.png" fill alt="" className="" />
      <div className="absolute flex flex-col w-full h-full">
        <div className="flex flex-grow items-center justify-center">
          <span className="text-white text-[32px] font-[700]">Party Item</span>
        </div>
        <div className="pb-5 flex justify-center">
          <span className="w-[125px] h-[44px] bg-white text-black inline-flex justify-center items-center rounded-full hover:bg-slate-400 focus:bg-slate-400 cursor-pointer">
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
}
