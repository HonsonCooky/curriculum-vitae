import GeneratePair from "../_components/reference-pair";

const historyDesc: JSX.Element = (
  <div>
    <p className="whitespace-pre-wrap text-xl font-light">
      Born and raised in a small town... is a played out narrative that captures
      no ones attention. I was born into a{" "}
      <span className="text-light-peach dark:text-dark-peach">
        singing cult!
      </span>{" "}
      A.k.a. a musically oriented family. For a majority of my youth, I was
      involed with music and theatre; Performing on a local and national level
      in bands, choirs, and theatre productions. It wasn&apos;t until my
      penultimate year at secondary school (when I took a digital technology
      course), that I was introduced to programming. Uncovering this hidden
      passion, I pursued the endless dompamine chase of programmatically solving
      problems. After four years at University, I graduated with a:
      <br />
      <br />
    </p>
  </div>
);

export default function About() {
  const ;
  const headers = ["History", "Education", "Work Life Balance"];
  const referencePairs = headers.map((str) => {
    {
      str: GeneratePair(title);
    }
  });

  return (
    <div className="mb-12 mt-40 flex flex-1 flex-col px-20 xl:flex-row xl:p-0">
      <div className="flex flex-col rounded-2xl px-20 py-4">
        <h1 className="mb-2 text-6xl font-bold text-light-mauve dark:text-dark-lavender">
          About Harrison
        </h1>
        <h2 className="mb-10 text-3xl">An Attempt at Brevity</h2>
        {Object.entries(pageReferences).map(([key, value]) => (
          <button
            key={key}
            className="bg-light-surface0 text-xl text-light-blue dark:text-dark-blue"
          >
            - {key}
          </button>
        ))}
      </div>
      <div className="mr-20 mt-12 flex flex-1 flex-col overflow-auto rounded-2xl p-10 nm-inset-light-base dark:nm-inset-dark-base">
        <p className="mb-4 text-xl font-light">
          Hey! I&apos;m Harrison. The following page outlines a small portion of
          my background.
        </p>
        <p className="text-2xl font-bold" ref={pageReferences["history"]}>
          History:
        </p>
        <code className="text-xl">
          Bachelors of Engineering (First Class Honors).
          <br />
          - Majoring in Software Engineering,
          <br />
          - With a specialization in Networked Applications,
          <br />
          - Accreddited by the Washington Accord,
          <br />
        </code>
      </div>
    </div>
  );
}
