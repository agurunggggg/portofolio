"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-32">
      {/* ── Rich dark dashboard background ── */}

      {/* Dot grid pattern */}
      <div className="bg-dots absolute inset-0" />

      {/* Large ambient orbs */}
      <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[var(--color-accent)]/6 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-energy)]/6 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/3 blur-[100px]" />

      {/* Dashboard wireframe shapes */}
      <div className="absolute top-20 right-[12%] h-40 w-40 rotate-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/30 backdrop-blur-sm" />
      <div className="absolute bottom-24 left-[8%] h-28 w-28 -rotate-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/20 backdrop-blur-sm" />
      <div className="absolute top-[40%] right-[6%] h-20 w-20 rotate-45 rounded-lg border border-[var(--color-accent)]/10" />

      {/* Mini chart decoration (top right) */}
      <div className="absolute top-24 right-[14%] flex h-32 w-32 items-end gap-1 rounded-xl p-3 opacity-20">
        <div className="flex-1 rounded-t bg-[var(--color-accent)]/60" style={{ height: "40%" }} />
        <div className="flex-1 rounded-t bg-[var(--color-accent)]/60" style={{ height: "70%" }} />
        <div className="flex-1 rounded-t bg-[var(--color-energy)]/60" style={{ height: "55%" }} />
        <div className="flex-1 rounded-t bg-[var(--color-accent)]/60" style={{ height: "85%" }} />
        <div className="flex-1 rounded-t bg-[var(--color-energy)]/60" style={{ height: "65%" }} />
      </div>

      {/* Floating data points */}
      <div className="absolute top-28 left-[28%] h-2 w-2 rounded-full bg-[var(--color-accent)]/40 animate-pulse-glow" />
      <div className="absolute top-48 right-[22%] h-3 w-3 rounded-full bg-[var(--color-energy)]/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-36 left-[42%] h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/35 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[55%] left-[18%] h-1.5 w-1.5 rounded-full bg-[var(--color-social)]/25 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Vertical accent lines */}
      <div className="absolute top-0 right-[18%] h-full w-px bg-gradient-to-b from-transparent via-[var(--color-accent)]/8 to-transparent" />
      <div className="absolute top-0 left-[35%] h-full w-px bg-gradient-to-b from-transparent via-[var(--color-energy)]/5 to-transparent" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
            </span>
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              Available for opportunities
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-[var(--color-text-primary)]">{profile.name}</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="mt-5 text-2xl font-medium sm:text-3xl">
            <span className="gradient-text">{profile.title}</span>
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
            {profile.tagline}
          </p>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            <QuickStat value="10+" label="Years Exp" accent="accent" />
            <QuickStat value="4" label="Projects" accent="energy" />
            <QuickStat value="3" label="Companies" accent="social" />
          </div>
        </AnimateIn>

        <AnimateIn delay={500}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function QuickStat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "accent" | "energy" | "social";
}) {
  const colorMap = {
    accent: "text-[var(--color-accent)]",
    energy: "text-[var(--color-energy)]",
    social: "text-[var(--color-social)]",
  };

  return (
    <div className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-card-hover)] glow-hover">
      <p className={`text-4xl font-bold ${colorMap[accent]}`}>{value}</p>
      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </p>
    </div>
  );
}
