import { motion } from "framer-motion";

type PathProp = {
  d?: string;
  transition?: { duration: number };
  variants: {
    closed: { d: string } | { opacity: number };
    open: { d: string } | { opacity: number };
  };
  className?: React.ComponentProps<"path">["className"];
};

const Path = (props: PathProp) => (
  <motion.path strokeLinecap="round" {...props} />
);

export default function MenuIcon(params: {
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={params.className}
      viewBox="0 0 20 20"
      preserveAspectRatio="xMidYMin"
    >
      <Path
        variants={{
          closed: { d: "M 5 5 L 15 5" },
          open: { d: "M 7 13 L 13 7" },
        }}
      />
      <Path
        d="M 5 10 L 15 10"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 5 15 L 15 15" },
          open: { d: "M 7 7 L 13 13" },
        }}
      />
    </svg>
  );
}
