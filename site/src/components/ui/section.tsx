"use client";

import { AnimateIn } from "@/components/ui/animate-in";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <AnimateIn>
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                  {title}
                </h2>
              </div>
              {subtitle && (
                <p className="mt-2 pl-11 text-base text-[var(--color-text-muted)]">
                  {subtitle}
                </p>
              )}
            </div>
          </AnimateIn>
        )}
        {children}
      </div>
    </section>
  );
}
