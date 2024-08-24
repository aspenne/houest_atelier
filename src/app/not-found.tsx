"use client";

import error404 from "@/app/assets/error404.svg";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import Cta from "./components/CTA";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-between w-full pb-8 px-28">
        <Image src={error404} alt="404" />
        <div className="flex flex-col gap-4 items-center">
          <h1> OOPS </h1>
          <p className="font-semibold"> On dirait que vous vous êtes perdus</p>
          <div>
            <Cta content="Retourner sur la page principale" link="/" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
