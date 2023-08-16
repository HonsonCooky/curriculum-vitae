export default function TechnicalSection() {
  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-4xl font-bold">
        Technical Toolbox
      </h3>
      <ul className="list-inside list-disc text-2xl font-light">
        <li>{`Node.js | TypeScript:`}</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            professional, educational and personal experience.
          </li>
        </ul>
        <li>Lua | Neovim:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            personal experience.
          </li>
        </ul>
        <li>PowerShell | Bash:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-green dark:text-dark-green">
              Extensive
            </span>{" "}
            personal experience.
          </li>
        </ul>
        <li>Microsoft Azure:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            professional experience.
          </li>
        </ul>
        <li>Terraform | GitHub Workflows:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            professional experience.
          </li>
        </ul>
        <li>React | React Native:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-yellow dark:text-dark-yellow">
              Moderate
            </span>{" "}
            educational and personal experience.
          </li>
        </ul>
        <li>.Net | C#:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            professional and personal experience.
          </li>
        </ul>
        <li>Vue.js:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            professional and personal experience.
          </li>
        </ul>
        <li>Rust:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            educational and personal experience.
          </li>
        </ul>
      </ul>

      <ul className="my-[min(4vh,4vw)] list-inside list-disc text-2xl font-light">
        <li className="font-bold">Additonal Experience:</li>
        <p className="pl-[min(3.5vh,3.5vw)] text-lg font-normal">
          <span className=" text-light-yellow dark:text-dark-yellow">
            Moderate
          </span>{" "}
          experience that is possibly outdated (+2 years since active use).
        </p>
        <ul className="grid list-inside  list-disc grid-cols-4 pl-[min(5vh,5vw)] text-xl">
          {/*C*/}
          <li className="col-span-1 font-bold">C, C++:</li>
          <p className="col-span-3"> Educational and Personal</p>
          {/*JAVA*/}
          <li className="col-span-1 font-bold">Java:</li>
          <p className="col-span-3"> Educational and Personal</p>
          {/*RN*/}
          <li className="col-span-1 font-bold">React-Native:</li>
          <p className="col-span-3"> Educational and Personal</p>
          {/*F#*/}
          <li className="col-span-1 font-bold">F#:</li>
          <p className="col-span-3"> Educational</p>
          {/*RUBY*/}
          <li className="col-span-1 font-bold">Ruby:</li>
          <p className="col-span-3"> Educational</p>
          {/*RUBY*/}
          <li className="col-span-1 font-bold">Flutter, Dart:</li>
          <p className="col-span-3"> Personal</p>
        </ul>
      </ul>
    </div>
  );
}
