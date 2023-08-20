export default function EducationSection() {
  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-2xl font-bold xl:text-4xl">
        Educational Enhancements
      </h3>
      <ul className="list-outside list-disc text-xl font-light xl:text-2xl">
        <li>A Bachelor of Engineering with First Class Honours</li>
        <ul className="list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            Majoring in{" "}
            <span className="text-light-green dark:text-dark-green">
              Software Engineering
            </span>
            ,
          </li>
          <li>
            with a specialization in{" "}
            <span className="text-light-sky dark:text-dark-sky">
              Networked Applications
            </span>
            ,
          </li>
          <li>
            accredited under the{" "}
            <span className=" text-light-peach dark:text-dark-peach">
              Washington Accord
            </span>
            , and{" "}
            <span className=" text-light-peach dark:text-dark-peach">
              Seoul Accord
            </span>
          </li>
        </ul>
      </ul>
    </div>
  );
}
