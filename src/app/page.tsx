import Banner from "@/app/components/Banner";
import Comfort from "@/app/components/Comfort";
import Engagements from "@/app/components/Engagements";
import Footer from "@/app/components/Footer";
import Intervention from "@/app/components/Intervention";
import NavBar from "@/app/components/NavBar";
import Price from "@/app/components/Price";
import Skills from "@/app/components/Skills";
import favicon from "@/app/favicon.ico";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houest Atelier",
  description:
    "Auto-entrepreneur en dépannage informatique, je propose des services rapides et fiables pour résoudre tous vos problèmes informatiques. Réservez votre rendez-vous en ligne et bénéficiez d'un support personnalisé, adapté à vos besoins. Faites confiance à un expert indépendant pour un service sur mesure aux alentours de Nantes.",
  icons: favicon.src,
  keywords: [
    "dépannage informatique",
    "Nantes",
    "réparation",
    "service à domicile",
    "conseils techniques",
    "service rapide",
    "service fiable",
    "service adapté",
    "service sur mesure",
    "service personnalisé",
    "expert indépendant",
    "SAV",
  ],
  twitter: {
    card: "summary_large_image",
    site: "houest-atelier.fr",
    title: "Houest Atelier",
    description: "Auto-entrepreneur en dépannage informatique",
    images:
      "https://opengraph.b-cdn.net/production/images/b98e7b14-7fed-450b-95f6-7a9a81f550e2.png?token=ssZQ88ko6P3gaXmhBwcEI0-kyVqL7TBT2sVWV-s81G0&height=611&width=1200&expires=33260751405",
  },
  openGraph: {
    title: "Houest Atelier",
    description:
      "Auto-entrepreneur en dépannage informatique, je propose des services rapides et fiables pour résoudre tous vos problèmes informatiques. Réservez votre rendez-vous en ligne et bénéficiez d'un support personnalisé, adapté à vos besoins. Faites confiance à un expert indépendant pour un service sur mesure aux alentours de Nantes.",
    images:
      "https://opengraph.b-cdn.net/production/images/b98e7b14-7fed-450b-95f6-7a9a81f550e2.png?token=ssZQ88ko6P3gaXmhBwcEI0-kyVqL7TBT2sVWV-s81G0&height=611&width=1200&expires=33260751405",
    url: "https://houest-atelier.fr",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <NavBar />
      <Banner />
      <Skills />
      <Price />
      <Engagements />
      <Intervention />
      <Comfort />
      <Footer />
    </div>
  );
}
