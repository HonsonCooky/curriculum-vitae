export default function EducationSection() {
  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-4xl font-bold">
        Educational Enhancements
      </h3>
      <ul className="list-inside list-disc text-2xl font-light">
        <li>A Bachelor of Engineering with First Class Honours</li>
        <ul className="list-inside list-disc pl-[min(5vh,5vw)] text-xl">
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
      <p className="mt-[min(4vh,4vw)] text-justify text-lg font-light">
        <span className=" text-light-yellow dark:text-dark-yellow">Note:</span>{" "}
        The importance of an educational background heavily varies within this
        industry. I understand that the significance of these achievements is
        contextual, however, my educational journey is one I&apos;ve poured a
        lot of time and effort into. I take great pride in these
        accomplishments.
      </p>
    </div>
  );
}
