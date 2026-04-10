"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to opportunities in data analytics"
    >
      <AnimateIn>
        <div className="card relative overflow-hidden rounded-xl p-8 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/6 blur-[60px]" />

          <div className="relative">
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
              Let&apos;s Connect
            </h3>
            <p className="mt-3 text-lg text-[var(--color-text-muted)]">
              Interested in connecting with fellow data professionals and exploring new opportunities.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--color-accent-bright)] hover:shadow-[0_0_20px_var(--color-accent-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send an Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)] glow-hover focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1.5">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {profile.location}
              </span>
              <span className="h-3 w-px bg-[var(--color-border)]" />
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
                </span>
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
