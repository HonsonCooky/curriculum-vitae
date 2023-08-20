import Proficiencies from "./_components/proficiencies/proficiencies";
import WelcomeMsg from "./_components/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex w-[80vw] flex-col break-words py-[min(25vh,25vw)] xl:w-[45vw] xl:py-[min(5vh,5vw)]">
        <h1 className="text-5xl font-bold text-light-mauve dark:text-dark-lavender xl:text-8xl">
          Harrison Cook
        </h1>
        <h2 className="mb-[min(12vh,12vw)] text-3xl xl:text-6xl">
          Software Engineer
        </h2>
        <p className="w-full text-start text-2xl font-normal text-light-green dark:text-dark-green xl:text-4xl">
          Haere Mai! Hello!
        </p>
        <WelcomeMsg />
        <Proficiencies />
      </div>
    </div>
  );
}
