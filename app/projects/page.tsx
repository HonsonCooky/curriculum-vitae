import ProjectList from "./_components/projects-list";

export default function Projects() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-[80vw] flex-col break-words py-[min(25vh,25vw)] xl:w-[65vw] xl:py-[min(5vh,5vw)]">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-5xl font-bold text-light-mauve dark:text-dark-lavender xl:text-8xl">
            Projects
          </h1>
          <h2 className="text-3xl xl:text-6xl">
            Oh, the Places You&apos;ll Go!
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="mt-[min(2vh,2vw)] text-lg font-light xl:text-2xl">
            On this page, you&apos;ll find an ever-growing menu.
          </p>
          <p className=" text-lg font-light xl:text-2xl">
            My dopamine chases decorate this venue.
          </p>
          <p className="mt-[min(1vh,1vw)]  text-lg font-light xl:text-2xl">
            A myriad of enquiries with an assortment of endings.
          </p>
          <p className=" text-lg font-light xl:text-2xl">
            From hardware to software, some finished, some pending.
          </p>
          <p className="mt-[min(1vh,1vw)]  text-lg font-light xl:text-2xl">
            Step into my office, no need to be shy.
          </p>
          <p className="mb-[min(10vh,10vw)]  text-lg font-light xl:text-2xl">
            Behold the projects of this developer guy.
          </p>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
