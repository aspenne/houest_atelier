import lightbulbOnSolid from "@/app/assets/lightbulb-on-solid.svg";
import Cta from "@/app/components/CTA";
import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

const Engagement = () => {
  return (
    <div
      className="w-full py-4 px-7 flex flex-col justify-between items-center :items-start gap-8 text-secondary text-start bg-secondaryLight sm:px-16 sm:py-28"
      id="engagments"
    >
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-[47.5%] flex flex-col gap-8">
          <h4> Nos engagements </h4>
          <h2> Pourquoi choisir nos services ? </h2>
          <div className="flex flex-col gap-4">
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
              <p>Matériel et outils adaptés</p>
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
          </div>
          <p>
            Nous apportons une attention particulière à la qualité de prise en
            charge de chacun de nos clients.
          </p>
        </div>

        <div className="w-full sm:w-[47.5%] mt-5 sm:mt-0">
          <div className="flex flex-row gap-3 bg-primary rounded-2xl px-4 sm:px-14 py-4 sm:py-8 text-white items-start">
            <div className="flex flex-col gap-3">
              <h3>50% du coût total déductible de vos impôts</h3>
              <p className="text-white">
                Vous pouvez bénéficier d’une réduction ou d’un crédit d’impôt de
                50% sur le service à domicile que vous recevez dans le cadre des
                services à la personne
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4 pt-8 sm:py-8  sm:px-8">
            <Image
              src={lightbulbOnSolid.src}
              alt="lightbulb image"
              width={25}
              height={20}
              color="#E98123"
            ></Image>
            <div className="flex flex-col gap-3">
              <h3>Service de qualité</h3>
              <p>
                Nous intervenons dès que possible pour résoudre votre
                problématique. Pas de déplacement inutile, pas
                d&apos;intervention sans issue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Engagement;
