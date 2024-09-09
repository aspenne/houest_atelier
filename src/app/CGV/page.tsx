"use client";

import BannerImage from "@/app/assets/BannerBackCGU.png";
import BannerLegal from "@/app/components/BannerLegal";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <NavBar />
      <BannerLegal title="Condition générale de vente" image={BannerImage} />

      <div className="w-full py-4 px-7 sm:py-16 sm:px-28 flex flex-col justify-between gap-8 font-secondary bg-secondaryLight">
        <div>
          <h3 className="font-bold"> Conditions Générales de Vente (CGV)</h3>
          <br />

          <i>Micro-Entreprise « Houeix Elvin »</i>
          <br />
          <i> Nom Commercial : « Houest Atelier » </i>
        </div>
        <h3 className="font-bold">1. Objet</h3>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les
          relations contractuelles entre <b>Houeix Elvin</b>, micro-entreprise
          enregistrée sous le numéro SIRET <b>931 683 254 00011</b>, dont le
          siège social est situé au <b> 3, rue de la Loire, 44340 Bouguenais</b>
          , et ses clients dans le cadre de la prestation de services
          informatiques à domicile et à distance.
        </p>
        <h3 className="font-bold">2. Prestations de services </h3>
        <p>
          {" "}
          <b>Houest Atelier</b> propose les services suivants
        </p>
        <ul className="list-disc ml-10">
          <li>
            <b>Assistance technique à domicile et à distance </b> : réparation,
            maintenance, et installation de matériel informatique (ordinateurs,
            imprimantes, etc.).
          </li>
          <li>
            <b>Formation informatique à domicile et à distance </b>: initiation
            et perfectionnement aux logiciels, à l’utilisation d’internet, et
            aux outils informatiques.
          </li>
          <li>
            <b>Installation et configuration </b> : installation de logiciels,
            configuration de systèmes d’exploitation et de réseaux domestiques.
          </li>
          <li>
            <b>Conseil en sécurité informatique </b> : audit de sécurité,
            protection des données et conseils pour éviter les cybermenaces.
          </li>
        </ul>
        <h3 className="font-bold">3. Tarifs</h3>
        <p>
          Tous les tarifs des services proposés par <b>Houest Atelier</b>sont
          associés au dispositif de <b>service à la personne</b> et sont
          valables jusqu&apos;au
          <b>1er janvier 2025</b>, sous réserve de modifications des conditions
          relatives au <b>service à la personne</b>.
        </p>
        <p>
          Toute vente de matériel est effectuée directement via
          l&apos;entreprise <b>OMG TECH</b> (située à Rezé, numéro de SIRET{" "}
          <b>879 271 005 00016</b>). Les prix des services et du matériel sont
          indiqués en euros. Un devis détaillé sera fourni avant chaque
          intervention.
        </p>
        <h3 className="font-bold">4. Devis et commandes</h3>
        <p>
          Un devis gratuit et sans engagement sera envoyé au client avant toute
          prestation. Ce devis est valable pour une durée de <b>30 jours</b>. La
          commande devient ferme et définitive dès réception du devis signé ou
          de l’accord explicite du client par email.
        </p>
        <h3 className="font-bold">5. Paiement</h3>
        <p>
          Le paiement est exigible à la fin de chaque prestation, sauf accord
          particulier. Les modes de paiement acceptés sont :
        </p>
        <ul>
          <li className="font-bold">Virement bancaire</li>
          <li className="font-bold">Chèque</li>
          <li className="font-bold">Espèces</li>
        </ul>
        <p>
          <b>Important</b> : Si le paiement est effectué en espèces,
          l&apos;intervention ne sera pas éligible au{" "}
          <b>service à la personne </b>et ne pourra donc pas bénéficier de la
          déduction fiscale prévue par ce dispositif. En cas de retard de
          paiement, une pénalité calculée sur la base de{" "}
          <b>10% du montant total par jour de retard</b> sera appliquée après
          une mise en demeure restée sans effet pendant 7 jours.
        </p>
        <h3 className="font-bold">6. Délai de rétractation</h3>
        <p>
          Conformément à l’article L221-18 du Code de la consommation, le client
          dispose d’un délai de rétractation de <b>14 jours </b> à compter de la
          signature du devis. Toutefois, si le client demande expressément que
          la prestation commence avant la fin de ce délai, il renonce à son
          droit de rétractation une fois la prestation pleinement exécutée.
        </p>
        <h3 className="font-bold">7. Responsabilité</h3>
        <p>
          <b>Houest Atelier</b> s&apos;engage à fournir les services avec
          professionnalisme et compétence. Toutefois, sa responsabilité ne
          pourra être engagée en cas de :
        </p>
        <ul className="list-disc ml-10">
          <li>
            Dommages résultant d’une mauvaise manipulation du matériel par le
            client.
          </li>
          <li>
            Perte de données due à un dysfonctionnement matériel non imputable à
            l’intervention.
          </li>
          <li>Incompatibilité logicielle non signalée avant l’intervention.</li>
        </ul>
        <h3 className="font-bold">8. Garantie</h3>
        <p>
          Les prestations sont garanties pour une durée de <b>30 jours</b> après
          leur réalisation. Si un problème directement lié à l’intervention
          survient durant cette période, <b>Houest Atelier</b> s&apos;engage à
          effectuer les corrections nécessaires sans frais supplémentaires.
          Toutefois, des frais de déplacement peuvent être appliqués en fonction
          de la localisation du client.
        </p>
        <h3 className="font-bold">9. Confidentialité</h3>
        <p>
          <b>Houest Atelier</b> garantit la confidentialité des informations
          personnelles et des données traitées dans le cadre de ses
          interventions. Aucune information ne sera divulguée à des tiers sans
          l’accord préalable du client.
        </p>
        <h3 className="font-bold">
          10. Loi applicable et juridiction compétente
        </h3>
        <p>
          Les présentes CGV sont régies par le droit français. En cas de litige,
          et après tentative de résolution amiable, les tribunaux compétents
          seront ceux du ressort de <b>Nantes</b>.
        </p>
        <h3 className="font-bold">11. Acceptation des CGV</h3>
        <p>
          Toute commande implique l&apos;acceptation pleine et entière des
          présentes Conditions Générales de Vente.
        </p>
      </div>
      <Footer />
    </div>
  );
}
