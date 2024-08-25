"use client";

import Cta from "@/app/components/CTA";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    windowSize();
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  const windowSize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div
      className="w-full py-4 px-7 flex flex-col justify-between items-center sm:items-start gap-8 text-secondary bg-secondaryLight sm:flex-row sm:px-16 sm:py-28"
      id="services"
    >
      <div className="flex flex-col gap-6 w-full items-center sm:items-start sm:w-[47,5%] sm:gap-8 text-center sm:text-start">
        <h4> Mes Services </h4>
        <h2> Quels son mes compétences ? </h2>
        <p>
          {" "}
          Prenez rendez-vous dès maintenant, et voyons comment je peux vous
          aider.
        </p>
        {!isMobile && <Cta />}
      </div>
      <div className="flex flex-col gap-10 w-full sm:w-[47,5%] sm:gap-16">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold">
              {" "}
              Dépannage informatique{" "}
            </p>
            <p>
              {" "}
              Démarrage difficile, écran bleu, virus ?{" "}
              <span className="text-primary"> J’optimise votre système. </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold">
              {" "}
              Réparation informatique{" "}
            </p>
            <p>
              {" "}
              Démarrage difficile, écran bleu, virus ?{" "}
              <span className="text-primary"> J’optimise votre système. </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 ">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold">
              {" "}
              Réparation informatique{" "}
            </p>
            <p>
              {" "}
              Démarrage difficile, écran bleu, virus ?{" "}
              <span className="text-primary"> J’optimise votre système. </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold">
              {" "}
              Réparation informatique{" "}
            </p>
            <p>
              {" "}
              Démarrage difficile, écran bleu, virus ?{" "}
              <span className="text-primary"> J’optimise votre système. </span>
            </p>
          </div>
        </div>
      </div>
      {isMobile && <Cta />}
    </div>
  );
};

export default Skills;
