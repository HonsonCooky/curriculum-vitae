import Proficiencies from "./_components/proficiencies/proficiencies";
import WelcomeMsg from "./_components/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <Proficiencies />
      <div className="flex w-[45vw] flex-col break-words py-[min(5vh,5vw)]">
        <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-[min(12vh,12vw)] text-6xl">Software Engineer</h2>
        <p className="w-full text-start text-4xl font-normal text-light-green dark:text-dark-green">
          Haere Mai! Hello!
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
