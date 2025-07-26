interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CVSection({ title, children, className = '' }: CVSectionProps) {
  return (
    <section className={`mb-10 print:mb-6 ${className}`}>
      <h2 className="mb-6 font-700 text-13 text-high-contrast leading-16">
        {title}
      </h2>
      {children}
    </section>
  );
}
