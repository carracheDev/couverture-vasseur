const communes = [
  "Angers",
  "Avrillé",
  "Beaucouzé",
  "Les Ponts-de-Cé",
  "Trélazé",
  "Saint-Barthélemy-d’Anjou",
  "Écouflant",
];

export function LocalAreas() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {communes.map((commune) => (
        <span
          key={commune}
          className="rounded-full border border-[#dfe7ee] bg-[#f8fafb] px-3 py-2 text-sm font-medium text-[#0C131C]"
        >
          {commune}
        </span>
      ))}
    </div>
  );
}
