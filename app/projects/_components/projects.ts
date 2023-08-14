export enum ProjectTag {
  HARDWARE,
  SOFTWARE,
  FOR_FUN,
  PROBLEM_SOLUTION,
}

export type ProjectLink = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  links?: ProjectLink[];
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    title: "PC Build",
    tags: [ProjectTag.HARDWARE, ProjectTag.FOR_FUN],
    description:
      "Build your own personal computer has become incredibly popular, thanks to the increasing ",
  },
  {
    title: "Neovim Config",
    tags: [ProjectTag.SOFTWARE, ProjectTag.PROBLEM_SOLUTION],
    description: "Neovim has become my full time IDE of choice. ",
  },
  {
    title: "Next.js CV Website",
    tags: [ProjectTag.SOFTWARE, ProjectTag.FOR_FUN],
    description: "This website!",
  },
];
