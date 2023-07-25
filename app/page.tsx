import Proficiencies from "./_components/home/proficiencies";
import WelcomeMsg from "./_components/home/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 xl:items-center xl:justify-center">
      <Proficiencies />
      <div className="z-10 flex flex-col rounded-2xl px-10 py-32 xl:mx-[32vw] xl:p-20 xl:nm-flat-light-base xl:dark:nm-flat-dark-base">
        <h1 className="text-2xl font-bold text-light-mauve dark:text-dark-lavender xl:mb-2 xl:text-[6vh] xl:leading-[6.1vh]">
          Harrison Cook
        </h1>
        <h2 className="mb-10 text-xl xl:text-[3vh] xl:leading-[3vh]">
          Software Engineer
        </h2>
        <p className="w-full text-start text-base font-normal text-light-green dark:text-dark-green xl:text-[2.5vh] xl:leading-[2.5vh]">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
