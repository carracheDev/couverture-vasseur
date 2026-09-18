"use client";

export function QuoteForm() {
  return (
    <form
      className="space-y-4 rounded-[28px] border border-[#dfe7ee] bg-white p-5 shadow-[0_18px_50px_rgba(12,19,28,0.08)] md:p-7"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#0C131C]">
          Nom
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
          />
        </label>
        <label className="block text-sm font-medium text-[#0C131C]">
          Téléphone
          <input
            type="tel"
            name="phone"
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
          rows={5}
          placeholder="Expliquez votre projet, les symptômes constatés et les éventuelles contraintes du bâtiment."
          className="mt-2 w-full rounded-xl border border-[#dfe7ee] bg-[#f8fafb] px-4 py-3 text-sm text-[#0C131C] outline-none transition focus:border-[#0061C6] focus:ring-2 focus:ring-[#0061C6]/20"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#0061C6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#004d9d]"
      >
        Demander un devis gratuit sous 48 h
      </button>
    </form>
  );
}
