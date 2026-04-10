"use client";

import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { AnimateIn } from "@/components/ui/animate-in";
import { projects } from "@/data/projects";

export function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projects" title="Projects">
        <div className="card rounded-xl p-8 text-center">
          <p className="text-[var(--color-text-muted)]">Projects coming soon.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Case studies with measurable business impact"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <AnimateIn key={project.slug} delay={i * 100}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
