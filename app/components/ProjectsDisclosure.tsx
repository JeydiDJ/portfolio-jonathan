"use client";

import { useEffect, useRef, useState } from "react";

type ProjectGroup = {
  company: string;
  role: string;
  period: string;
  projects: string[];
};

type ProjectsDisclosureProps = {
  groups: ProjectGroup[];
};

export default function ProjectsDisclosure({ groups }: ProjectsDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const updateHeight = () => {
      setHeight(element.scrollHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [groups]);

  return (
    <div className={`projects-disclosure${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="projects-disclosure-summary"
        aria-expanded={isOpen}
        aria-controls="projects-archive-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        <div>
          <p className="section-kicker">Project archive</p>
          <h2>All project references.</h2>
        </div>
        <div className="projects-disclosure-side">
          <p className="projects-note">Click to expand the full project list.</p>
          <span className="projects-disclosure-icon" aria-hidden="true"></span>
        </div>
      </button>

      <div
        id="projects-archive-panel"
        className="projects-disclosure-panel"
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="projects-disclosure-panel-inner">
          <div className="project-archive">
            {groups.map((group) => (
              <article className="project-archive-row" key={group.company}>
                <div className="project-archive-meta">
                  <p className="project-type">{group.period}</p>
                  <h3>{group.company}</h3>
                  <p className="project-archive-role">{group.role}</p>
                  <p className="project-archive-count">{group.projects.length} projects</p>
                </div>
                <div className="project-archive-list">
                  {group.projects.map((project) => (
                    <div className="project-archive-item" key={project}>
                      {project}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
