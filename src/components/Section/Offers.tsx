

export default function Offer() {
    return (
        <div className="w-full p-[48px] ">
            <div className="w-full flex flex-col justify-center align-middle items-center">
                <span className="text-[34px] font-[700]" style={{backgroundImage: "linear-gradient(to right, #F63D68, #90243D)", backgroundSize: "100%", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>Our Offers for you</span>
                <span className="text-[18px] text-[#667085] inline-block my-5">Explore a World of Exclusive Deals and Tailored Promotions: Our Offers Await You</span>
            </div>

            <div className="w-full flex justify-between gap-5">
                <div className="flex flex-col">
                    <img src="/assets/img/delivery.png" width={64} height={64} alt="Free and Fast Delivery from Paatee"/>
                    <span className="font-bold text-[20px]">Free and Fast Delivery
                    </span>
                    <span className="text-[#667085] bg-black">Seamless Convenience: Swift, Free Delivery to Your Door!</span>

                </div>
                <div>
                    B
                </div>
                <div>
                    C
                </div>
            </div>
        </div>
    )
}