interface HciMethodsProps {
  methods?: string[];
}

export function HciMethods({ methods }: HciMethodsProps) {
  if (!methods || methods.length === 0) {
    return null;
  }
  return (
    <section>
      <h2 className="mb-1 font-700 text-13 text-gray12">HCI methods</h2>
      <p className="text-13 text-gray11">{methods.join(", ")}</p>
    </section>
  );
}
