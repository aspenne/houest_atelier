"use client";

import Banner from "@/app/components/Banner";
import Comfort from "@/app/components/Comfort";
import Engagements from "@/app/components/Engagements";
import Footer from "@/app/components/Footer";
import Intervention from "@/app/components/Intervention";
import NavBar from "@/app/components/NavBar";
import Price from "@/app/components/Price";
import Skills from "@/app/components/Skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center ">
      <NavBar />
      <Banner />
      <Skills />
      <Price />
      <Engagements />
      <Intervention />
      <Comfort />
      <Footer />
    </div>
  );
}
