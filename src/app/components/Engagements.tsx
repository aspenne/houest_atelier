import lightbulbOnSolid from "@/app/assets/lightbulbOnSolid.svg";
import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Cta from "./CTA";

const Engagement = () => {
  return (
    <div
      className="w-full py-16 px-28 flex flex-col justify-between items-center gap-8 text-secondary bg-secondaryLight"
      id="engagments"
    >
      <div className="flex flex-row justify-between">
        <div className="w-[47.5%]">
          <h4> Nos engagements </h4>
          <h2> Pourquoi choisir nos services ? </h2>
          <div className="flex flex-col gap-4">
            <div></div>
            <div className="flex flex-row gap-2">
              <Icon
                path={mdiCheckCircleOutline}
                title="Check Outlined"
                size={1}
                color="#E98123"
              />
              <p>Informaticiens PRO</p>
            </div>
            <div className="flex flex-row gap-2">
              <Icon
                path={mdiCheckCircleOutline}
                title="Check Outlined"
                size={1}
                color="#E98123"
              />
              <p>Matériel & outils adaptés</p>
            </div>
            <div className="flex flex-row gap-2">
              <Icon
                path={mdiCheckCircleOutline}
                title="Check Outlined"
                size={1}
                color="#E98123"
              />
              <p>Efficacité et fiabilité</p>
            </div>
            <p>
              Nous apportons une attention particulière à la qualité de prise en
              charge de chacun de nos clients.
            </p>
          </div>
        </div>

        <div className="w-[47.5%]">
          <div className="flex flex-row gap-3 bg-primary rounded-2xl px-14 py-8 text-white items-start">
            <Image
              src={lightbulbOnSolid.src}
              alt="lightbulb image"
              width={25}
              height={20}
            ></Image>
            <div className="flex flex-col gap-3">
              <h3>50% du coût total déductible de vos impôts</h3>
              <p className="text-white">
                Vous pouvez bénéficier d’une réduction ou d’un crédit d’impôt de
                50% sur le service à domicile que vous recevez dans le cadre des
                services à la personne
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-14 py-8">
            <h3>Service de qualité</h3>
            <p>
              Nous intervenons dès que possible pour résoudre votre
              problématique. Pas de déplacement inutile, pas d&apos;intervention
              sans issue.
            </p>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Engagement;
