import React from 'react'
import planner1 from '../../../public/assets/img/planner1.png'
import Image, { StaticImageData } from 'next/image'

interface PVCardProps {
    imgSrc?: StaticImageData,
    link?: string,
    cat1?: string,
    cat2?: string,
    cat3?: string,
    cat4?: string,
}

const PVCardMobile: React.FC<PVCardProps> = ({ imgSrc = planner1, link = "", cat1, cat2, cat3, cat4 }) => {
    return (
        <div className="h-[250px] max-w-[167px] w-full rounded-[8px] bg-white p-[8px] ">
            <div className="relative rounded-[4px] w-[120px]  h-[129px] overflow-hidden w-full">
                <Image
                    className="  h-[129px] w-[151px] object-cover"
                    src={planner1}
                    alt=""
                />
            </div>
            <div className="flex items-center justify-between pt-[10px] w-full">
                <p className="font-[700] text-[14px] leading-[150%] text-[#555]">
                    Elegant Events by...
                </p>
            </div>
            <p className=" text-[12.122px] font-[400] text-[#808080] leading-[142%]">
                5k reviews
            </p>
            <p className=" text-[12.122px] font-[400] text-[#808080]">
                Free to be booked
            </p>
            <div className="flex gap-[2.847px] pt-[7px]">
                <button className="w-[25.55484px] h-[8.27742px] bg-[#555] pt-[1.14px] pb-[1.14] pl-[2.28px] pr-[2.28px] rounded-[2.277px] text-[#D4D4D4] text-[4.555px] font-[400] leading-[142%]">
                    {(cat1 != undefined) && cat1}
                </button>
                <button className="w-[25.55484px] h-[8.27742px] bg-[#555] pt-[1.14px] pb-[1.14] pl-[2.28px] pr-[2.28px] rounded-[2.277px] text-[#D4D4D4] text-[4.555px] font-[400] leading-[142%]">
                    {(cat2 != undefined) && cat2}
                </button>
                <button className="w-[40.55484px] h-[8.27742px] bg-[#555] pt-[1.14px] pb-[1.14] pl-[2.28px] pr-[2.28px] rounded-[2.277px] text-[#D4D4D4] text-[4.555px] font-[400] leading-[142%]">
                    {(cat3 != undefined) && cat3}
                </button>
                <button className="w-[25.55484px] h-[8.27742px] bg-[#555] pt-[1.14px] pb-[1.14] pl-[2.28px] pr-[2.28px] rounded-[2.277px] text-[#D4D4D4] text-[4.555px] font-[400] leading-[142%]">
                    {(cat4 != undefined) && cat4}
                </button>
            </div>
        </div>

    )
}

export default PVCardMobile