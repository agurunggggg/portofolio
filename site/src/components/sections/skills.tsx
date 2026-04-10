"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { skills } from "@/data/skills";
import { certifications } from "@/data/education";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technical and domain capabilities"
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {skills.map((group, i) => (
          <AnimateIn key={group.category} delay={i * 100}>
            <div className="card rounded-xl p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                {group.category}
              </h3>
              <div className="space-y-2.5">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-[var(--color-bg-elevated)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={300}>
        <div className="mt-8">
          <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            <svg className="h-3.5 w-3.5 text-[var(--color-social)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            Certifications & Training
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <AnimateIn key={cert.name} delay={350 + i * 60}>
                <div className="card group flex items-start gap-3 px-4 py-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[var(--color-social-soft)]">
                    <svg className="h-3 w-3 text-[var(--color-social)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {cert.name}
                    </p>
                    {cert.issuer && (
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
