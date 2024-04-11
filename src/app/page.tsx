import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import NavBar from "@/components/NavBar/DesktopNavBar";
import HomeMain from "@/components/HomeMain";
import Testimonials from "@/components/Testimonials/Testimonials";
import ProductCard from "@/components/ProductCard/ProductCard";
import PlannerCard from "@/components/PlannerCard/PlannerCard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProductCard/>
      <PlannerCard/>
      <HomeMain/>
      <Testimonials/>
      <Footer />
    </div>
  );
}
