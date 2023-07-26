import Proficiencies from "./_components/home/proficiencies";
import WelcomeMsg from "./_components/home/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 xl:items-center xl:justify-center">
      <Proficiencies />
      <div className="z-10 flex flex-col rounded-2xl px-[10vw] pt-[20vh] xl:mx-[32vw] xl:p-[4vw] xl:nm-flat-light-base xl:dark:nm-flat-dark-base">
        <h1 className="mb-2 text-[6vh] font-bold leading-[6vh] text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-[2vh] text-[3vh] leading-[3vh]">Software Engineer</h2>
        <p className="w-full text-start text-[2.5vh] font-normal leading-[3vh] text-light-green dark:text-dark-green">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
