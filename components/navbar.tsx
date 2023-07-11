import GithubIcon from "./github-icon";

export default function NavBar() {
  return (
    <nav className="component absolute flex h-[15vh] w-screen items-center drop-shadow-lg">
      <h1 className="flex items-center p-0 pl-5 text-4xl font-bold text-light-text dark:text-dark-text">
        Harrison Cook
      </h1>
      <div className="m-5 h-[60%] w-1 bg-light-text dark:bg-dark-text" />
      <h2 className="flex text-3xl font-thin text-light-text dark:text-dark-text">
        Software Engineer
      </h2>
      <div className="flex h-full grow items-center justify-end p-10">
        <div className="inline-block flex-col rounded fill-light-text text-center text-xl text-light-text drop-shadow-xl dark:fill-dark-text dark:text-dark-text">
          <GithubIcon />
          GitHub
        </div>
      </div>
      <div className="p-4 pt-2 "></div>
    </nav>
  );
}
