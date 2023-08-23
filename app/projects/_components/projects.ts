import {
  ArrowDownOnSquareStackIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  UserCircleIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

export enum ProjectTag {
  SOFTWARE,
  HARDWARE,
  PROBLEM,
  PROFESSIONAL,
  PERSONAL,
  EDUCATION,
  FOR_FUN,
}

export type ProjectLink = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: ProjectTag[];
  links?: ProjectLink[];
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export const projects: Project[] = [
  {
    title: "40% Keyboard",
    icon: ArrowDownOnSquareStackIcon,
    tags: [ProjectTag.HARDWARE, ProjectTag.PROFESSIONAL, ProjectTag.PROBLEM],
    description:
      "Physically impaired from a childhood injury, my journey with the Planck EZ keyboard has been nothing short of a " +
      "blessing. Customized keybindings and short travel distances make special characters a breeze, and wrist strain " +
      "a faint memory.",
  },
  {
    title: "CV Website",
    icon: UserCircleIcon,
    tags: [ProjectTag.SOFTWARE, ProjectTag.PERSONAL, ProjectTag.FOR_FUN],
    links: [
      {
        title: "GitHub Page",
        href: "https://github.com/HonsonCooky/curriculum-vitae",
      },
    ],
    description:
      "Whilst this is not my first attempt at a user interface, you're currently interacting with my first publicly " +
      "available experience. A Next.js application, using an SQL database, hosted on Vercel.\n\n" +
      "Color Scheme: [Catppuccin](https://github.com/catppuccin/catppuccin) (my IDE theme)",
  },
  {
    title: "Desktop Builds",
    icon: CpuChipIcon,
    tags: [ProjectTag.HARDWARE, ProjectTag.PERSONAL, ProjectTag.FOR_FUN],
    description:
      "Learning how to build a computer provides some incredibly helpful teachings for software development. " +
      "I've successfully designed and built a handful of desktops with varying requirements; Teaching others as " +
      "I went. What started as a lust for more power, turned into helpful insight in the strangest places.",
  },
  {
    title: "Flat Chores App",
    icon: BuildingOfficeIcon,
    tags: [ProjectTag.SOFTWARE, ProjectTag.FOR_FUN, ProjectTag.PROBLEM],
    links: [
      {
        title: "GitHub Page",
        href: "https://github.com/HonsonCooky/ira-street-chores",
      },
    ],
    description:
      "Covid lock-downs provided me with a unique opportunity to build my first hobby project. For some time, my flat " +
      "had struggled with maintaining a rotating chore list. This React-Native, Express.js, MongoDB application was " +
      "my solution. With a little 'scope-creep', the application also had a shared shopping list. Unfortunately, the " +
      "app's functionality worked better than it's intended outcome...",
  },
  {
    title: "M5Stack (ESP32)",
    icon: WifiIcon,
    tags: [ProjectTag.HARDWARE, ProjectTag.SOFTWARE, ProjectTag.EDUCATION],
    links: [
      {
        title: "GitHub Page",
        href: "https://github.com/HonsonCooky/m5stack-ble",
      },
    ],
    description:
      "Network Engineering piqued my interest early on at University. Fourth year Engineering papers are no joke, " +
      "but this particular assignment really hit home that I was on the right path. Armed with two " +
      "[M5Stacks](https://m5stack.com/), the assignment was to simulate an IoT network. This particular assignment " +
      "is unlikely to impress, but my search for this euphoria is what gets me out of bed.",
  },
  {
    title: "Neovim Config",
    icon: Cog6ToothIcon,
    tags: [ProjectTag.SOFTWARE, ProjectTag.PROFESSIONAL, ProjectTag.PROBLEM],
    links: [
      {
        title: "GitHub Page",
        href: "https://github.com/HonsonCooky/cookie-nvim",
      },
    ],
    description:
      "Neovim is a tricky editor to recommend. The default experience lacks many developer comforts, and in order to " +
      "acquire these commodities, you need to program them in yourself... BUT, with a little persistence (and a pretty " +
      "color scheme) the benefits are astonishing! Another step towards a mouse-less setup.",
  },
];
