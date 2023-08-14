import ProjectList from "./_components/projects-list";

export default function Projects() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="w-[65vw] break-words">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
            Projects
          </h1>
          <h2 className="text-2xl font-bold">
            &quot;If things start happening, don’t worry, don’t stew, just go
            right along and you’ll start happening too&quot;.
          </h2>
          <h2 className="text-2xl">- Dr Seuss</h2>
        </div>
        <div className="flex flex-col">
          <p className="mt-[min(2vh,2vw)] text-justify text-2xl font-light">
            On this page you find an ever-growing menu.
          </p>
          <p className="text-justify text-2xl font-light">
            My dopamine chases decorate this venue.
          </p>
          <p className="mt-[min(1vh,1vw)] text-justify text-2xl font-light">
            A myriad of enquiries with an assortment of endings.
          </p>
          <p className="text-justify text-2xl font-light">
            From hardware to software, some finished, some pending.
          </p>
          <p className="mt-[min(1vh,1vw)] text-justify text-2xl font-light">
            Step into my office, no need to be shy.
          </p>
          <p className="mb-[min(4vh,4vw)] text-justify text-2xl font-light">
            Behold the projects of some developer guy.
          </p>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
