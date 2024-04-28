"use client";

import HomeBanner from "../../Banner/HomeBanner";
import CategoryCards from "./CategoryCards";
import PlannerCards from "./PlannerCards";
import Products from "./Products";

import Testimonials from "@/components/Testimonials/Testimonials";


export default function HomePage() {
	return (
	<>
	<HomeBanner/>
	<div className="2xl:flex 2xl:flex-col 2xl:items-center">
	<Products/>
	<CategoryCards/>
	<PlannerCards/>
	<Testimonials/>
	</div>
	</>
	)
}
