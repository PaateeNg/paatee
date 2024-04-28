import Footer from "@/components/Footer";
import HomePage from "@/components/Pages/Home";
import NavBar from "@/components/NavBar/DesktopNavBar";
import HomeMain from "@/components/HomeMain";
import Testimonials from "@/components/Testimonials/Testimonials";
import Products from "@/components/Pages/Home/Products";
import PlannerCard from "@/components/PlannerCard/PlannerCard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
	  <Products/>
      <PlannerCard />
      <HomeMain />
      <Testimonials />
      <Footer />
    </div>
  );
}
