"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const projectType = String(form.get("projectType") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Demande de devis - ${projectType}`);
    const body = encodeURIComponent(
      [
        "Bonjour,",
        "",
        "Je souhaite demander un devis pour le projet suivant :",
        `Type de projet : ${projectType}`,
        `Nom : ${name}`,
        `Téléphone : ${phone}`,
        `Email : ${email}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:sodjinoucarrache457@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      className="space-y-4 rounded-[28px] border border-[#dfe7ee] bg-white p-5 shadow-[0_18px_50px_rgba(12,19,28,0.08)] md:p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#0C131C]">
          Nom
          <input
            type="text"
            name="name"
            required
            placeholder="Votre nom"
            className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
          />
        </label>
        <label className="block text-sm font-medium text-[#0C131C]">
          Téléphone
          <input
            type="tel"
            name="phone"
            required
            placeholder="02 41 87 34 12"
            className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-[#0C131C]">
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="prenom@mail.fr"
          className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
        />
      </label>

      <label className="block text-sm font-medium text-[#0C131C]">
        Type de projet
        <select
          name="projectType"
          className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
        >
          <option>Réfection de toiture</option>
          <option>Réparation de fuite</option>
          <option>Pose d’ardoise</option>
          <option>Zinguerie / gouttières</option>
          <option>Isolation de combles</option>
          <option>Autre</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-[#0C131C]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Expliquez votre projet, les symptômes constatés et les éventuelles contraintes du bâtiment."
          className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#0061C6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#004d9d]"
      >
        {sent ? "Votre email est prêt à être envoyé" : "Demander un devis gratuit sous 48 h"}
      </button>
      <p className="text-center text-xs leading-5 text-[#667085]">
        Votre logiciel de messagerie s’ouvrira avec votre demande déjà préparée.
      </p>
    </form>
  );
}
