import { ProjectKPI } from "@/types";

export function KPICard({ label, value, description }: ProjectKPI) {
  return (
    <div className="card group relative overflow-hidden p-5">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 h-12 w-12 bg-gradient-to-bl from-[var(--color-accent-soft)] to-transparent" />

      <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-[var(--color-accent)] sm:text-3xl">
        {value}
      </p>
      {description && (
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          {description}
        </p>
      )}

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
