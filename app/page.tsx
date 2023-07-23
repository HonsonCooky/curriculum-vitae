export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center w-max rounded-2xl p-20 lg:nm-flat-light-base lg:dark:nm-flat-dark-base">
        <h1 className="text-light-lavender dark:text-dark-lavender font-bold text-6xl mb-2">
          Harrison Cook
        </h1>
        <h2 className="text-3xl mb-10">Software Engineer</h2>
        <p className="w-96 text-2xl font-thin text-justify">
          <span className="text-light-green dark:text-dark-green">
            Haere Mai!{" "}
          </span>{" "}
          Hello! Welcome to the humble HTTP home of a happily hardworking{" "}
          <span className="text-light-peach dark:text-dark-peach">
            developer
          </span>
          . A hands-on{" "}
          <span className="text-light-red dark:text-dark-red">happening</span>,
          hosting the hearty heat hatched in his head. Hooked? Heed{" "}
          <span className="text-light-yellow dark:text-light-yellow">high</span>{" "}
          for{" "}
          <span className="text-light-blue dark:text-dark-blue">
            hyperlinks
          </span>
          .
        </p>
      </div>
    </div>
  );
}
