export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center px-20 xl:flex-row xl:p-0">
      <div className="flex flex-col rounded-2xl p-20">
        <h1 className="mb-2 text-6xl font-bold text-light-mauve dark:text-dark-lavender">
          About Harrison
        </h1>
        <h2 className="mb-10 text-3xl">An Attempt at Brevity</h2>
      </div>
      <div className="mr-20 flex flex-1 flex-col rounded-2xl p-10 nm-inset-light-base dark:nm-inset-dark-base">
        <p className="mb-4 text-xl font-light">
          Hey! I'm Harrison. The following page outlines a small portion of my
          background. I would like to preface that this is{" "}
          <span className="text-light-red dark:text-dark-red">not</span> a guide
          on how get where I've landed, rather a description of where I've been
          and who I am.
        </p>
        <p className="text-2xl font-bold">History:</p>
        <p className="text-xl font-light">
          Born and raised in a small town... is a played out narrative that
          captures no ones attention. I was born into a{" "}
          <span className="text-light-peach dark:text-dark-peach">
            singing cult!
          </span>{" "}
          Not really, but friends have certainly pointed out the potential.
        </p>
      </div>
    </div>
  );
}
