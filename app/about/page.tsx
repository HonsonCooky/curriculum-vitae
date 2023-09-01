import BackgroundSection from "./_components/background";
import EducationSection from "./_components/education";
import LinkSection from "./_components/links";
import ProfessionalSection from "./_components/professional";
import TechnicalSection from "./_components/technical";

export default function About() {
  const ageDiff = new Date(Date.now() - new Date("08-06-1999").getTime());
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
  return (
    <div className=" flex flex-1 flex-col items-center">
      <div className="flex w-[80vw] flex-col break-words py-[min(25vh,25vw)] xl:w-[65vw] xl:py-[min(5vh,5vw)]">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-5xl font-bold text-light-mauve dark:text-dark-lavender xl:text-8xl">
            About Harrison
          </h1>
          <h2 className="text-3xl xl:text-6xl">~HonsonCooky</h2>
        </div>
        <div className="mb-[min(10vh,10vw)] flex flex-col gap-6">
          <p className="text-lg font-light xl:text-justify xl:text-2xl">
            Hey! I&apos;m Harrison, a {age} year old Software Engineer from New
            Zealand.
          </p>
          <BackgroundSection />
          <EducationSection />
          <TechnicalSection />
          <ProfessionalSection />
          <LinkSection />
        </div>
      </div>
    </div>
  );
}
