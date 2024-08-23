import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cta from "./CTA";

const Skills = () => {
  return (
    <div
      className="w-full py-16 px-28 flex flex-row justify-between items-start gap-8 text-black bg-secondaryLight"
      id="services"
    >
      <div className="flex flex-col gap-8 w-[47.5%]">
        <h4> Mes Services </h4>
        <h2> Quels son mes compétences ? </h2>
        <p>
          {" "}
          Prenez rendez-vous dès maintenant, et voyons comment je peux vous
          aider.
        </p>
        <Cta />
      </div>
      <div className="flex flex-col gap-16 w-[47.5%]">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Skills;
