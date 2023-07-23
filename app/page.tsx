import ProficiencyProfile, {
  paramsType,
} from "./_components/home/proficiency-profile";
import WelcomeMsg from "./_components/home/welcome-msg";

export default function Home() {
  const proficiencies: paramsType[] = [
    {
      imgRef: "azure",
      strength: "24",
      left: { start: "50%", end: "20%" },
      top: { start: "50%", end: "25%" },
    },
    {
      imgRef: "csharp",
      strength: "20",
      left: { start: "50%", end: "70%" },
      top: { start: "50%", end: "85%" },
    },
    {
      imgRef: "terraform",
      strength: "28",
      left: { start: "50%", end: "10%" },
      top: { start: "50%", end: "65%" },
    },
    {
      imgRef: "typescript",
      strength: "28",
      left: { start: "50%", end: "80%" },
      top: { start: "50%", end: "25%" },
    },
  ];

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="absolute h-full w-full overflow-clip invisible xl:visible">
      {proficiencies.map((prof) => (
        <ProficiencyProfile params={prof} />
      ))}
      </div>
      <div className="z-10 flex flex-col rounded-2xl p-20 lg:nm-flat-light-base lg:dark:nm-flat-dark-base">
        <h1 className="mb-2 text-6xl font-bold text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-10 text-3xl">Software Engineer</h2>
        <p className="w-full text-start text-2xl font-normal text-light-green dark:text-dark-green">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
