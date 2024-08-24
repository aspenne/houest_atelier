import BannerDefault from "@/app/assets/BannerBackLegal.png";
import { StaticImageData } from "next/image";
import React from "react";

type BannerLegalProps = {
  title: string;
  image: StaticImageData;
};

const BannerLegal: React.FC<BannerLegalProps> = ({
  title,
  image = BannerDefault,
}) => {
  return (
    <div
      className="w-full flex items-center justify-center h-[650px] text-white"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundColor: "lightgray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="banner"
    >
      <div className="flex flex-col gap-8 w-10/12">
        <h4 className="text-start text-white"> Houest atelier</h4>
        <h1> {title} </h1>
      </div>
    </div>
  );
};

export default BannerLegal;
