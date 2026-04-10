import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-[var(--color-text-muted)]">
            {profile.name} &middot; {profile.location}
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Crafted with care by{" "}
            <span className="font-medium text-[var(--color-text-secondary)]">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://gurungboi.github.io/"
                className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-bright)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Gurungboi portfolio (opens in a new tab)"
              >
                Gurungboi
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
