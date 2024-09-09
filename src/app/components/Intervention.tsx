import CB from "@/app/assets/VectorCB.svg";
import Running from "@/app/assets/VectorRunning.svg";
import SAV from "@/app/assets/VectorSAV.svg";
import Signing from "@/app/assets/VectorSining.svg";
import Cta from "@/app/components/CTA";
import Image from "next/image";

const Intervention = () => {
  return (
    <div
      className="w-full  py-7 px-7 flex flex-col justify-between gap-8 text-secondary bg-white sm:px-16 sm:py-28"
      id="intervention"
    >
      <div className="flex flex-col gap-8 py-7 sm:py-16 px-8 justify-between items-center bg-secondaryLight rounded-[32px]">
        <h2 className="text-center"> Les étapes pour une intervention </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-3">
          <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-3/12 text-center items-center">
            <Image src={Signing} alt="signing image" height={50}></Image>
            <p className="text-primary font-semibold">
              1 - Prise de rendez-vous
            </p>
            <p>
              {" "}
              Fixer un rendez-vous grâce à notre plateforme en ligne ou par
              téléphone au 07 71 11 81 76
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-3/12 text-center items-center">
            <Image src={Running} alt="running image" height={50}></Image>
            <p className="text-primary font-semibold"> 2 - Intervention</p>
            <p>
              Nous intervenons à votre domicile ou à distance, sur le créneau
              que vous avez sélectionné
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-3/12 text-center items-center">
            <Image src={CB} alt=" credit card image" height={50}></Image>
            <p className="text-primary font-semibold"> 3 - Paiement</p>
            <p>
              {" "}
              En fin de RDV physique, payé par chèque, espèces ou carte bancaire
              et par virement pour les RDV à distance
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-3/12 text-center items-center">
            <Image src={SAV} alt=" SAV image" height={50}></Image>
            <p className="text-primary font-semibold"> 4 - Suivi & SAV</p>
            <p>
              En cas de besoin, nous fournissons une assistance rapide pour
              compléter notre intervention si nécessaire.
            </p>
          </div>
        </div>
        <Cta />
      </div>
    </div>
  );
};

export default Intervention;
