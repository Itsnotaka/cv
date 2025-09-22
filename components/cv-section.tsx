interface CvSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// biome-ignore lint/style/useNamingConvention: CVSection is a valid name
export function CVSection({ title, children, className = "" }: CvSectionProps) {
  return (
    <section className={`mb-10 print:mb-6 ${className}`}>
      <h2 className="mb-6 font-700 text-13 text-high-contrast leading-16">
        {title}
      </h2>
      {children}
    </section>
  );
}
