type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[680px]"}>
      <p
        className={
          light
            ? "mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#bfe1ff]"
            : "mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0061C6]"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "text-[clamp(2.25rem,4vw,4rem)] leading-[1.02] tracking-[-0.05em] text-white"
            : "text-[clamp(2.15rem,4vw,3.6rem)] leading-[1.08] tracking-[-0.05em] text-[#0C131C]"
        }
      >
        {title}
      </h2>
      <p className={light ? "mt-5 text-base text-white/75" : "mt-5 text-base text-[#475467]"}>{intro}</p>
    </div>
  );
}
