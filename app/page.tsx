export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center w-max rounded-2xl p-20 lg:nm-flat-light-base lg:dark:nm-flat-dark-base">
        <h1 className="text-light-lavender dark:text-dark-lavender font-bold text-6xl mb-2">
          Harrison Cook
        </h1>
        <h2 className="text-3xl mb-10">Software Engineer</h2>
        <p className="w-96 text-2xl font-thin text-justify">
          <span className="text-light-blue dark:text-dark-blue">
            Haere Mai!{" "}
          </span>{" "}
          Hello! Welcome to the humble HTTP home of a happily hardworking{" "}
          developer.
          <br /> A heuristic hands-on happening, hosting hearty heat hatched
          from his head. Hooked? Heed high for hyperlinks .
        </p>
      </div>
    </div>
  );
}
