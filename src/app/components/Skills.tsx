"use client";

import Cta from "@/app/components/CTA";
import {
  faBugSlash,
  faHouseLaptop,
  faLaptop,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
      className="w-full py-4 px-7 flex flex-col justify-between items-center sm:items-start gap-8 text-secondary bg-secondaryLight lg:flex-row sm:px-16 sm:py-28"
      id="services"
    >
      <div className="flex flex-col gap-6 w-full items-center sm:items-start sm:w-[47,5%] sm:gap-8 text-center sm:text-start">
        <h4> Nos services </h4>
        <h2> Quels sont nos compétences ? </h2>
        <p>
          Prenez rendez-vous dès maintenant, et voyons comment je nous pouvons
          vous aider
        </p>
        {!isMobile && <Cta />}
      </div>
      <div className="flex flex-col gap-10 w-full sm:w-[47,5%] sm:gap-16">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4 w-[45%] items-start text-start">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold"> Dépannage matériel </p>
            <p>
              Démarrage difficile, écran bleu, virus ?{" "}
              <Link
                href="https://tidycal.com/houest-atelier"
                className="text-primary underline cursor-pointer"
              >
                Réparons ça !{" "}
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[45%] items-start text-start">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon icon={faBugSlash} color="white" size={"2xl"} />
            </div>
            <p className="text-primary font-semibold ">
              {" "}
              Formation et Accompagnement :{" "}
            </p>
            <p>
              Des fichiers perdus ou supprimés, lenteur, Virus, Bug ?{" "}
              <Link
                href="https://tidycal.com/houest-atelier"
                className="text-primary underline cursor-pointer"
              >
                Nous avons la solution !
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 ">
          <div className="flex flex-col gap-4 w-[45%] items-start text-start">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon icon={faLaptop} color="white" size={"2xl"} />
            </div>
            <p className="text-primary font-semibold">
              Réparation informatique{" "}
            </p>
            <p>
              Initiation logiciel adaptée aux utilisateurs débutants et aide
              administrative informatique
              <Link
                href="https://tidycal.com/houest-atelier"
                className="text-primary underline cursor-pointer"
              >
                Laissez-nous vous aidez !{" "}
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[45%] items-start text-start">
            <div className="flex justify-center items-center bg-secondary w-14 h-14 p-2 rounded">
              <FontAwesomeIcon
                icon={faHouseLaptop}
                color="white"
                size={"2xl"}
              />
            </div>
            <p className="text-primary font-semibold">
              Accompagnement à distance :
            </p>
            <p>
              Assistance en direct via des outils de contrôle à distance pour
              répondre à vos questions et résoudre vos problèmes
              <Link
                href="https://tidycal.com/houest-atelier"
                className="text-primary underline cursor-pointer"
              >
                Planifiez une rencontre !
              </Link>
            </p>
          </div>
        </div>
      </div>
      {isMobile && <Cta />}
    </div>
  );
};

export default Skills;
