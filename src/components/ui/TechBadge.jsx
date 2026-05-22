export default function TechBadge({ label }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30">
      {label}
    </span>
  );
}
