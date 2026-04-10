import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-7 py-3.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]";

  const styles = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-bright)] shadow-sm hover:shadow-[0_0_20px_var(--color-accent-glow)]",
    secondary:
      "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)] glow-hover",
  };

  const className = `${base} ${styles[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
