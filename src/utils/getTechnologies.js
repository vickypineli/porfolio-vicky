//src/utils/getTechnologies.js

export function getTechnologies(projects) {
  return Array.from(
    new Set(projects.flatMap((project) => project.tech))
  );
}
