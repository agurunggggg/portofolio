import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { KPICard } from "@/components/ui/kpi-card";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Anil Gurung — Revenue Management Analyst`,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-12 sm:py-16">
      {/* Background grid */}
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1.5 text-sm text-[var(--color-text-muted)] shadow-sm transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]"
        >
          <svg className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mt-8">
          {/* Tools tag */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-glow" />
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              {project.tools.join(" / ")}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {project.summary}
          </p>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Problem */}
        <CaseSection
          title="The Problem"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          }
        >
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {project.problem}
          </p>
        </CaseSection>

        {/* Dataset */}
        <CaseSection
          title="Dataset & Context"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          }
        >
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {project.dataset}
          </p>
        </CaseSection>

        {/* Analysis */}
        <CaseSection
          title="Analysis Process"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          }
        >
          <ol className="space-y-3">
            {project.analysis.map((step, i) => (
              <li key={i} className="flex gap-3 text-[var(--color-text-secondary)]">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] font-mono text-xs font-bold text-[var(--color-accent)]">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </CaseSection>

        {/* Insights */}
        <CaseSection
          title="Key Insights"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          }
        >
          <ul className="space-y-3">
            {project.insights.map((insight) => (
              <li key={insight} className="flex gap-2.5 text-sm text-[var(--color-text-secondary)]">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {insight}
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* Impact */}
        <div className="mt-8 rounded-xl border border-[var(--color-accent)]/15 bg-[var(--color-accent-soft)] p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
            Business Impact
          </div>
          <p className="mt-3 leading-relaxed text-[var(--color-text-primary)]">
            {project.impact}
          </p>
        </div>

        {/* Footer navigation */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-bright)]"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]">
        <span className="text-[var(--color-accent)]">{icon}</span>
        {title}
      </div>
      <div className="card rounded-xl p-5">{children}</div>
    </div>
  );
}
