import Proficiencies from "./_components/proficiencies/proficiencies";
import WelcomeMsg from "./_components/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 lg:items-center lg:justify-center">
      <div className="flex flex-col px-[10vw] pt-[20vh] lg:z-10 lg:mx-[32vw] lg:p-[4vw]">
        <h1 className="text-[max(6vh,4vw)] font-bold leading-[max(6vh,4vw)] text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-[2vh] text-[max(3vh,2vw)] leading-[max(3vh,2vw)]">
          Software Engineer
        </h2>
        <p className="w-full text-start text-[max(2.5vh,1.5vw)] font-normal leading-[max(2.5vh,1.5vw)] text-light-green dark:text-dark-green">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
      <Proficiencies />
    </div>
  );
}
