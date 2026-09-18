"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/refection-toiture-ardoise-angers" },
  { label: "Angers", href: "/angers" },
  { label: "Réalisations", href: "/#realisations" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe7ee] bg-[#0C131C]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1180px] items-center justify-between gap-4 py-4 md:w-[calc(100%-48px)]">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Couverture Vasseur, accueil">
          <span className="inline-flex h-12 w-[76px] items-center justify-center rounded-lg bg-white px-1.5 shadow-sm transition duration-300 group-hover:-rotate-2 group-hover:shadow-lg">
            <Image
              src="/logo-couverture-vasseur (1).png"
              alt="Couverture Vasseur"
              width={1437}
              height={919}
              className="h-10 w-full object-contain"
            />
          </span>
          <span>
            <span className="block text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-white">Couverture Vasseur</span>
            <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.14em] text-white/70">Couvreur à Angers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/85 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+33241873412"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Phone size={14} />
            02 41 87 34 12
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0061C6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0057b3]"
          >
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0C131C] px-4 py-5 md:hidden" aria-label="Navigation mobile">
          <div className="flex flex-col gap-4 text-base text-white/85">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href="tel:+33241873412" className="mt-2 inline-flex items-center gap-2 text-white">
              <Phone size={16} /> 02 41 87 34 12
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0061C6] px-4 py-3 text-sm font-bold text-white"
            >
              Demander un devis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
