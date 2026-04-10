"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { about } from "@/data/about";
import { experience } from "@/data/experience";

export function About() {
  return (
    <Section id="about" title="Profile" subtitle="Analytics professional overview">
      <AnimateIn>
        <div className="card rounded-xl p-6">
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
            {about.summary}
          </p>
        </div>
      </AnimateIn>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        {/* Core strengths */}
        <div className="lg:col-span-2">
          <AnimateIn delay={100}>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              <svg className="h-3.5 w-3.5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Core Stats
            </h3>
          </AnimateIn>
          <div className="space-y-2">
            {about.strengths.map((s, i) => (
              <AnimateIn key={s} delay={150 + i * 80}>
                <div className="card flex items-center gap-3 px-4 py-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-soft)] font-mono text-xs font-bold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {s}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="lg:col-span-3">
          <AnimateIn delay={100}>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              <svg className="h-3.5 w-3.5 text-[var(--color-energy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              Experience Timeline
            </h3>
          </AnimateIn>
          <div className="space-y-3">
            {experience.map((exp, i) => (
              <AnimateIn key={exp.company} delay={200 + i * 100}>
                <div className="card group relative overflow-hidden p-5">
                  {i === 0 && (
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-energy)]" />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {exp.role}
                      </p>
                    </div>
                    <span className="flex-shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--color-text-muted)]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {exp.responsibilities.slice(0, 2).map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-xs text-[var(--color-text-muted)]"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]/40" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <AnimateIn delay={200}>
        <div className="mt-8 rounded-xl border border-[var(--color-accent)]/10 bg-[var(--color-accent-soft)] p-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Key Achievements
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <div key={h} className="flex gap-2.5 text-sm text-[var(--color-text-secondary)]">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {h}
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
