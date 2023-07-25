import ProficiencyProfile from "./_components/home/proficiency-profile";
import WelcomeMsg from "./_components/home/welcome-msg";
import { proficiencies } from "./_utils/proficiency-list";
import { proficienciesMobile } from "./_utils/proficiency-list-mobile";

export default function Home() {
  return (
    <div className="flex flex-1 items-center xl:justify-center">
      {/* WEB */}
      <div className="hidden flex-1 overflow-clip xl:flex">
        {proficiencies.map((prof) => (
          <ProficiencyProfile params={prof} key={prof.imgRef} />
        ))}
      </div>
      {/* MOBILE */}
      <div className="flex flex-1 overflow-clip xl:hidden">
        {proficienciesMobile.map((prof) => (
          <ProficiencyProfile params={prof} key={prof.imgRef} />
        ))}
      </div>
      <div className="absolute z-10 flex flex-col rounded-2xl p-20 xl:nm-flat-light-base xl:dark:nm-flat-dark-base">
        <h1 className="text-2xl font-bold text-light-mauve dark:text-dark-lavender xl:mb-2 xl:text-6xl">
          Harrison Cook
        </h1>
        <h2 className="mb-10 text-xl xl:text-3xl">Software Engineer</h2>
        <p className="w-full text-start text-base font-normal text-light-green dark:text-dark-green xl:text-2xl">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
// <div className="hidden flex-1 overflow-clip xl:flex">
//   {proficiencies.map((prof) => (
//     <ProficiencyProfile params={prof} key={prof.imgRef} />
//   ))}
// </div>
// <div className="absolute z-10 flex flex-col rounded-2xl xl:p-20 xl:nm-flat-light-base xl:dark:nm-flat-dark-base">
//   <h1 className="mb-2 text-2xl font-bold text-light-mauve dark:text-dark-lavender xl:text-6xl">
//     Harrison Cook
//   </h1>
//   <h2 className="mb-10 text-3xl">Software Engineer</h2>
//   <p className="w-full text-start text-2xl font-normal text-light-green dark:text-dark-green">
//     Haere Mai!{" "}
//     <span className="text-light-peach dark:text-dark-peach">Hello!</span>
//   </p>
//   <WelcomeMsg />
// </div>
