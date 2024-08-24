import WhiteLogo from "@/app/assets/WhiteLogo.svg";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full py-8 px-28 gap-8 flex flex-col justify-between items-center bg-secondary text-white">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-4">
          <Image className="mb-2" src={WhiteLogo} alt="white Logo"></Image>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-white"> 06 61 46 80 92 </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:contact@houestatelier.fr">
              {" "}
              contact@houestatelier.fr{" "}
            </a>
          </div>
        </div>
        <div>
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
        <div>
          <p className="font-bold text-white"> Politiques </p>
          <nav>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <a href="/legalNotices">Mentions légales</a>
              </li>
              <li>
                <a href="/CGU">Conditions générales </a>
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
