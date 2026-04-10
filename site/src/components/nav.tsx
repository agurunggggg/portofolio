"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#hero", label: "Home", icon: HomeIcon },
  { href: "#about", label: "Profile", icon: ProfileIcon },
  { href: "#projects", label: "Projects", icon: ProjectsIcon },
  { href: "#skills", label: "Skills", icon: SkillsIcon },
  { href: "#contact", label: "Contact", icon: ContactIcon },
];

export function Sidebar() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));

    function handleScroll() {
      const viewportCenter = window.innerHeight / 2;
      let closest = sectionIds[0];
      let closestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Distance from section top to viewport center
        const dist = Math.abs(rect.top - viewportCenter + rect.height / 2);

        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }

      // At the very bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        closest = sectionIds[sectionIds.length - 1];
      }

      setActive(`#${closest}`);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/95 px-2 py-2 backdrop-blur-md lg:hidden">
        {links.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 transition-colors ${
                isActive
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)]"
              }`}
              aria-label={link.label}
            >
              {isActive && (
                <span className="absolute -top-2 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--color-accent)]" />
              )}
              <link.icon active={isActive} size={20} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Desktop icon rail */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[68px] flex-col items-center border-r border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-6 lg:flex">
        {/* AG Favicon Logo */}
        <a href="#hero" className="group mb-6 block">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-transform duration-200 group-hover:scale-110">
            <Image
              src="/favicon.svg"
              alt="AG"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            {/* Subtle glow behind */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-energy)] opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-40" />
          </div>
        </a>

        {/* Nav icons */}
        <nav className="flex flex-1 flex-col items-center gap-1">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white shadow-[0_0_16px_var(--color-accent-glow)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
                }`}
                aria-label={link.label}
              >
                <link.icon active={isActive} size={18} />

                {/* Tooltip */}
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-[var(--color-bg-elevated)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-primary)] opacity-0 shadow-lg ring-1 ring-[var(--color-border)] transition-opacity duration-150 group-hover:opacity-100">
                  {link.label}
                  <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-l border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]" />
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom: XP bar vertical */}
        <div className="mt-auto flex flex-col items-center gap-2">
          <div className="h-16 w-1.5 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]">
            <div
              className="w-full rounded-full bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-energy)]"
              style={{ height: "85%" }}
            />
          </div>
          <span className="font-mono text-[9px] font-medium text-[var(--color-text-muted)]">
            10Y+
          </span>
        </div>
      </aside>
    </>
  );
}

/* ── Icon components ── */

function HomeIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function ProfileIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function ProjectsIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
    </svg>
  );
}

function SkillsIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function ContactIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
