import BackgroundSection from "./_components/background";
import EducationSection from "./_components/education";
import LinkSection from "./_components/links";
import TechnicalSection from "./_components/technical";

export default function About() {
  const ageDiff = new Date(Date.now() - new Date("08-06-1999").getTime());
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
  return (
    <div className=" flex flex-1 flex-col items-center">
      <div className="w-[65vw] break-words">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
            About Harrison
          </h1>
          <h2 className="text-6xl">~HonsonCooky</h2>
        </div>
        <div className="mb-[min(10vh,10vw)] flex flex-col gap-6">
          <p className="text-justify text-2xl font-light">
            Hey! I&apos;m Harrison, a {age} year old Software Engineer from New
            Zealand.
          </p>
          <BackgroundSection />
          <EducationSection />
          <TechnicalSection />
          <LinkSection />
        </div>
      </div>
    </div>
  );
}
