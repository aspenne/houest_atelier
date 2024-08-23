import BannerBack from "@/app/assets/bannerBack.png";
import Cta from "@/app/components/CTA";
import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

const Banner = () => {
  return (
    <div
      className="w-full flex items-center justify-center h-[650px] text-white"
      style={{
        backgroundImage: `url(${BannerBack.src})`,
        backgroundColor: "lightgray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="banner"
    >
      <div className="flex flex-col gap-8 w-10/12">
        <h4 className="text-start text-white"> Houest atelier</h4>
        <h1> Services informatiques à domicile </h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-2">
            <Icon
              path={mdiCheckCircleOutline}
              title="Check Outlined"
              size={1}
              color="white"
            />
            <p className="text-white">Déplacement rapide</p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon
              path={mdiCheckCircleOutline}
              title="Check Outlined"
              size={1}
              color="white"
            />
            <p className="text-white"> Informaticiens PRO </p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon
              path={mdiCheckCircleOutline}
              title="Check Outlined"
              size={1}
              color="white"
            />
            <p className="text-white"> SAV </p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon
              path={mdiCheckCircleOutline}
              title="Check Outlined"
              size={1}
              color="white"
            />
            <p className="text-white"> Garanties </p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon
              path={mdiCheckCircleOutline}
              title="Check Outlined"
              size={1}
              color="white"
            />
            <p className="text-white"> Éligible crédit d&apos;impôt </p>
          </div>
        </div>
        <Cta color="primary" content="Planifiez mon rdv" />
      </div>
    </div>
  );
};

export default Banner;
