"use client";

import loader from "@/app/assets/tube-spinner.svg";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";

const LoadingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full pb-8 px-28 h-[50vh]">
        <Image src={loader} alt="404" width={200} />
        <h2> Chargement... </h2>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LoadingPage;
