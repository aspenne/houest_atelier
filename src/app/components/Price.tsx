import SAV from "@/app/assets/depannageInformatiqueNantesSav.png";
import Cta from "@/app/components/CTA";
import Image from "next/image";

const Price = () => {
  return (
    <div
      className="w-full py-14 px-7 flex flex-col justify-between items-center gap-8 text-secondary bg-white sm:px-16 sm:py-28"
      id="prices"
    >
      <h2> Mes tarifs</h2>
      <div className="flex flex-row justify-between items-center gap-3 mb-3">
        <Image
          className="w-auto h-auto"
          src={SAV.src}
          alt="SAV"
          width={100}
          height={100}
        />
        <p className="text-primary font-medium sm:font-bold text-lg sm:text-2xl sm:text-center m-">
          {" "}
          Grâce au Service à la personne, <br></br>
          les prestations à domiciles donnent droit à -50% de la facture !
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Intervention Part  */}
        <div className="flex flex-col gap-8 w-full sm:w-[47.5%]">
          <h4> Intervention à domicile </h4>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between min-w-[315px]">
              <div>
                <p> Intervention de 1h </p>
                <p> Par tranche de 15 min </p>
              </div>
              <div className="flex flex-row gap-3">
                <div>
                  <p className="text-end"> 70 €</p>
                  <p className="text-end"> 17,5 €</p>
                </div>
                <div className="w-0.5 bg-black" />
                <div>
                  <p className="text-primary text-end"> 35€*</p>
                  <p className="text-primary text-end"> 8,75€*</p>
                </div>
              </div>
            </div>
          </div>

          <h4> Intervention à distance </h4>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between min-w-[315px]">
              <div>
                <p> Intervention de 1h </p>
                <p> Par tranche de 30 min </p>
              </div>
              <div>
                <p className="text-end"> 35 €</p>
                <p className="text-end"> 17,5 €</p>
              </div>
            </div>
          </div>

          <p>
            {" "}
            Pour toute annulation, merci de nous prévenir au moins 24 heures à
            l&apos;avance. Passé ce délai, les frais de déplacement
            pourront-être facturés.{" "}
          </p>
        </div>

        {/* Intervention Travel expenses  */}
        <div className="flex flex-col gap-8 w-full sm:w-[47.5%] mt-5 md:mt-0">
          <h4> Frais de déplacement </h4>
          <div className="flex flex-row min-w-[315px]">
            <div className="flex flex-col gap-3 w-full">
              <p className="text-primary font-semibold"> Petite couronne </p>
              <p> Rezé / Bouguenais </p>
              <p className="text-primary font-semibold"> Nantes </p>
              <p> Nantes Centre / Sud </p>
              <p className="text-primary font-semibold"> Couronne Nord </p>
              <p> Nantes Nord </p>
            </div>

            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-12 justify-end">
                <p className="text-end"> 5€</p>
                <p className="text-end"> 10€</p>
                <p className="text-end"> 15€</p>
              </div>
              <div className="w-0.5 bg-black" />
              <div className="flex flex-col gap-12 justify-end">
                <p className="text-primary text-end"> 2,5€*</p>
                <p className="text-primary text-end"> 5€*</p>
                <p className="text-primary text-end"> 7,5€*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-primary">
          {" "}
          *tarif après déduction du crédit d’impôts du “Service à la personne”
        </p>
        <p>
          {" "}
          Nous acceptions les paiements par chèque, carte bancaire ou espèces.{" "}
        </p>
        <p className="font-semibold text-primary">
          Veuillez noter que la remise ne s&apos;applique pas aux services à la
          personne payés en espèces.
        </p>
      </div>
      <Cta />
    </div>
  );
};

export default Price;
