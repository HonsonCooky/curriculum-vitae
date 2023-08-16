import AchievementsSection from "./_components/achievements";
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
          <h2 className="text-6xl">The Credentials</h2>
        </div>
        <div className="mb-[min(10vh,10vw)] flex flex-col">
          <p className="mb-[min(4vh,4vw)] mt-[min(2vh,2vw)] text-justify text-2xl font-light">
            Hey! I&apos;m Harrison, a {age} year old developer from New Zealand.
            Born and raised in what friends have described as a &apos;singing
            cult&apos;, a majority of my youth revolved around musical and
            thespian endevours.
            <br />
            <br />
            In my late teens, a series of unintended events led me to take a
            digital technologies class. Late into my teenage years, I had my
            first taste of programming; An activity that managed to exploit my
            strongest attribute; Artistic Problem Solving.
            <br />
            Creatively Methodical seems to be a
          </p>

          <TechnicalSection />
          <EducationSection />
          <AchievementsSection />
          <LinkSection />
        </div>
      </div>
    </div>
  );
}
