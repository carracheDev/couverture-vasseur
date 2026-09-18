type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-[#dfe7ee] bg-white p-5 text-left shadow-sm"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none marker:hidden">
            <span className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-[#0C131C]">{item.question}</h3>
              <span className="text-2xl leading-none text-[#0061C6] transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[#475467]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
