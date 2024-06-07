"use client";

export default function PrimaryBtn({ title = "Click", center = false }) {
	return (
		<div
			className={`flex w-full ${
				center ? "justify-center align-middle mt-8" : ""
			} `}
		>
			<span className="flex justify-center items-center w-[184px] h-[48px] rounded-[24px] hover:bg-red-400 hover:text-red-800 font-bold bg-[#F63D68] text-white">
				{title}
			</span>
		</div>
	);
}
