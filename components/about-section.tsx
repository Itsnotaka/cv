interface AboutSectionProps {
  summary: string;
}

export function AboutSection({ summary }: AboutSectionProps) {
  return (
    <section>
      <h2 className="mb-2 text-13 text-gray12 print:mb-0">About</h2>
      <p className="text-13 text-gray11 leading-[1.8]">{summary}</p>
    </section>
  );
}
