interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CVSection({ title, children, className = '' }: CVSectionProps) {
  return (
    <section className={`mb-8 print:mb-6 ${className}`}>
      <h2 className="mb-4 font-weight-700 text-13 text-high-contrast leading-16 capitalize">
        {title}
      </h2>
      {children}
    </section>
  );
}
