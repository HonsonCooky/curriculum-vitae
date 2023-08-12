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
        <li>Rust:</li>
        <ul className="list-inside list-disc  pl-[min(5vh,5vw)] text-xl">
          <li>
            <span className=" text-light-red dark:text-dark-red">Limited</span>{" "}
            educational and personal experience.
          </li>
        </ul>
      </ul>
      <p className="mt-[min(4vh,4vw)] text-justify text-lg font-light">
        <span className=" text-light-yellow dark:text-dark-yellow">Note:</span>{" "}
        The list above is not exhaustive. It&apos;s a rough approximation of my
        literacy in technologies I&apos;m comfortable using. My breadth of
        experience reaches beyond the scope of this list [Java, Ruby, F#, ...].
        They are unlisted here, as my knowledge in these areas is likely
        outdated.
      </p>
    </div>
  );
}
