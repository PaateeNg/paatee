import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import NavBar from "@/components/NavBar/DesktopNavBar";
import HomeMain from "@/components/HomeMain";
import Testimonials from "@/components/Testimonials/Testimonials";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProductCard/>
      <HomeMain/>
      <Testimonials/>
      <Footer />
    </div>
  );
}
