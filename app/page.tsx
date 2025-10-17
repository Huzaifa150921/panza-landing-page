'use client'
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
import Contact from "@/app/components/contact/Contact";
import Footer from "@/app/components/footer/Footer";
import CopyRight from "@/app/components/copyright/CopyRight";
import { useRef } from "react";
export default function Home() {

  const sections = {

    HOME: useRef<HTMLDivElement | null>(null),
    FEATURES: useRef<HTMLDivElement | null>(null),
    ABOUT: useRef<HTMLDivElement | null>(null),
    WORK: useRef<HTMLDivElement | null>(null),
    SERVICES: useRef<HTMLDivElement | null>(null),
    NEWS: useRef<HTMLDivElement | null>(null),
    TESTMONIAL: useRef<HTMLDivElement | null>(null),
    TEAM: useRef<HTMLDivElement | null>(null),
    CONTACT: useRef<HTMLDivElement | null>(null),
  };

  return (
    <>
      <NavBar sections={sections} />
      <HomeCard />
      <Features ref={sections.FEATURES} />
      <About ref={sections.ABOUT} />
      <Work ref={sections.WORK} />
      <Services ref={sections.SERVICES} />
      <News ref={sections.NEWS} />
      <Pricing />
      <Testmonial ref={sections.TESTMONIAL} />
      <Team ref={sections.TEAM} />
      <Wordpress />
      <Contact ref={sections.CONTACT} />
      <Footer />
      <CopyRight />
    </>
  );
}
