import EducationSection from "./_components/education";
import LinkSection from "./_components/links";
import TechnicalSection from "./_components/technical";

export default function About() {
  return (
    <div className=" flex flex-1 flex-col items-center">
      <div className="w-[65vw] break-words">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
            About Harrison
          </h1>
          <h2 className="text-6xl">The Credentials</h2>
        </div>
        <div className="mb-[min(10vh,10vw)] flex flex-col">
          <p className="mb-[min(4vh,4vw)] mt-[min(2vh,2vw)] text-justify text-2xl font-light">
            Born into the final breathes of the 1900s, a majority of my youth
            was consumed with musical and thespian endevours. The introduction
            of programming in my late teens, thrust me towards a new pursuit of
            dopamine. This page offers small snippets about me (CV style). You
            can explore my personality more under &apos;Blogs&apos;.
          </p>

          <EducationSection />
          <TechnicalSection />
          <LinkSection />
        </div>
      </div>
    </div>
  );
}
