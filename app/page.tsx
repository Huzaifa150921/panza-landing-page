import NavBar from "@/app/components/header/navbar/NavBar";
import HomeCard from "@/app/components/home/homecardflex/HomeCardFlex";
import Features from "@/app/components/features/Features";
import About from "@/app/components/about/About";
import Work from "@/app/components/work/Work"
import Services from "@/app/components/ourservice/Services"
import News from "@/app/components/news/News";
import Pricing from "@/app/components/pricing/Pricing";
import Testmonial from "@/app/components/testmonial/Testmonial";
import Team from "@/app/components/team/Team";
import Wordpress from "@/app/components/wrodpress/wordpress";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/Footer";
import CopyRight from "@/app/components/copyright/CopyRight";
export default function Home() {
  return (
    <>
      <NavBar />
      <HomeCard />
      <Features />
      <About />
      <Work />
      <Services />
      <News />
      <Pricing />
      <Testmonial />
      <Team />
      <Wordpress />
      <Contact />
      <Footer />
      <CopyRight />
    </>
  );
}
