import WhiteLogo from "@/app/assets/WhiteLogo.svg";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full py-4 px-7 gap-8 flex flex-col justify-between items-center bg-secondary text-white sm:px-28 sm:py-8">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div className="flex flex-col gap-4">
          <Image className="mb-2" src={WhiteLogo} alt="white Logo"></Image>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faPhone} className="w-4 sm:w-6" />
            <p className="text-white"> 07 71 11 81 76 </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 sm:w-6" />
            <a href="mailto:contact@houestatelier.fr">
              {" "}
              contact@houest-atelier.fr
            </a>
          </div>
        </div>
        <div className="mt-7 sm:mt-0">
          <p className="font-bold text-white"> Plan du site</p>
          <nav>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#prices"> Mes tarifs</a>
              </li>
              <li>
                <a href="#engagments"> Mes engagements</a>
              </li>
              <li>
                <a href="#intervention">Les étapes pour une intervention</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-7 sm:mt-0">
          <p className="font-bold text-white"> Politiques </p>
          <nav>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <a href="/legalNotices">Mentions légales</a>
              </li>
              <li>
                <a href="/CGU">Conditions générales d&apos;utilisation</a>
              </li>
              <li>
                <a href="/CGV">Conditions générales de ventes</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-white h-0.5 w-full "></div>
      <p className="sub-p text-white">
        2024 - © Houest Atelier - Tous droits réservés.
      </p>
    </div>
  );
};

export default Footer;
