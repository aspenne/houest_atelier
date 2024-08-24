"use client";

import BannerImage from "@/app/assets/BannerBackCGU.png";
import BannerLegal from "@/app/components/BannerLegal";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <NavBar />
      <BannerLegal
        title="Condition générale d'utilisation"
        image={BannerImage}
      />

      <div className="w-full py-16 px-28 flex flex-col justify-between gap-8 text-secondary bg-secondaryLight">
        <h2>Définitions</h2>
        Bienvenue sur le site houest atelier, propriété de Houeix Elvin EI. Le
        Site a pour vocation de servir de vitrine aux services de dépannage
        informatique offerts par l&apos;Entreprise, en mettant en avant notre
        expertise et en facilitant la prise de rendez-vous en ligne pour nos
        clients. Le Site permet aux utilisateurs de planifier une intervention
        de dépannage informatique en ligne, de manière simple et sécurisée, en
        utilisant leur compte Google. Ce processus a été conçu pour offrir une
        expérience utilisateur fluide, sans la nécessité de fournir des
        informations personnelles supplémentaires lors de la prise de
        rendez-vous. Nos services s&apos;adressent à un large public, comprenant
        tant les particuliers que les professionnels, confrontés à des
        dysfonctionnements ou des besoins d&apos;assistance sur leurs
        ordinateurs. Que vous ayez besoin d&apos;une réparation, d&apos;une
        optimisation ou de conseils techniques, notre objectif est de vous
        offrir un service rapide, fiable et adapté à vos besoins. L&apos;accès
        au Site est libre et ouvert à tous, sans condition préalable. Toutefois,
        l&apos;utilisation du Site, y compris la fonctionnalité de prise de
        rendez-vous, est régie par les présentes Conditions Générales
        d&apos;Utilisation (CGU), que nous vous invitons à lire attentivement.
        En accédant et en utilisant le Site, vous acceptez de vous conformer à
        ces conditions.
      </div>
      <Footer />
    </div>
  );
}
