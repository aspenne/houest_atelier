"use client";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}
