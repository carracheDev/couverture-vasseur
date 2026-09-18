import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Check, Clock3, Droplets, Hammer, House, MapPinned, ShieldCheck } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalAreas } from "@/components/LocalAreas";
import { SectionHeading } from "@/components/SectionHeading";
import { buildFAQSchema, buildRoofingContractorSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Couvreur à Angers (49) | Toiture, zinguerie & rénovation | Couverture Vasseur",
  description:
    "Couvreur à Angers : toiture en ardoise, rénovation, zinguerie, isolation de combles et intervention sur maisons anciennes. Devis gratuit sous 48 h.",
  alternates: { canonical: "/angers" },
  openGraph: {
    title: "Couvreur à Angers | Couverture Vasseur",
    description:
      "Expert en toiture ardoise et rénovation de bâtis anciens à Angers. Diagnostic, chantier propre et intervention rapide.",
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
  },
};

const faqItems = [
  {
    question: "Pourquoi la toiture angevine est-elle si particulière ?",
    answer:
      "Par sa densité de constructions anciennes, la présence de maisons de pierre et de bâtiments à caractère, les rues étroites et les contraintes de protection du patrimoine. Cela impose un travail précis sur la couverture et la finition.",
  },
  {
    question: "Travaillez-vous sur les maisons anciennes du centre d’Angers ?",
    answer:
      "Oui. Les éléments de structure, la charpente, la pente et les matériaux doivent être traités avec soin. Il faut souvent adapter les solutions sans dénaturer le caractère du bâtiment.",
  },
  {
    question: "Que faire face à une humidité ou à de la mousse ?",
    answer:
      "Le premier réflexe est de diagnostiquer la cause. L’humidité peut venir de la couverture, de la sous-toiture, des joints ou d’un défaut d’évacuation. Un traitement sans diagnostic peut se révéler insuffisant.",
  },
  {
    question: "Le stationnement et les accès sont-ils une contrainte sur Angers ?",
    answer:
      "Oui. Les rues étroites et les accès limités doivent être anticipés, notamment pour l’échafaudage, la benne et la logistique de chantier. C’est un point souvent sous-estimé lorsqu’on prépare la rénovation.",
  },
  {
    question: "La copropriété change-t-elle la conduite du chantier ?",
    answer:
      "Oui. L’avis de la copropriété, les règles de sécurité et les éléments communs peuvent imposer des procédures plus strictes. Nous prenons cela en compte dès le lancement du projet.",
  },
  {
    question: "Faut-il entretenir régulièrement une toiture en ardoise ?",
    answer:
      "Oui. Un contrôle régulier permet de repérer les ardoises déplacées, les défauts de solin ou la dégradation de la zinguerie avant qu’une simple fuite ne devienne un vrai chantier de réfection.",
  },
];

const localContext = [
  "Maisons anciennes et bâtis de pierre dans le centre ancien",
  "Toitures en ardoise fréquemment exposées au vent et à l’humidité",
  "Accès limités, rues étroites et stationnement maîtrisé",
  "Exigence de qualité sur les points singuliers : noues, solins, cheminées, fenêtres de toit",
  "Contrôles stricts quand le bâtiment appartient à une copropriété ou relève du patrimoine",
];

const contractorSchema = buildRoofingContractorSchema();
const faqSchema = buildFAQSchema(faqItems);

export default function AngersPage() {
  return (
    <>
      <Header />
      <main id="contenu" className="bg-[#f6f7f8] text-[#0C131C]">
        <section className="bg-[#0C131C] pb-16 pt-10 text-white md:pb-20">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] items-center gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#bfe1ff]">Couvreur Angers • 49</p>
              <h1 className="text-[clamp(2.7rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.06em] text-white">
                Couvreur à Angers, spécialiste de la rénovation de toiture
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-white/75">
                Les toitures angevines doivent tenir compte de l’ancienneté du bâti, de l’exposition, des maisons de pierre et des contraintes d’accès. Une intervention précise permet de protéger le logement sans dénaturer son caractère.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0057b3]">
                  Demander un devis
                </Link>
                <Link href="/refection-toiture-ardoise-angers" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Voir la prestation <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3">
              <Image
                src="/images/ardoise-angers.jpg"
                alt="Ardoise naturelle extraite et utilisée dans les toitures angevines"
                width={1200}
                height={900}
                className="h-[440px] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Le contexte local"
                title="Les toitures d’Angers demandent une vraie lecture du terrain"
                intro="Le tissu urbain, la diversité des maisons et la fréquence des bâtiments anciens font qu’une toiture angevine ne se traite pas comme un simple remplacement de couverture."
              />
              <div className="mt-8 space-y-4">
                {localContext.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#dfe7ee] bg-white p-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0061C6] text-white">
                      <Check size={14} />
                    </span>
                    <p className="text-sm leading-7 text-[#475467]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Ce que nous analysons avant de proposer une solution</h3>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                La qualité d’une toiture angevine dépend en grande partie de sa pente, de son état de support, des infiltrations déjà présentes et de la manière dont l’eau est évacuée. Une perspective locale est essentielle pour éviter les mauvais choix et l’augmentation des coûts à moyen terme.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Dans une maison de ville du centre d’Angers, le diagnostic doit aussi tenir compte des mitoyennetés, des murs anciens et des pièces de charpente parfois difficiles à inspecter. La couverture en ardoise peut sembler saine depuis la rue alors que les crochets, le liteaunage ou les raccords autour d’une cheminée ont déjà perdu leur efficacité. C’est pourquoi nous distinguons toujours l’entretien, la réparation ciblée et la réfection complète avant de chiffrer les travaux.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Avant l’ouverture du chantier, nous vérifions également les besoins d’autorisation, la possibilité d’installer un échafaudage et les règles de la copropriété. Cette préparation évite de bloquer une rue, de retarder une livraison ou de découvrir trop tard une contrainte liée au patrimoine angevin.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Le quartier, l’orientation du versant et la proximité des arbres peuvent aussi modifier le comportement de la couverture. Un toit exposé au nord gardera davantage d’humidité, tandis qu’un versant très ouvert au vent demandera une attention particulière aux fixations et aux rives. Ces nuances expliquent pourquoi une solution pertinente à Avrillé ou à Beaucouzé n’est pas automatiquement celle qui convient à une maison du centre d’Angers.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#edf3f8] p-4">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Humidité</p>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">Mousse, traces sur les plafonds et zones d’infiltration dans les combles</p>
                </div>
                <div className="rounded-2xl bg-[#edf3f8] p-4">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Accès</p>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">Échafaudage, benne, stationnement et gestion des nuisances locales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Le bâti angevin"
              title="Des toitures très différentes dans une même ville"
              intro="Angers rassemble des maisons de ville mitoyennes, des demeures en pierre, des extensions plus récentes et des immeubles en copropriété. Chaque typologie impose une façon différente de préparer et de réaliser les travaux."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Centre ancien</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les maisons mitoyennes ont souvent des versants étroits, des cheminées rapprochées et des accès difficiles depuis la rue.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Maisons en pierre</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les murs anciens et les charpentes irrégulières demandent une observation attentive avant de choisir une solution standard.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Petits collectifs</h3><p className="mt-3 text-sm leading-7 text-[#475467]">La toiture concerne plusieurs occupants et nécessite une organisation claire, de la sécurisation aux informations de chantier.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Périphérie angevine</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les maisons plus accessibles offrent parfois une logistique différente, mais la pente, l’évacuation de l’eau et le support restent à contrôler.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Spécificités de la ville"
              title="Bâti ancien, patrimoine et contraintes techniques"
              intro="À Angers, les interventions sur toiture doivent être pensées au regard du type de construction, des règles de copropriété et des contraintes de site. L’objectif est de préserver le bâtiment tout en renforçant son étanchéité." 
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: "Maison ancienne", text: "La toiture doit être traitée de façon respectueuse du bâti et des matériaux d’origine." },
                { title: "Copropriété", text: "Les règles de sécurité et les procédures internes doivent être respectées dès le départ." },
                { title: "Patrimoine", text: "Les éléments de finition et les matériaux doivent rester cohérents avec l’architecture du lieu." },
                { title: "Exposition", text: "Le vent, la pluie et l’humidité peuvent accélérer la dégradation des éléments de toiture." },
              ].map((card) => (
                <div key={card.title} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]">
                    {card.title.includes("Maison") ? <House size={18} /> : card.title.includes("Copropriété") ? <Building2 size={18} /> : card.title.includes("Patrimoine") ? <ShieldCheck size={18} /> : <Clock3 size={18} />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0C131C]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Diagnostic local"
                title="Pourquoi le prix peut varier d’une rue à l’autre"
                intro="Deux toitures de surface comparable peuvent demander des moyens très différents. À Angers, la logistique et l’environnement immédiat comptent autant que la quantité d’ardoise à poser."
              />
              <p className="mt-6 text-base leading-8 text-[#475467]">Une maison située dans une rue étroite peut nécessiter un échafaudage spécifique, une autorisation d’occupation du domaine public et une livraison organisée sur des créneaux précis. Dans une copropriété, il faut aussi prévoir la circulation des occupants, la protection des parties communes et la coordination avec le syndic.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">La pente, le nombre de versants, les fenêtres de toit, les cheminées et les raccords de mitoyenneté jouent également sur le temps de travail. C’est pour cette raison qu’un prix au mètre carré isolé ne suffit pas à produire un devis fiable.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Le devis doit aussi intégrer la mise en sécurité temporaire, le stockage des matériaux, l’évacuation des déchets et la protection des abords. Dans une rue passante, une cour partagée ou un immeuble occupé, ces détails peuvent représenter une part importante de la préparation. Les annoncer dès le départ permet d’éviter les suppléments liés à une contrainte découverte au dernier moment.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">La météo est enfin un facteur pratique. Une dépose de couverture ne se programme pas de la même façon en période de pluie prolongée qu’en saison sèche. Nous prévoyons des protections adaptées et nous avançons par zones lorsque la configuration du toit le permet, afin de conserver la mise hors d’eau du logement.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Dans les quartiers où les logements sont mitoyens, la préparation porte aussi sur les limites entre propriétés. Les murs, les corniches, les fenêtres voisines et les cours intérieures doivent être protégés. Une bonne organisation réduit les nuisances et évite qu’une intervention nécessaire sur un toit ne crée un nouveau problème pour le voisinage.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">C’est aussi ce qui rend utile un artisan local : il connaît les questions pratiques à poser avant le devis, les différences entre une maison accessible par jardin et un immeuble accessible uniquement depuis la rue, ainsi que l’importance d’un calendrier partagé avec les occupants.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Le propriétaire reçoit ainsi une proposition liée à son bâtiment et à son quartier, plutôt qu’une estimation générique. Cette précision est importante pour comparer plusieurs devis : il faut regarder les matériaux prévus, les protections, les finitions, les évacuations et les conditions de réception, pas seulement le montant total.</p>
            </div>
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Les éléments relevés pendant la visite</h3>
              <ul className="mt-6 space-y-4 text-base leading-8 text-[#475467]">
                <li><strong className="text-[#0C131C]">Accès :</strong> possibilité d’installer et de ravitailler l’échafaudage.</li>
                <li><strong className="text-[#0C131C]">Voisinage :</strong> mitoyenneté, cours intérieures et protection des façades.</li>
                <li><strong className="text-[#0C131C]">Support :</strong> état des liteaux, de la charpente et des éléments sous couverture.</li>
                <li><strong className="text-[#0C131C]">Eau :</strong> état des gouttières, chéneaux, noues et descentes.</li>
                <li><strong className="text-[#0C131C]">Règles :</strong> contraintes de copropriété, d’urbanisme ou de patrimoine.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Urbanisme et copropriété"
              title="Préparer les autorisations avant l’intervention"
              intro="Une toiture visible depuis l’espace public peut être concernée par des règles particulières. Les vérifier en amont protège le propriétaire et évite d’interrompre un chantier déjà installé."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Déclaration préalable</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une modification de l’aspect extérieur, une nouvelle fenêtre de toit ou un changement de matériau peuvent appeler une déclaration selon le projet.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Bâtiments de France</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Dans un secteur patrimonial, la teinte, le format, la finition et les détails visibles doivent rester cohérents avec le caractère du bâtiment.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Vote en copropriété</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Quand la couverture est commune, le syndic et l’assemblée générale peuvent devoir valider le programme, le financement et le calendrier.</p></article>
            </div>
            <p className="mt-8 max-w-[820px] text-base leading-8 text-[#475467]">Dans tous les cas, la demande de devis gagne à être accompagnée de photographies des combles, de la façade et des zones de fuite lorsqu’elles sont accessibles depuis le sol. Ces éléments ne remplacent pas la visite, mais ils permettent de préparer les bonnes questions et de repérer les contraintes avant le rendez-vous.</p>
            <p className="mt-4 max-w-[820px] text-base leading-8 text-[#475467]">Pour une copropriété, il est utile de réunir les anciens devis, les procès-verbaux qui évoquent des infiltrations et les éventuels rapports d’assurance. Ces informations donnent une meilleure continuité au diagnostic et permettent de distinguer un défaut ponctuel d’un problème récurrent sur la couverture commune.</p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Pathologies locales"
              title="Ce qui se dégrade le plus souvent sur les toits angevins"
              intro="Le climat humide, les arbres proches des maisons et l’âge du bâti créent des situations récurrentes. Les repérer tôt permet de préserver la charpente et de limiter le coût des travaux."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Mousse et humidité</h3><p className="mt-3 text-sm leading-7 text-[#475467]">La mousse retient l’eau et peut accélérer l’usure des ardoises, des joints et des éléments de zinguerie.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Solins et cheminées</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les raccords entre la couverture et les murs ou cheminées concentrent souvent les infiltrations sur les maisons anciennes.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Évacuation de l’eau</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une gouttière saturée ou un chéneau déformé peut renvoyer l’eau vers la façade, les combles ou les pièces de vie.</p></article>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Ce que l’on observe sur place"
              title="Les six points vérifiés en priorité à Angers"
              intro="Une visite utile ne consiste pas à regarder uniquement les ardoises depuis le sol. Elle croise la couverture, les évacuations, les combles et les contraintes visibles autour du bâtiment."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">La pente des versants</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Elle influence le recouvrement, le choix du format d’ardoise et la vitesse d’écoulement de l’eau.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Les ardoises et crochets</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Nous cherchons les pièces cassées, déplacées, poreuses ou mal fixées, ainsi que les zones exposées au vent.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Le faîtage et les rives</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Ces lignes de finition protègent les bords et le point haut de la toiture, où les mouvements sont particulièrement visibles.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Les solins et noues</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les jonctions autour des murs, cheminées et changements de pente sont vérifiées car elles concentrent l’eau.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Les gouttières</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Un chéneau encombré ou une descente mal raccordée peut dégrader la façade et créer une humidité persistante.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Les combles</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les odeurs, traces, auréoles et condensations donnent des informations utiles sur la santé réelle de la couverture.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Rénovation en centre-ville"
                title="Préserver une maison ancienne sans la figer"
                intro="Rénover une toiture ancienne à Angers demande de trouver un équilibre entre la performance actuelle, la lecture historique du bâtiment et les contraintes de la vie quotidienne."
              />
              <p className="mt-6 text-base leading-8 text-[#475467]">Les maisons du centre ancien ont souvent évolué par étapes. Une extension, une ancienne lucarne ou un raccord entre deux volumes peuvent expliquer une géométrie irrégulière. Une solution trop uniforme peut créer des difficultés autour des jonctions et modifier la silhouette de la maison.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Le travail consiste donc à améliorer l’étanchéité et la sécurité sans effacer les caractéristiques qui donnent son identité au bâtiment. Les matériaux, les profils de zinguerie, les rives et les détails visibles depuis la rue sont examinés dans cet objectif.</p>
            </div>
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Les erreurs à éviter</h3>
              <ul className="mt-6 space-y-4 text-base leading-8 text-[#475467]">
                <li><strong className="text-[#0C131C]">Remplacer sans inspecter :</strong> une couverture neuve ne corrige pas une charpente humide.</li>
                <li><strong className="text-[#0C131C]">Négliger les évacuations :</strong> l’eau doit être guidée loin des murs et des parties communes.</li>
                <li><strong className="text-[#0C131C]">Oublier les accès :</strong> le chantier doit rester compatible avec la rue et les voisins.</li>
                <li><strong className="text-[#0C131C]">Promettre un prix sans visite :</strong> les détails du toit sont trop importants pour être ignorés.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Après travaux"
              title="Les bons réflexes pour conserver une toiture saine"
              intro="Le suivi d’une toiture à Angers repose sur des contrôles simples et réguliers, surtout après un épisode venteux ou une période de pluie prolongée."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Contrôle des gouttières</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les feuilles et mousses doivent être retirées pour que l’eau ne déborde pas contre la façade ou dans une cour intérieure.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Observation des combles</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une trace nouvelle, une odeur humide ou une marque après pluie doit conduire à une vérification rapide.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Inspection après tempête</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les rives, faîtages et ardoises exposées peuvent bouger sans qu’une fuite soit immédiatement visible depuis l’intérieur.</p></article>
            </div>
            <div className="mt-8 rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Un entretien adapté à chaque toiture</h3>
              <p className="mt-4 text-base leading-8 text-[#475467]">Une maison entourée d’arbres, un immeuble en centre-ville et une construction exposée sur la périphérie ne demandent pas la même fréquence de contrôle. L’entretien doit tenir compte de l’environnement, de l’âge de la couverture et de l’accessibilité des gouttières. Un contrôle périodique des éléments visibles permet de programmer une intervention avant la fuite, au lieu d’attendre une dégradation intérieure.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Lorsqu’un nettoyage ou un traitement est envisagé, il faut également vérifier que les ardoises, les joints et les zingueries peuvent le supporter. Une méthode trop agressive peut faire plus de dégâts qu’elle ne résout de problèmes. Le diagnostic reste donc utile même pour une demande qui semble limitée à de la mousse ou à une gouttière bouchée.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Une toiture bien suivie ne demande pas nécessairement des travaux lourds chaque année. Elle demande surtout que les signaux soient pris au sérieux, que les évacuations restent libres et que les éléments visibles soient contrôlés après les épisodes qui sollicitent le plus la couverture.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Cette attention est particulièrement utile pour les maisons anciennes d’Angers, où une petite entrée d’eau peut progressivement atteindre un plafond, une poutre ou un mur mitoyen. Un contrôle rapide après une tempête ou une période très humide permet souvent de conserver une réparation ciblée et d’éviter une réfection imposée par l’aggravation des dommages.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Le suivi permet également de documenter l’évolution d’une couverture : date d’une réparation, état d’un solin, nettoyage des évacuations et apparition éventuelle de nouvelles traces. Cette mémoire est précieuse pour un propriétaire comme pour un syndic, car elle aide à planifier les interventions et à expliquer les décisions prises sur plusieurs années.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">Elle facilite aussi la transmission du logement ou la préparation d’une vente. Un historique clair des contrôles et des travaux montre que la couverture a été suivie, que les infiltrations ont été traitées et que les éléments sensibles n’ont pas été laissés sans surveillance.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Services sur Angers"
              title="Une offre claire pour les logements, les copropriétés et les bâtiments anciens"
              intro="Le bon travail de toiture ne s’improvise pas. Il repose sur le bon diagnostic, les bons matériaux et un chantier bien encadré."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "Réfection complète", text: "Remplacement de la couverture, reprise du support, finitions de qualité et meilleure protection du bâtiment." },
                { title: "Réparation de fuite", text: "Localisation rapide des infiltrations et sécurisation des points fragiles avant qu’ils ne s’aggravent." },
                { title: "Zinguerie", text: "Chéneaux, gouttières, descentes, solins et rénovations de détails de toiture." },
                { title: "Traitement hydrofuge", text: "Protection des éléments soumis à l’humidité, au vent et aux salissures." },
                { title: "Démoussage", text: "Nettoyage et prévention pour éviter les dégradations du support et de la couverture." },
                { title: "Isolation de combles", text: "Travail de confort et d’efficacité énergétique pour limiter les déperditions." },
              ].map((item) => (
                <article key={item.title} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]">
                    {item.title.includes("Réparation") ? <Droplets size={18} /> : item.title.includes("Zinguerie") ? <Building2 size={18} /> : item.title.includes("Traitement") ? <ShieldCheck size={18} /> : item.title.includes("Isolation") ? <House size={18} /> : <Hammer size={18} />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0C131C]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Déroulé local"
              title="Un chantier organisé selon les contraintes d’Angers"
              intro="La visite et la préparation permettent de sécuriser le projet avant la pose. C’est particulièrement important dans les rues étroites, les immeubles collectifs et les secteurs patrimoniaux."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                ["01", "Relevé sur place", "Nous observons les accès, la pente, les mitoyennetés et les zones visibles depuis la rue."],
                ["02", "Préparation", "Les démarches, l’échafaudage, la benne et la coordination avec les occupants sont anticipés."],
                ["03", "Intervention", "La couverture est déposée ou réparée par zones pour garder un chantier propre et sécurisé."],
                ["04", "Réception", "Les finitions, l’évacuation de l’eau et les points singuliers sont contrôlés avec le propriétaire."],
              ].map(([number, title, text]) => (
                <article key={number} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><p className="text-xs font-extrabold tracking-[0.14em] text-[#0061C6]">{number}</p><h3 className="mt-4 text-xl font-semibold text-[#0C131C]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#475467]">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0C131C] py-20 text-white md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Communes desservies"
              title="Intervention dans l’agglomération angevine"
              intro="Nous intervenons sur les communes autour d’Angers, notamment pour les projets de toiture et de rénovation sur des maisons individuelles ou des petits immeubles."
              light
            />
            <LocalAreas />
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="FAQ locale"
              title="Questions sur la toiture à Angers"
              intro="Des conseils concrets pour comprendre les spécificités du chantier local et la meilleure solution pour votre habitation."
            />
            <div className="mt-10">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <div className="flex flex-col gap-6 rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#0061C6]">Contact rapide</p>
                <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.05em] text-[#0C131C]">Besoin d’une intervention à Angers ?</h2>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0057b3]">
                Demander un devis
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#475467]">
              <span className="flex items-center gap-2"><BadgeCheck size={16} className="text-[#0061C6]" /> RGE Qualibat</span>
              <span className="flex items-center gap-2"><MapPinned size={16} className="text-[#0061C6]" /> Angers et 30 km</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0061C6]" /> Garantie décennale AXA</span>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Autour d’Angers"
              title="Un maillage local jusqu’aux communes voisines"
              intro="La même préparation est proposée dans les communes proches, avec une attention particulière portée aux maisons individuelles, aux extensions et aux petits immeubles."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Avrillé", "Beaucouzé", "Les Ponts-de-Cé", "Trélazé", "Saint-Barthélemy-d’Anjou", "Écouflant"].map((commune) => (
                <span key={commune} className="rounded-full border border-[#dfe7ee] bg-white px-4 py-2 text-sm font-semibold text-[#475467]">{commune}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contractorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
