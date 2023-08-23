export default function TechnicalSection() {
  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-2xl font-bold xl:text-4xl">
        Technical Toolbox
      </h3>
      <ul className="list-outside list-disc text-xl font-light xl:pl-[min(5vh,5vw)] xl:text-2xl">
        <li>{`Node.js | TypeScript:`}</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            professional, educational and personal experience.
          </li>
        </ul>
        <li>Lua | Neovim:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            personal experience.
          </li>
        </ul>
        <li>PowerShell | Bash:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            personal experience.
          </li>
        </ul>
        <li>Microsoft Azure:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            professional experience.
          </li>
        </ul>
        <li>Terraform | GitHub Workflows:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            professional experience.
          </li>
        </ul>
        <li>React | React Native:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            educational and personal experience.
          </li>
        </ul>
        <li>.Net | C#:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            professional and personal experience.
          </li>
        </ul>
        <li>Vue.js:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            professional and personal experience.
          </li>
        </ul>
        <li>Rust:</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            educational and personal experience.
          </li>
        </ul>
        <ul className="mt-[min(2vh,2vw)] list-outside list-disc text-xl font-light xl:text-2xl">
          <li className="font-bold">Additonal Experience:</li>
          <p className="pl-[min(5vh,5vw)] text-lg font-light xl:text-xl">
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            experience that is possibly outdated (+2 years since active use).
          </p>
          <ul className="grid list-outside  list-disc grid-cols-4 pl-[min(5vh,5vw)] text-lg xl:text-xl">
            {/*C*/}
            <li className="col-span-1 font-normal">C, C++:</li>
            <p className="col-span-3"> Educational and Personal</p>
            {/*JAVA*/}
            <li className="col-span-1 font-normal">Java:</li>
            <p className="col-span-3"> Educational and Personal</p>
            {/*RN*/}
            <li className="col-span-1 font-normal">React-Native:</li>
            <p className="col-span-3"> Educational and Personal</p>
            {/*F#*/}
            <li className="col-span-1 font-normal">F#:</li>
            <p className="col-span-3"> Educational</p>
            {/*RUBY*/}
            <li className="col-span-1 font-normal">Ruby:</li>
            <p className="col-span-3"> Educational</p>
            {/*RUBY*/}
            <li className="col-span-1 font-normal">Flutter, Dart:</li>
            <p className="col-span-3"> Personal</p>
          </ul>
        </ul>
      </ul>
    </div>
  );
}
