import CB from "@/app/assets/VectorCB.svg";
import Running from "@/app/assets/VectorRunning.svg";
import SAV from "@/app/assets/VectorSAV.svg";
import Signing from "@/app/assets/VectorSining.svg";
import Image from "next/image";
import Cta from "./CTA";

const Intervention = () => {
  return (
    <div
      className="w-full py-16 px-28 flex flex-col justify-between items-center gap-8 text-black"
      id="intervention"
    >
      <div className="flex flex-col gap-8 py-16 px-8 justify-between items-center bg-secondaryLight rounded-[32px]">
        <h2> Les étapes pour une intervention </h2>
        <div className="flex flex-row justify-between items-start gap-3">
          <div className="flex flex-col gap-6 w-3/12 text-center items-center">
            <Image src={Signing} alt="signing image"></Image>
            <p className="text-primary font-semibold">
              {" "}
              1 - Prise de rendez-vous
            </p>
            <p> Fixer un rendez-vous.</p>
          </div>
          <div className="flex flex-col gap-6 w-3/12 text-center items-center">
            <Image src={Running} alt="running image"></Image>
            <p className="text-primary font-semibold"> 2 - Intervention</p>
            <p>
              {" "}
              Nous intervenons à votre domicile sur le créneau que vous avez
              sélectionné.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-3/12 text-center items-center">
            <Image src={CB} alt=" credit card image"></Image>
            <p className="text-primary font-semibold"> 3 - Paiement</p>
            <p> En fin de RDV physique, par chèque ou par carte bancaire.</p>
          </div>
          <div className="flex flex-col gap-6 w-3/12 text-center items-center">
            <Image src={SAV} alt=" SAV image"></Image>
            <p className="text-primary font-semibold"> 4 - Suivi & SAV</p>
            <p>
              {" "}
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
