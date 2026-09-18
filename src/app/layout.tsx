import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.couverture-vasseur.fr"),
  title: {
    default: "Couverture Vasseur | Couvreur à Angers (49)",
    template: "%s | Couverture Vasseur",
  },
  description:
    "Couvreur à Angers spécialiste de la toiture en ardoise, de la rénovation, de la zinguerie et des réparations de fuite.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Spécialiste de l’ardoise naturelle à Angers pour les travaux de toiture, zinguerie et réparation urgente.",
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Toiture en ardoise, rénovation et intervention rapide à Angers. Devis gratuit sous 48 h.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="min-h-screen bg-[#f6f7f8] text-[#0C131C] antialiased">
        <a
          href="#contenu"
          className="fixed left-4 top-[-100px] z-[60] rounded-full bg-[#0061C6] px-4 py-2 text-sm font-semibold text-white transition focus:top-4"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
