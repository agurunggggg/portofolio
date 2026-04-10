export function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]">
      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]/40" />
      {name}
    </span>
  );
}
