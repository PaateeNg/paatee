import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import NavBar from "@/components/NavBar/DesktopNavBar";
import HomeMain from "@/components/HomeMain";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <HomeMain/>
      <Footer />
    </div>
  );
}
