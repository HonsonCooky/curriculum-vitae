import Proficiencies from "./_components/proficiencies/proficiencies";
import WelcomeMsg from "./_components/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="z-10 flex w-[45vw] flex-col p-[4vw] pt-[20vh]">
        <h1 className="text-[min(8vh,8vw)] font-bold leading-[min(8vh,8vw)] text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-[min(4vh,4vw)] text-[min(4vh,4vw)] leading-[min(4vh,4vw)]">
          Software Engineer
        </h2>
        <p className="w-full text-start text-[min(3vh,3vw)] font-normal leading-[min(3vh,3vw)] text-light-sky dark:text-dark-sky">
          Haere Mai!{" "}
          <span className="text-light-pink dark:text-dark-pink">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
      <Proficiencies />
    </div>
  );
}
