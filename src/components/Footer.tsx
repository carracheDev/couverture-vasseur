import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const communes = [
  "Angers",
  "Avrillé",
  "Beaucouzé",
  "Les Ponts-de-Cé",
  "Trélazé",
  "Saint-Barthélemy-d’Anjou",
  "Écouflant",
];

export function Footer() {
  return (
    <footer className="bg-[#0C131C] py-16 text-white">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1180px] gap-10 md:w-[calc(100%-48px)] md:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Couverture Vasseur accueil">
            <span className="inline-flex h-14 w-[92px] items-center justify-center rounded-lg bg-white px-1.5">
              <Image
                src="/logo-couverture-vasseur (1).png"
                alt="Couverture Vasseur"
                width={1437}
                height={919}
                className="h-12 w-full object-contain"
              />
            </span>
            <span>
              <span className="block text-[0.8rem] font-extrabold uppercase tracking-[0.16em] text-white">Couverture Vasseur</span>
              <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.14em] text-white/70">Couvreur à Angers</span>
            </span>
          </Link>
          <p className="mt-6 max-w-[260px] text-sm text-white/70">
            Couvreur à Angers, spécialiste de l’ardoise naturelle et des interventions de toiture en Maine-et-Loire.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white/60">Navigation</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/" className="transition hover:text-white">Accueil</Link></li>
            <li><Link href="/refection-toiture-ardoise-angers" className="transition hover:text-white">Prestations</Link></li>
            <li><Link href="/angers" className="transition hover:text-white">Angers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white/60">Prestations</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Réfection complète</li>
            <li>Réparation et fuite</li>
            <li>Ardoise naturelle</li>
            <li>Zinguerie</li>
            <li>Isolation de combles</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white/60">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone size={15} className="text-[#98c3ff]" /> <a href="tel:+33241873412" className="hover:text-white">02 41 87 34 12</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 text-[#98c3ff]" /> <span>Angers et 30 km autour</span></li>
          </ul>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Demander un devis <ArrowUpRight size={16} className="text-[#98c3ff]" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 w-[calc(100%-32px)] max-w-[1180px] border-t border-white/10 pt-6 md:w-[calc(100%-48px)]">
        <div className="flex flex-col gap-4 text-[0.7rem] uppercase tracking-[0.14em] text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Couverture Vasseur</span>
          <div className="flex flex-wrap gap-3">
            {communes.map((commune) => (
              <span key={commune}>{commune}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
