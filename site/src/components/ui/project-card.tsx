import Link from "next/link";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card hover-lift group relative block overflow-hidden p-6"
    >
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/40 to-[var(--color-energy)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Tools tag */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-glow" />
        <span className="font-mono text-xs text-[var(--color-text-muted)]">
          {project.tools.join(" / ")}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
        {project.title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
        {project.summary}
      </p>

      {/* KPI strip */}
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4">
        {project.kpis.map((kpi) => (
          <div key={kpi.label}>
            <p className="text-xl font-bold text-[var(--color-accent)]">
              {kpi.value}
            </p>
            <p className="text-[11px] text-[var(--color-text-muted)]">
              {kpi.label}
            </p>
          </div>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)]">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </Link>
  );
}
