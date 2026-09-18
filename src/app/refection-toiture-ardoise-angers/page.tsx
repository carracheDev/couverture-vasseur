import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Check, Droplets, House, MapPinned, ShieldCheck } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { buildFAQSchema, buildRoofingContractorSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Réfection de toiture en ardoise à Angers (49) | Couverture Vasseur",
  description:
    "Réfection de toiture en ardoise à Angers : diagnostic, dépose, pose, sous-toiture, zinguerie et finitions. Devis gratuit sous 48 h, intervention locale.",
  alternates: { canonical: "/refection-toiture-ardoise-angers" },
  openGraph: {
    title: "Réfection de toiture en ardoise à Angers | Couverture Vasseur",
    description:
      "Conseils, diagnostic et intervention sur toiture en ardoise à Angers. Expertise locale pour les maisons anciennes, copropriétés et bâtiments à contraintes.",
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
  },
};

const faqItems = [
  {
    question: "Quand faut-il envisager une réfection complète de toiture ?",
    answer:
      "Quand les ardoises sont cassées, dégradées, soulevées, quand les infiltrations se multiplient ou quand la sous-toiture ne remplit plus son rôle. Une réfection complète devient souvent la solution la plus fiable lorsque l’ancien support est fortement dégradé.",
  },
  {
    question: "Comment sait-on qu’une toiture est en difficulté ?",
    answer:
      "Les signes sont nombreux : taches sur les plafonds, humidité dans les combles, moussissures, ardoises fracturées, solins abîmés, problèmes de gouttières ou d’évacuation. Un diagnostic permet de distinguer la simple réparation d’une réfection intégrale.",
  },
  {
    question: "Quelles sont les pièces les plus sensibles ?",
    answer:
      "Le faîtage, les noues, les solins, les crochets, les liteaux et les zones autour des cheminées ou des fenêtres de toit. Ce sont souvent ces éléments qui conditionnent la résistance de l’ensemble de la couverture.",
  },
  {
    question: "Que comprend la réfection d’une toiture en ardoise ?",
    answer:
      "La dépose de l’ancien couvert, le contrôle de la charpente et du support, le remplacement de la sous-toiture, la pose des ardoises et la finition des éléments de zinguerie pour assurer l’étanchéité.",
  },
  {
    question: "Faut-il prévoir une déclaration préalable ou une autorisation ?",
    answer:
      "Selon le bâtiment, la situation et les règles locales, une déclaration préalable peut être nécessaire. Sur les constructions anciennes ou en copropriété, la conformité au projet est un point important à vérifier avant le chantier.",
  },
  {
    question: "Que se passe-t-il en copropriété ?",
    answer:
      "Le chantier doit tenir compte de la conformité du bâtiment, des exigences de la copropriété et des contraintes de sécurité. Nous prenons cela en compte dès le diagnostic pour éviter des surprises pendant les travaux.",
  },
  {
    question: "Le coût dépend-il de l’accès au chantier ?",
    answer:
      "Oui. Un accès compliqué, une rue étroite, un stationnement limité ou un échafaudage spécifique peuvent modifier la logistique, le temps de chantier et le prix final.",
  },
  {
    question: "Quand la réception du chantier est-elle faite ?",
    answer:
      "À la fin des travaux, nous vérifions la qualité des finitions, le bon drainage, l’étanchéité, la pose des éléments de zinguerie et la cohérence globale du toit. Une visite de réception permet aussi d’expliquer les points clés de maintenance.",
  },
];

const steps = [
  "Diagnostic détaillé de la couverture, des infiltrations et de l’état du support",
  "Dépose des éléments dégradés et contrôle de la charpente, des liteaux et des crochets",
  "Pose d’un écran de sous-toiture adapté à la pente et aux exigences du bâtiment",
  "Reprise de la couverture en ardoise avec soin sur les points singuliers et les détails de finition",
  "Mise en œuvre de la zinguerie, du faîtage, des solins et contrôle final avant réception",
];

const costFactors = [
  "Surface et pente de la toiture",
  "État de la charpente et du support",
  "Difficulté d’accès et type d’échafaudage",
  "Contrainte ABF, copropriété ou patrimoine",
  "Type d’ardoise et éléments de finition",
];

const roofIssues = [
  "Ardoises fendues ou cassées",
  "Infiltration au niveau du faîtage, des noues ou des solins",
  "Humidité dans les combles et présence de mousse",
  "Gouttières bouchées ou dégradées",
  "Dégradation des crochets, liteaux et sous-toiture",
];

const contractorSchema = buildRoofingContractorSchema();
const faqSchema = buildFAQSchema(faqItems);

export default function RoofingPage() {
  return (
    <>
      <Header />
      <main id="contenu" className="bg-[#f6f7f8] text-[#0C131C]">
        <section className="bg-[#0C131C] pb-16 pt-10 text-white md:pb-20">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] items-center gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#bfe1ff]">Réfection toiture • Angers</p>
              <h1 className="text-[clamp(2.7rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.06em] text-white">
                Réfection de toiture en ardoise à Angers
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-white/75">
                La réfection de toiture en ardoise ne se limite pas au remplacement des ardoises. Elle demande une lecture fine du bâtiment, du support, de la pente et des points singuliers pour garantir une couverture durable et propre.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0057b3]">
                  Demander un devis
                </Link>
                <Link href="/angers" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Voir la page Angers <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3">
              <Image
                src="/images/toiture-ardoise-angers.jpg"
                alt="Couverture en ardoise naturelle à rénover"
                width={1200}
                height={900}
                className="h-[440px] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Quand rénover ?"
                title="Des signes qui ne doivent pas être ignorés"
                intro="Une toiture vieillissante ne révèle pas toujours son état de façon visible. Les infiltrations, les fuites récurrentes et les ardoises dégradées sont souvent des signes tardifs d’un mode de couverture qui a perdu son efficacité."
              />
              <div className="mt-8 space-y-4">
                {roofIssues.map((issue) => (
                  <div key={issue} className="flex items-start gap-3 rounded-2xl border border-[#dfe7ee] bg-white p-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0061C6] text-white">
                      <Check size={14} />
                    </span>
                    <p className="text-sm leading-7 text-[#475467]">{issue}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Le diagnostic est la clé</h3>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Un toit peut présenter un seul point de fuite et cacher un problème plus général sur la sous-toiture, le faîtage ou la charpente. Nous regardons l’ensemble du système pour déterminer si l’intervention doit se limiter à une reprise partielle ou si une réfection complète est plus rationnelle.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Le diagnostic tient également compte de l’âge de la couverture et de l’historique des réparations. Une toiture qui a connu plusieurs reprises sur des matériaux différents peut présenter des zones plus fragiles, des recouvrements irréguliers ou des raccords difficiles à maintenir. Dans ce cas, le devis distingue les travaux indispensables, les améliorations utiles et les options qui peuvent être reportées.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Cette lecture permet aussi de hiérarchiser les travaux. Une faiblesse sur un versant peu exposé ne présente pas le même niveau d’urgence qu’une rive ouverte au vent ou qu’un raccord au-dessus d’une pièce habitée. Le propriétaire dispose ainsi d’une vision claire du risque, du calendrier et des priorités avant de s’engager.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Dans un logement occupé, cette hiérarchisation aide également à organiser les interventions. Une mise hors d’eau urgente peut être réalisée avant le programme complet, tandis que les travaux plus importants sont planifiés avec l’échafaudage, les occupants et les éventuelles autorisations. Le but reste de protéger le bâtiment sans imposer une décision précipitée.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Nous expliquons aussi les conséquences de chaque choix. Une réparation rapide peut sécuriser une fuite urgente, mais elle ne traite pas nécessairement une couverture arrivée en fin de vie. À l’inverse, une réfection totale représente un investissement plus important et doit être justifiée par l’état général du toit, la durée d’occupation prévue et les contraintes du bâtiment.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#edf3f8] p-4">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Dégradation</p>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">Ardoises cassees, joints fragiles, sous-toiture vieillissante</p>
                </div>
                <div className="rounded-2xl bg-[#edf3f8] p-4">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">Infiltration</p>
                  <p className="mt-3 text-sm leading-7 text-[#475467]">Fuites sur cheminées, solins, noues ou fenêtres de toit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-2">
            <SectionHeading
              eyebrow="Le bon niveau d’intervention"
              title="Reprise ciblée ou réfection totale : comment décider ?"
              intro="Une ardoise cassée ne signifie pas automatiquement qu’il faut refaire tout le toit. À l’inverse, une succession de réparations peut coûter plus cher et laisser une couverture fragile."
            />
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Quand une reprise ciblée suffit</h3>
              <p className="mt-4 text-base leading-8 text-[#475467]">Une réparation localisée peut être pertinente lorsque la couverture reste homogène, que la charpente est saine et que l’infiltration provient d’un point clairement identifié : solin, noue, faîtage ou quelques ardoises.</p>
              <h3 className="mt-6 text-2xl font-semibold text-[#0C131C]">Quand la réfection devient plus raisonnable</h3>
              <p className="mt-4 text-base leading-8 text-[#475467]">Lorsque les ardoises, les crochets, le liteaunage et l’écran sont atteints sur plusieurs versants, une réfection complète permet de repartir sur un système cohérent et de limiter les interventions répétées.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Démarche"
              title="De la dépose à la finition, chaque étape compte"
              intro="La bonne pose d’une toiture en ardoise repose sur la qualité du support, du traitement des zones singulières et du choix des éléments de finition."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[24px] border border-[#dfe7ee] bg-white p-5 shadow-sm">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#0061C6]">0{index + 1}</p>
                  <p className="mt-4 text-lg font-semibold text-[#0C131C]">{step.split(",")[0]}</p>
                  <p className="mt-2 text-sm leading-7 text-[#475467]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Points techniques à contrôler</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#475467]">
                <li className="flex gap-3"><span className="mt-1 text-[#0061C6]">•</span><span>Faîtage et solins : zones sensibles à l’étanchéité et au vent</span></li>
                <li className="flex gap-3"><span className="mt-1 text-[#0061C6]">•</span><span>Liteaux et crochets : ils assurent la tenue de la couverture et son maintien sur la pente</span></li>
                <li className="flex gap-3"><span className="mt-1 text-[#0061C6]">•</span><span>Écran de sous-toiture : protège le support et limite les infiltrations</span></li>
                <li className="flex gap-3"><span className="mt-1 text-[#0061C6]">•</span><span>Fenêtres de toit, cheminées, noues et zones de jonction</span></li>
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="Réfection complète"
                title="Une toiture neuve n’a de sens que si le support est sain"
                intro="Le remplacement d’une couverture est l’occasion de revoir la sous-toiture, la zinguerie, l’évacuation de l’eau et l’étanchéité générale. C’est aussi le moment de corriger les défauts qui avaient été négligés sur la couverture précédente."
              />
              <p className="mt-6 text-base leading-8 text-[#475467]">
                Nous travaillons en tenant compte des spécificités du bâti ancien angevin : toitures complexes, pentes plus élevées, chéneaux, accès étroits et contraintes de copropriété. Cela permet d’éviter des interventions trop standardisées et peu adaptées à la maison.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                La dépose est réalisée avec méthode afin de distinguer les matériaux qui peuvent être évacués, ceux qui doivent être triés et les éléments conservés pour respecter l’aspect de la construction. Les ouvertures, les cheminées et les murs mitoyens sont protégés pendant les différentes phases. Cette organisation est particulièrement importante lorsque les occupants restent dans le logement pendant les travaux.
              </p>
              <p className="mt-4 text-base leading-8 text-[#475467]">
                Le choix final ne se résume donc pas à une couleur ou à une forme d’ardoise. Il concerne la compatibilité avec la pente, la ventilation, la fixation, les raccords et le contexte architectural. Une toiture cohérente est une toiture qui protège le bâtiment, évacue correctement l’eau et reste réparable dans le temps.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Avant le chantier"
              title="Les démarches à régler avant de monter sur le toit"
              intro="À Angers, la préparation administrative et logistique compte autant que la technique, surtout dans le centre ancien et pour les immeubles en copropriété."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Déclaration préalable</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une modification visible de la couverture, des matériaux ou des ouvertures peut nécessiter une démarche d’urbanisme.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">ABF et patrimoine</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les bâtiments situés dans un périmètre protégé demandent une attention particulière sur l’ardoise, les teintes et les détails de finition.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Domaine public</h3><p className="mt-3 text-sm leading-7 text-[#475467]">L’échafaudage, la benne et le stationnement doivent être anticipés lorsque le chantier occupe la rue ou le trottoir.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-[#0C131C] py-20 text-white md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Tarification"
              title="Les éléments qui font varier le prix"
              intro="Le devis prend en compte la configuration du toit, la complexité du chantier et les travaux de finition. Une bonne estimation ne se fait pas au jugé : elle repose sur le diagnostic du chantier."
              light
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {costFactors.map((factor) => (
                <div key={factor} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/75">
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Les contraintes locales"
              title="Angers impose un cadre précis"
              intro="Dans le centre ancien et sur les logements de plusieurs lots, les interventions sur toiture doivent être pensées avec calme et méthode. Les tâches de sécurité, l’accès et la coordination jouent un rôle important dans le bon déroulement du chantier."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]"><Building2 size={18} /></div>
                <h3 className="text-xl font-semibold text-[#0C131C]">ABF / patrimoine</h3>
                <p className="mt-3 text-sm leading-7 text-[#475467]">Les contraintes liées aux bâtiments de France ou au patrimoine demandent de la finesse sur le choix des matériaux et des finitions.</p>
              </div>
              <div className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]"><House size={18} /></div>
                <h3 className="text-xl font-semibold text-[#0C131C]">Copropriété</h3>
                <p className="mt-3 text-sm leading-7 text-[#475467]">L’organisation de chantier, la sécurité et les communications sont essentiels dès le début des travaux.</p>
              </div>
              <div className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5ff] text-[#0061C6]"><ShieldCheck size={18} /></div>
                <h3 className="text-xl font-semibold text-[#0C131C]">Sécurité</h3>
                <p className="mt-3 text-sm leading-7 text-[#475467]">Échafaudage, accès, gestion des déchets et coordination des risques sont tenus en compte au jour le jour.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Lire les symptômes"
              title="Les signes visibles ne racontent pas toujours toute l’histoire"
              intro="Une infiltration peut apparaître loin de la zone où l’eau entre réellement. C’est pourquoi une recherche de fuite sérieuse commence par une lecture globale du toit et des combles."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Auréoles au plafond</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une trace peut correspondre à une infiltration ancienne, à une condensation ou à un défaut autour d’une cheminée. Sa forme et son évolution donnent des indications, mais seule l’observation du toit permet de confirmer la cause.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Lumière dans les combles</h3><p className="mt-3 text-sm leading-7 text-[#475467]">De petits passages de lumière peuvent être normaux selon les ouvertures, mais une lumière visible au droit d’un raccord ou d’une ardoise déplacée mérite un contrôle avant les prochaines pluies.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Ardoises qui bougent</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Le déplacement d’une ardoise peut révéler un crochet fatigué, un liteau qui travaille ou une exposition importante au vent. Remplacer la seule pièce sans vérifier son environnement peut laisser une faiblesse voisine.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Faîtage descellé</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Le faîtage protège le point haut du toit et subit directement le vent. Des fissures, un déplacement ou des joints ouverts doivent être traités avant que l’eau ne pénètre dans la structure.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Solins fissurés</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les solins assurent la jonction entre la couverture et un mur, une cheminée ou une fenêtre. Une fissure fine peut suffire à créer une infiltration répétée, surtout lorsque la pluie est poussée par le vent.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Mousse persistante</h3><p className="mt-3 text-sm leading-7 text-[#475467]">La mousse signale un environnement humide et peut retenir l’eau sur les éléments de couverture. Le traitement doit être adapté à l’état des ardoises et ne pas fragiliser les fixations.</p></article>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Organisation du chantier"
              title="De la visite de relevé à la réception, ce qui se passe concrètement"
              intro="Un chantier de réfection est plus simple à vivre lorsque chaque étape est expliquée. Le propriétaire sait ce qui va être démonté, ce qui sera conservé et comment le toit sera protégé pendant les travaux."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm"><h3 className="text-2xl font-semibold text-[#0C131C]">La visite et les relevés</h3><p className="mt-4 text-base leading-8 text-[#475467]">La première visite sert à comprendre le bâtiment, pas seulement à mesurer sa surface. Nous relevons les versants, les pentes, les ouvertures, les cheminées, les noues et les accès. Les combles sont observés lorsque cela est possible afin de repérer les traces d’humidité, la ventilation ou l’état apparent du support.</p><p className="mt-4 text-base leading-8 text-[#475467]">Les photos et les observations permettent ensuite de distinguer ce qui relève de l’urgence, de l’entretien ou d’un programme de réfection. Le devis est plus clair parce qu’il s’appuie sur la situation réelle.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm"><h3 className="text-2xl font-semibold text-[#0C131C]">La préparation et la protection</h3><p className="mt-4 text-base leading-8 text-[#475467]">Avant la dépose, les zones de passage, les façades, les fenêtres et les parties communes sont protégées. L’échafaudage est adapté à l’accès et à la hauteur. Une organisation propre limite les poussières, le bruit et les risques pour les occupants.</p><p className="mt-4 text-base leading-8 text-[#475467]">La couverture n’est jamais laissée ouverte sans protection. Selon la météo et l’avancement, le toit est bâché ou traité par zones afin de conserver la mise hors d’eau du bâtiment.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm"><h3 className="text-2xl font-semibold text-[#0C131C]">La pose et les finitions</h3><p className="mt-4 text-base leading-8 text-[#475467]">Les ardoises sont posées en respectant le calepinage, le recouvrement et l’alignement des rangs. Les découpes sont réalisées autour des ouvertures et des ouvrages avec une attention particulière aux points où l’eau change de direction.</p><p className="mt-4 text-base leading-8 text-[#475467]">Les éléments de zinguerie sont ensuite ajustés, les évacuations sont contrôlées et les abords du chantier sont nettoyés. Une réception permet de reprendre les détails avec le client.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm"><h3 className="text-2xl font-semibold text-[#0C131C]">La réception et le suivi</h3><p className="mt-4 text-base leading-8 text-[#475467]">La réception ne consiste pas seulement à regarder la couleur des ardoises. Elle porte sur les raccords, les rives, le faîtage, les gouttières, la circulation de l’eau et l’état de propreté des abords.</p><p className="mt-4 text-base leading-8 text-[#475467]">Les points d’entretien sont expliqués au propriétaire afin qu’il sache quoi surveiller après les premières pluies et les épisodes venteux.</p></article>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Composition d’une toiture"
              title="Ce que comprend réellement une réfection en ardoise"
              intro="Une couverture visible depuis la rue n’est que la partie supérieure d’un ensemble technique. Pour obtenir une toiture durable, chaque couche et chaque raccord doivent fonctionner ensemble."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0C131C]">Le support et le liteaunage</h3>
                <p className="mt-4 text-base leading-8 text-[#475467]">Après la dépose, les liteaux sont contrôlés et remplacés lorsqu’ils sont déformés, fragilisés ou mal espacés. Leur position détermine le pureau, la tenue des crochets et la régularité de la couverture. Nous vérifions aussi les pièces de charpente accessibles afin de ne pas refermer un support humide ou atteint par une dégradation.</p>
                <p className="mt-4 text-base leading-8 text-[#475467]">Cette étape est rarement visible une fois le chantier terminé, mais elle conditionne directement la qualité de la pose. Un alignement approximatif ou un support conservé malgré son état peut provoquer des mouvements, des entrées d’eau et des reprises prématurées.</p>
              </article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0C131C]">L’écran et la ventilation</h3>
                <p className="mt-4 text-base leading-8 text-[#475467]">L’écran de sous-toiture complète la protection contre les pénétrations accidentelles de pluie et la neige poudreuse. Sa mise en œuvre doit rester compatible avec la pente, les raccords et la ventilation du versant. Il ne remplace pas une ardoise correctement posée, mais il renforce la sécurité de l’ensemble.</p>
                <p className="mt-4 text-base leading-8 text-[#475467]">La ventilation limite aussi les phénomènes de condensation sous la couverture. Dans les combles anciens, nous regardons les entrées et sorties d’air, la présence d’isolant et les zones où l’humidité pourrait rester piégée.</p>
              </article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0C131C]">Les ardoises et les fixations</h3>
                <p className="mt-4 text-base leading-8 text-[#475467]">Le choix de l’ardoise dépend de la pente, du format souhaité, de l’exposition et du caractère du bâtiment. Le positionnement des crochets, le recouvrement et l’alignement donnent au versant son étanchéité comme son apparence. Les découpes autour des fenêtres de toit, des cheminées et des noues demandent une attention particulière.</p>
              </article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0C131C]">La zinguerie et les points singuliers</h3>
                <p className="mt-4 text-base leading-8 text-[#475467]">Les noues, solins, rives, faîtages, chéneaux et gouttières dirigent l’eau vers les évacuations. Une couverture peut être neuve et rester vulnérable si ces raccords sont sous-dimensionnés ou mal intégrés. Ils sont donc contrôlés, repris ou remplacés selon leur état et la configuration de la maison.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Matériau et durée"
                title="Pourquoi l’ardoise naturelle reste adaptée à l’Anjou"
                intro="L’ardoise accompagne l’architecture angevine depuis longtemps. Bien choisie et correctement posée, elle protège le bâtiment tout en conservant une silhouette cohérente avec les maisons anciennes."
              />
              <p className="mt-6 text-base leading-8 text-[#475467]">Son intérêt ne tient pas uniquement à son aspect sombre et régulier. Elle se comporte bien sur les pentes nécessaires à l’évacuation de l’eau, accepte des découpes précises autour des ouvrages et permet de respecter les proportions d’une toiture existante. Dans un secteur soumis à des prescriptions patrimoniales, cette continuité visuelle peut être déterminante.</p>
              <p className="mt-4 text-base leading-8 text-[#475467]">La durée d’une couverture dépend toutefois de plusieurs éléments : qualité de la pierre, exposition au vent et à la pluie, état des fixations, entretien des évacuations et qualité des raccords. Une ardoise durable ne compense pas un faîtage négligé ou une gouttière qui déborde régulièrement.</p>
            </div>
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0C131C]">Les contrôles qui prolongent la durée de vie</h3>
              <ul className="mt-6 space-y-4 text-base leading-8 text-[#475467]">
                <li><strong className="text-[#0C131C]">Après les épisodes venteux :</strong> vérifier les ardoises déplacées, les rives et le faîtage.</li>
                <li><strong className="text-[#0C131C]">Avant l’hiver :</strong> nettoyer les gouttières et contrôler les chéneaux.</li>
                <li><strong className="text-[#0C131C]">Dans les combles :</strong> repérer les traces d’humidité ou les entrées de lumière anormales.</li>
                <li><strong className="text-[#0C131C]">Autour des cheminées :</strong> surveiller les solins, les joints et les raccords.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="Après la réception"
              title="Entretenir une toiture rénovée sans l’abîmer"
              intro="La réception du chantier ne marque pas la fin du suivi. Quelques habitudes simples permettent de préserver l’étanchéité et d’éviter que de petits défauts ne deviennent une nouvelle rénovation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Surveiller les évacuations</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Les feuilles, mousses et débris peuvent ralentir l’écoulement. Des gouttières entretenues protègent la façade, les murs et les fondations.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Éviter les nettoyages agressifs</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Un nettoyage mécanique ou une pression mal maîtrisée peut fragiliser la surface des ardoises et déplacer les éléments de couverture.</p></article>
              <article className="rounded-[24px] border border-[#dfe7ee] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold text-[#0C131C]">Réagir aux premiers signes</h3><p className="mt-3 text-sm leading-7 text-[#475467]">Une auréole, une odeur d’humidité ou une ardoise au sol doivent être signalées rapidement pour éviter une dégradation du support.</p></article>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading eyebrow="À lire ensuite" title="Poursuivre votre projet de toiture à Angers" intro="Ces pages permettent de comparer les prestations, les contraintes locales et les prochaines étapes avant de demander un devis." />
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              <Link href="/" className="rounded-2xl border border-[#dfe7ee] bg-white p-5 text-sm font-semibold text-[#0061C6] shadow-sm">Accueil Couverture Vasseur <ArrowRight size={16} className="mt-3" /></Link>
              <Link href="/angers" className="rounded-2xl border border-[#dfe7ee] bg-white p-5 text-sm font-semibold text-[#0061C6] shadow-sm">Couvreur à Angers <ArrowRight size={16} className="mt-3" /></Link>
              <Link href="/#realisations" className="rounded-2xl border border-[#dfe7ee] bg-white p-5 text-sm font-semibold text-[#0061C6] shadow-sm">Voir les réalisations <ArrowRight size={16} className="mt-3" /></Link>
              <Link href="/#contact" className="rounded-2xl border border-[#dfe7ee] bg-white p-5 text-sm font-semibold text-[#0061C6] shadow-sm">Demander un devis <ArrowRight size={16} className="mt-3" /></Link>
            </div>
          </div>
        </section>

        <section className="bg-[#edf3f8] py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions fréquentes sur la réfection d’ardoise"
              intro="Des réponses utiles pour préparer un diagnostic, un chantier et un devis plus précis."
            />
            <div className="mt-10">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
            <div className="rounded-[28px] border border-[#dfe7ee] bg-white p-7 shadow-sm md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#0061C6]">Espace de contact</p>
                  <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.05em] text-[#0C131C]">Un devis gratuit sous 48 h</h2>
                </div>
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0057b3]">
                  Demander un devis
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-3 text-sm text-[#475467] md:flex-row md:items-center">
                <span className="flex items-center gap-2"><BadgeCheck size={16} className="text-[#0061C6]" /> RGE Qualibat</span>
                <span className="flex items-center gap-2"><MapPinned size={16} className="text-[#0061C6]" /> Angers et 30 km autour</span>
                <span className="flex items-center gap-2"><Droplets size={16} className="text-[#0061C6]" /> Intervention fuite 7j/7</span>
              </div>
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
