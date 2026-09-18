import Image from "next/image";
import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  Droplets,
  Hammer,
  House,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalAreas } from "@/components/LocalAreas";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";
import { buildFAQSchema, buildRoofingContractorSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Couvreur à Angers (49) — Toiture ardoise & rénovation | Couverture Vasseur",
  description:
    "Couvreur à Angers spécialisé en toiture ardoise, réfection, réparation de fuite, zinguerie et isolation de combles. Devis gratuit sous 48 h.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Couvreur à Angers, spécialiste de l’ardoise naturelle et de la rénovation toiture. Devis gratuit sous 48 h.",
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
    url: "https://www.couverture-vasseur.fr/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Spécialiste de l’ardoise naturelle à Angers pour la réfection, la zinguerie et les interventions urgentes.",
  },
};

const faqItems = [
  {
    question: "Quel est le délai pour un devis ?",
    answer:
      "Nous répondons généralement sous 48 heures. Pour les situations urgentes, comme une fuite ou une dégradation rapide, nous intervenons dès que possible, parfois le jour même selon la gravité du sinistre.",
  },
  {
    question: "Faites-vous aussi des interventions d’urgence ?",
    answer:
      "Oui. Nous traitons les fuites de toiture et les symptômes d’infiltration 7 jours sur 7. L’objectif est de limiter les dégâts d’eau et sécuriser la couverture avant d’envisager la réparation durable.",
  },
  {
    question: "Comment choisir entre réfection partielle et réfection complète ?",
    answer:
      "Tout dépend de l’état de la couverture, de la charpente, de la présence de zones humides et de la qualité du support. Nous diagnostiquons les points faibles et recommandons la solution la plus compatible avec le bâtiment et son usage.",
  },
  {
    question: "Travaillez-vous sur les maisons anciennes d’Angers ?",
    answer:
      "Oui. Le bâti ancien angevin demande une approche précise : ardoises adaptées, respect de la pente, attention aux éléments singuliers, et vigilance sur les contraintes ABF ou copropriété. C’est une partie de notre expertise.",
  },
  {
    question: "Un devis est-il gratuit ?",
    answer:
      "Oui. Le devis est gratuit et sans engagement. Il est établi après un diagnostic, selon l’état du toit, la surface à traiter, l’accessibilité et les contraintes techniques du chantier.",
  },
  {
    question: "Posez-vous des fenêtres de toit et de la zinguerie ?",
    answer:
      "Oui. Nous traitons aussi les éléments de finition : fenêtres de toit, chéneaux, gouttières, descentes, solins, noues et travaux d’étanchéité pour compléter la couverture.",
  },
  {
    question: "Quels critères influencent le prix d’une toiture ?",
    answer:
      "La surface, la pente, l’état de la charpente, la complexité de l’accès, le type d’ardoise et la présence de points singuliers comme une lucarne, une cheminée ou une toiture de copropriété jouent un rôle important dans le coût final.",
  },
  {
    question: "Avez-vous une garantie ?",
    answer:
      "Oui. La réalisation est couverte par la garantie décennale AXA, et nous appliquons une rigueur de mise en œuvre pour sécuriser le chantier de la dépose jusqu’à la finition.",
  },
];

const qualities = [
  { title: "12 ans d’expérience", text: "Une expérience qui permet de repérer les défauts structurants dès le premier diagnostic." },
  { title: "RGE Qualibat", text: "Une certification qui rassure sur le sérieux du travail et la qualité de la mise en œuvre." },
  { title: "Garantie décennale AXA", text: "Une protection essentielle pour les propriétaires qui veulent des travaux pérennes." },
  { title: "Équipe de 4 personnes", text: "Julien et ses trois compagnons travaillent en petit effectif pour garder le contrôle du chantier." },
];

const services = [
  { title: "Réfection complète de toiture", text: "Remplacement de la couverture, reprise de la sous-toiture, mise en œuvre fine de l’étanchéité et finitions respectueuses de l’architecture." },
  { title: "Réparation de fuite", text: "Diagnostic, localisation des infiltrations, sécurisation immédiate et réparation durable sur l’ensemble de la couverture." },
  { title: "Couverture en ardoise", text: "Pose d’ardoise naturelle, choix de la bonne pente, contrôle des crochets, liteaux et faîtage pour une toiture durable." },
  { title: "Zinguerie et gouttières", text: "Pose et rénovation de chéneaux, gouttières, descentes, solins et éléments de finition pour protéger le bâtiment." },
  { title: "Démoussage & hydrofuge", text: "Nettoyage, traitement hydrofuge et prévention contre les infiltrations et la dégradation des matériaux." },
  { title: "Isolation des combles", text: "Travaux de confort et d’efficacité énergétique afin de limiter les déperditions tout en respectant la charpente." },
];

const steps = [
  ["01", "Diagnostic", "Inspection de la couverture, des infiltrations, de la charpente et des éléments de finition."],
  ["02", "Devis clair", "Chiffrage transparent, explication des travaux et recommandations adaptées au toit."],
  ["03", "Démontage", "Dépose propre des éléments dégradés avec vigilance sur la toiture et les accès."],
  ["04", "Pose", "Mise en œuvre de la sous-toiture, de l’ardoise et des éléments de finition selon la technique adéquate."],
  ["05", "Réception", "Contrôle final, explication du chantier, vérification de la qualité et des garanties."],
];

const priceFactors = [
  "Surface et pente de la toiture",
  "État de la charpente et du support",
  "Difficulté d’accès ou contraintes de copropriété",
  "Type d’ardoise et éléments singuliers",
  "Travail d’étanchéité, zinguerie et finitions",
];

const schema = buildFAQSchema(faqItems);
const contractorSchema = buildRoofingContractorSchema();

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenu" className="bg-[#f6f7f8] text-[#0C131C]">
        <section className="relative overflow-hidden border-b border-[#dfe7ee] bg-[#0C131C] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/chantier-toiture.jpg"
              alt="Couvreur intervenant sur une toiture en rénovation"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,19,28,0.94),rgba(12,19,28,0.82),rgba(12,19,28,0.38))]" />

          <div className="relative mx-auto grid min-h-[700px] w-[calc(100%-32px)] max-w-[1180px] items-center gap-10 py-16 md:w-[calc(100%-48px)] lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div>
              <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#bfe1ff]">
                Spécialiste ardoise naturelle • Angers • 49
              </p>
              <h1 className="max-w-[640px] text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.96] tracking-[-0.06em] text-white">
                Couvreur à Angers, spécialiste de l’ardoise naturelle
              </h1>
              <p className="mt-6 max-w-[540px] text-base text-white/80 md:text-lg">
                Julien Vasseur et son équipe réalisent les réfections de toiture, les réparations de fuite et les travaux de zinguerie avec un souci constant de la qualité, de l’étanchéité et du bâti ancien angevin.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0057b3]">
                  Demander un devis
                </a>
                <a href="tel:+33241873412" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  <PhoneCall size={16} /> 02 41 87 34 12
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/75">
                <span className="flex items-center gap-2"><Star className="text-[#9accff]" size={16} /> 47 avis Google • 4,9/5</span>
                <span className="flex items-center gap-2"><BadgeCheck className="text-[#9accff]" size={16} /> RGE Qualibat</span>
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="relative h-[420px] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/toiture-ardoise-angers.jpg"
                    alt="Détail de véritables ardoises naturelles posées sur une toiture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 left-6 rounded-2xl border border-[#dfe7ee] bg-white px-4 py-3 text-[#0C131C] shadow-xl">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Urgence fuite</p>
                <p className="mt-1 text-xl font-bold">7 j / 7</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#dfe7ee] bg-[#0C131C] py-8 text-white">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-6 text-center md:w-[calc(100%-48px)] md:grid-cols-4 md:text-left">
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="mt-2 text-sm text-white/70">ans d’expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">47</p>
              <p className="mt-2 text-sm text-white/70">avis Google</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4,9</p>
              <p className="mt-2 text-sm text-white/70">note moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-bold">48 h</p>
              <p className="mt-2 text-sm text-white/70">pour un devis</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Une méthodologie claire"
              title="La toiture, traitée comme un système complet"
              intro="Une bonne couverture ne se limite pas à la pose de l’ardoise. Elle repose sur l’analyse de la pente, de l’étanchéité, des points singuliers, de l’isolation et des contraintes du bâtiment."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {qualities.map((quality) => (
                <article key={quality.title} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0C131C]">{quality.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">{quality.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Prestations"
              title="Des interventions adaptées au bâti et au contexte local"
              intro="Nous intervenons sur les toitures anciennes comme sur les maisons plus récentes, en tenant compte de la copropriété, des règles ABF et des spécificités d’Angers."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f2ff] text-[#0061C6]">
                    {service.title.includes("Fuite") ? <Droplets size={18} /> : service.title.includes("Ardoise") ? <House size={18} /> : service.title.includes("Zinguerie") ? <Wrench size={18} /> : service.title.includes("Combles") ? <Building2 size={18} /> : <Hammer size={18} />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0C131C]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] items-center gap-12 md:w-[calc(100%-48px)] lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Image
                src="/images/ardoise-angers.jpg"
                alt="Ardoises naturelles d’Angers utilisées pour la couverture"
                width={1200}
                height={900}
                className="h-[480px] w-full rounded-[28px] object-cover shadow-[0_18px_60px_rgba(12,19,28,0.08)]"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Spécialité ardoise"
                title="Le savoir-faire de l’ardoise angevine"
                intro="L’ardoise naturelle reste la référence pour les maisons angevines et les toitures anciennes. Elle demande un choix rigoureux de la matière, une pose précise et une bonne compréhension de la ventilation, de l’évacuation de l’eau et des points singuliers."
              />

              <p className="mt-6 text-base leading-8 text-[#475467]">
                Dans le Maine-et-Loire, la couverture en ardoise accompagne aussi bien les maisons de ville que les longères et les bâtiments de caractère. Son format, son pureau et son mode de fixation doivent être cohérents avec la pente et l’exposition. Une ardoise bien posée laisse l’eau suivre naturellement le versant, protège les liteaux et conserve la silhouette de la maison. À l’inverse, une reprise trop rapide peut déplacer le problème vers les noues, le faîtage ou les raccords de cheminée.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Pose de l’ardoise selon l’orientation, la pente et la qualité du support",
                  "Contrôle des crochets, liteaux, faîtage, solins et noues",
                  "Respect des contraintes ABF, copropriété et patrimoine local",
                  "Intervention sur les bâtiments anciens sans dénaturer leur caractère",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-[#dfe7ee]">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0061C6] text-white">
                      <Check size={14} />
                    </span>
                    <p className="text-sm leading-7 text-[#475467]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0C131C] py-20 text-white md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Comment on travaille"
              title="Un chantier structuré, sans mauvaise surprise"
              intro="Le bon chantier repose sur la clarté: diagnostic précis, explication des solutions, suivi de la mise en œuvre et réception finale."
              light
            />

            <div className="mt-12 space-y-5">
              {steps.map(([number, title, text]) => (
                <div key={number} className="grid gap-4 rounded-[22px] border border-white/10 bg-white/5 p-5 md:grid-cols-[80px_1fr] md:items-start">
                  <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#9accff]">{number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="realisations" className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Réalisations"
              title="Des chantiers pensés pour durer, du support à la finition"
              intro="Chaque chantier raconte un problème de toiture différent : une couverture vieillissante, une infiltration autour d’un point singulier ou une rénovation complète sur un bâti ancien."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Réfection d’une couverture en ardoise",
                  text: "Dépose des éléments fragilisés, contrôle du support et reprise de la couverture avec une attention particulière portée au faîtage et aux raccords.",
                  before: "Ardoises déplacées et points singuliers fragilisés",
                  after: "Couverture reprise avec faîtage et raccords contrôlés",
                  image: "/images/toiture-ardoise-angers.jpg",
                  alt: "Toiture en ardoise naturelle après rénovation",
                },
                {
                  title: "Reprise d’une toiture ancienne",
                  text: "Une intervention sur maison ancienne demande de préserver les proportions du toit, de sécuriser les accès et de traiter les zones où l’humidité s’installe.",
                  before: "Support vieillissant et humidité dans les combles",
                  after: "Versant assaini et détails conservant le caractère du bâti",
                  image: "/images/ardoise-angers.jpg",
                  alt: "Matériau ardoise utilisé pour un chantier de couverture",
                },
                {
                  title: "Mise hors d’eau après infiltration",
                  text: "Sécurisation de la zone, recherche de la cause et réparation des points sensibles avant la remise en état durable de la couverture.",
                  before: "Fuite localisée autour d’un raccord de toiture",
                  after: "Zone sécurisée et évacuation de l’eau rétablie",
                  image: "/images/chantier-toiture.jpg",
                  alt: "Intervention de rénovation sur une structure de toiture",
                },
              ].map((project) => (
                <article key={project.title} className="overflow-hidden rounded-[24px] border border-[#dfe7ee] bg-white shadow-sm">
                  <Image src={project.image} alt={project.alt} width={900} height={600} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0C131C]">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#475467]">{project.text}</p>
                    <div className="mt-5 grid gap-3 border-t border-[#dfe7ee] pt-5 text-sm">
                      <p><span className="font-bold text-[#0C131C]">Avant :</span> <span className="text-[#475467]">{project.before}</span></p>
                      <p><span className="font-bold text-[#0061C6]">Après :</span> <span className="text-[#475467]">{project.after}</span></p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]">
                  <MapPinned size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0C131C]">Maison ancienne et centre ancien</h3>
                <p className="mt-4 text-sm leading-7 text-[#475467]">
                  Les rues étroites, le stationnement, l’accès limité et les bâtiments anciennement entretenus exigent de la rigueur dans le plan de chantier, le choix de l’échafaudage et la gestion des déchets. Chaque intervention doit tenir compte de l’environnement immédiat.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]">
                  <Clock3 size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0C131C]">Diagnostic, humidité et pathologies</h3>
                <p className="mt-4 text-sm leading-7 text-[#475467]">
                  L’humidité, le développement de mousse, la dégradation des liteaux ou des solins et l’exposition au vent sont autant de signaux à analyser avant de décider d’une réfection partielle ou complète. Nous cherchons la cause avant la solution.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[28px] border border-[#dfe7ee] bg-[#f6f9fb] p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Ce qui influence le prix</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {priceFactors.map((factor) => (
                  <div key={factor} className="rounded-2xl border border-[#dfe7ee] bg-white p-4 text-sm leading-6 text-[#475467]">
                    {factor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Garanties et engagements"
              title="Un cadre clair avant, pendant et après les travaux"
              intro="La confiance repose sur des éléments vérifiables : une entreprise identifiée, des assurances, une méthode de chantier et un interlocuteur joignable."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Garantie décennale AXA", "Les travaux de couverture sont réalisés dans le cadre de la garantie décennale annoncée au devis."],
                ["RGE Qualibat", "La qualification accompagne les projets de rénovation et la qualité de mise en œuvre."],
                ["Urgence 7 jours sur 7", "Une fuite peut être signalée rapidement pour limiter les dégâts avant la réparation durable."],
                ["Devis gratuit sous 48 h", "Le diagnostic et les facteurs de prix sont expliqués avant toute décision."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#475467]">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Julien Vasseur"
              title="Un artisan de terrain, proche du chantier et du client"
              intro="Julien Vasseur dirige les travaux et intervient directement avec ses trois compagnons. L’objectif est simple : maîtriser chaque phase du chantier, écouter les contraintes du propriétaire et livrer une toiture durable et propre."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-[28px] border border-[#dfe7ee] bg-white p-3 shadow-sm">
                <Image
                  src="/images/couvreur-chantier.jpg"
                  alt="Couvreur travaillant sur un élément de toiture"
                  width={900}
                  height={1100}
                  className="h-[440px] w-full rounded-[22px] object-cover"
                />
              </div>

              <div className="space-y-5">
                <p className="text-base leading-8 text-[#475467]">
                  Depuis plus de 12 ans, Julien travaille autour de la toiture, de l’ardoise naturelle et de la réparation des infiltrations. Cette expérience l’a conduit à développer une vraie sensibilité au bâti ancien angevin, aux contraintes de copropriété et au besoin de précision dans les détails.
                </p>
                <p className="text-base leading-8 text-[#475467]">
                  Son équipe dresse d’abord un diagnostic clair, justifie ensuite chaque intervention et garantit le chantier avec rigueur. Les travaux sont menés avec une logique de long terme : éviter les reprises rapides, préserver la toiture et améliorer le confort du logement.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#dfe7ee] bg-white p-5">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Ancienneté</p>
                    <p className="mt-3 text-2xl font-bold text-[#0C131C]">12 ans</p>
                  </div>
                  <div className="rounded-2xl border border-[#dfe7ee] bg-white p-5">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Équipe</p>
                    <p className="mt-3 text-2xl font-bold text-[#0C131C]">4 personnes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Zone d’intervention"
              title="Intervention sur Angers et jusqu’à 30 km"
              intro="Nous intervenons sur les villes de l’agglomération angevine pour réaliser des diagnostics, des réparations rapides et des travaux de réfection complète."
            />
            <LocalAreas />
          </div>
        </section>

        <section id="contact" className="bg-[#0C131C] py-20 text-white md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Demandez un devis sans engagement"
                intro="Décrivez votre toiture, vos symptômes et votre contexte. Nous vous répondrons rapidement avec une proposition claire, utile et adaptée à votre situation."
                light
              />

              <div className="mt-8 space-y-4 text-sm text-white/75">
                <p className="flex items-center gap-3"><PhoneCall size={16} className="text-[#98c3ff]" /> <a href="tel:+33241873412" className="hover:text-white">02 41 87 34 12</a></p>
                <p className="flex items-center gap-3"><MapPinned size={16} className="text-[#98c3ff]" /> Angers, Maine-et-Loire (49)</p>
                <p className="flex items-center gap-3"><BadgeCheck size={16} className="text-[#98c3ff]" /> Devis gratuit sous 48 h</p>
              </div>
            </div>

            <QuoteForm />
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions fréquentes sur la toiture et la rénovation"
              intro="Des réponses claires pour mieux comprendre les travaux de toiture, les infiltrations, la réfection et les contraintes d’un chantier local."
            />
            <div className="mt-10">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contractorSchema) }} />
    </>
  );
}
