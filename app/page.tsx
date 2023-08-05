import Proficiencies from "./_components/proficiencies/proficiencies";
import WelcomeMsg from "./_components/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <Proficiencies />
      <div className="flex w-[45vw] flex-col pt-[min(5vh,5vw)]">
        <h1 className="text-[min(8vh,8vw)] font-bold text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-[min(12vh,12vw)] text-[min(4vh,4vw)]">
          Software Engineer
        </h2>
        <p className="w-full text-start text-[min(3vh,3vw)] font-normal text-light-sky dark:text-dark-sky">
          Haere Mai!{" "}
          <span className="text-light-pink dark:text-dark-pink">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
