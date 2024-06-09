"use client";
import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/DesktopNavBar";
import { FaArrowRightLong } from "react-icons/fa6";

const VendorStart = () => {
	return (
		<>
			<NavBar />
			<div className="bg-gray-100">
				<span className="flex item-center relative top-4 justify-center -mb-[3rem] text-[#F63D68]  text-xl font-bold mt-[2rem]">
					Get started as a User
				</span>
				<div className="flex flex-row-reverse m-[104px]    text-md gap-[80px] ">
					{/* Right */}
					<div className="flex-2 flex flex-col max-w-[527px] h-[448px]">
						<span>
							Ready to explore a world of endless possibilities?
							Join our community as a customer and unlock access
							to a wide range of products and services tailored to
							your needs. Whether you&lsquo;re shopping for
							essentials or seeking something special, we&lsquo;ve
							got you covered.
						</span>
						<span className="mt-[50px] text-xl text-gray-700 font-bold">How It Works:</span>
						<div className="ml-[20px] flex flex-col gap-[20px]">
							<span>
								a. Sign Up: Create your customer account in
								minutes and start exploring our vast
								marketplace.
							</span>
							<span>
								b. Browse and Shop: Browse through our extensive
								catalog and add your favorite items to your
								shopping cart with just a few clicks.
							</span>
							<span>
								c. Checkout: Easily complete your purchase using
								our secure payment gateway, and track your order
								every step of the way.
							</span>
							<span>
								d. Enjoy: Sit back, relax, and enjoy your new purchases as they&lsquo;re delivered right to your doorstep.
							</span>
						</div>
					</div>
					{/* Left */}
					<div className="flex-1  flex flex-col max-w-[536px]  bg-white rounded-xl p-[32px] text-sm shadow-xl">
						<span className="bg-[#FEF0C7] p-[3px] h-[40px] text-lg  rounded-full text-center">
							Please share some personal information with us
						</span>
						<div className="flex flex-col">
							<span className="mt-[20px] font-bold">
								First name
							</span>
							<input
								type="text"
								placeholder="Enter first name"
								className="rounded-xl bg-white border border-gray-300"
							/>
							<span className="mt-[20px] font-bold">
								Last name
							</span>
							<input
								type="text"
								placeholder="Enter last name"
								className="rounded-xl bg-white border border-gray-300"
							/>
							<span className="mt-[20px] font-bold">
								Email address
							</span>
							<input
								type="text"
								placeholder="Enter email address"
								className="rounded-xl bg-white border border-gray-300"
							/>
							<span className="mt-[20px] font-bold">
								Phone number
							</span>
							<input
								type="text"
								placeholder="Enter phone"
								className="rounded-xl bg-white border border-gray-300"
							/>
							<button className=" flex items-center justify-center text-white text-lg mt-[40px] w-[229px] py-3 bg-[#F63D68] rounded-full">
								Next{" "}
								<FaArrowRightLong className="relative left-3" />
							</button>
							<hr className="bg-[#F63D68] w-[40px] h-[6px] rounded-full relative left-[50%] bottom-7" />
							<hr className="bg-gray-400 w-[10px] h-[6px] rounded-full relative left-[60%] bottom-8" />
							<hr className="bg-gray-400 w-[10px] h-[6px] rounded-full relative left-[65%] bottom-9" />
						</div>
						<hr />
					</div>
				</div>
			</div>
			<div className="bg-[#FFF1F3] flex p-[32px] justify-between ">
				<div className="w-[620px] h-[116px] flex flex-col">
					<span className="text-[#F63D68] font-bold">
					Want to sell stuff to people?
					</span>
					<span>
					It&lsquo;s easy with us! Whether you&lsquo;re an established business or a budding entrepreneur, our platform provides the perfect space to showcase your products and reach eager customers. Join our community of sellers today and start turning your items into cash!
					</span>
				</div>
				<div>
					<span className="w-[233px] h-[48px] border border-[#F63D68] rounded-full  text-sm flex items-center justify-center ">
						Start as a vendor instead
					</span>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default VendorStart;
