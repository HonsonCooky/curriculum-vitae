export default function ProfessionalSection() {
  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-2xl font-bold xl:text-4xl">
        Professional Participation
      </h3>
      <p className="mb-[min(2vh,2vw)] text-lg font-light xl:text-justify xl:text-xl">
        The following list of descriptions denotes the type of work I&apos;ve
        fulfilled in a professional capacity. Whilst I&apos;m unable to exhibit
        this work, the &quot;Projects&quot; page contains examples of my
        free-time open-source projects.
      </p>
      <ul className="list-outside list-disc text-xl font-light xl:pl-[min(5vh,5vw)] xl:text-2xl">
        <li className="font-bold">SFTP Microservices:</li>
        <ul className="mb-4 list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            Transporting, decrypting, encrypting and transforming files using
            the Secure File Transfer Protocol (SFTP).
          </li>
          <li>
            Using message brokers, queues, function apps, blob and NoSQL storage
            solutions.
          </li>
          <li>Critical and non-critical systems.</li>
        </ul>
        <li className="font-bold">Document Generators:</li>
        <ul className="mb-4 list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>Backend data to PDF, Word and Excel informative documents.</li>
          <li>Template generation engines for internal use.</li>
        </ul>
        <li className="font-bold">Modularization:</li>
        <ul className="mb-4 list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            Construction and maintenance of reusable programs, workflows, and
            IaC.
          </li>
          <li>
            Generic reusable architectures for independent context driven
            execution.
          </li>
          <li>
            <a
              className="text-light-blue underline dark:text-dark-blue"
              href="https://www.npmjs.com/package/raygun4reactnative"
            >
              Public
            </a>{" "}
            and Private package distrubtion systems.
          </li>
        </ul>
        <li className="font-bold">Legacy Migrations:</li>
        <ul className="mb-4 list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>Bash and SQL script modernization to cloud microservices.</li>
          <li>Node.js major version upgrades.</li>
          <li>Azure Pipelines to GitHub Workflows translation.</li>
          <li>Terraform provider major version upgrades.</li>
        </ul>
        <li className="font-bold">
          Maintenance and Upgrades of Foreign Systems:
        </li>
        <ul className="mb-4 list-outside list-disc pl-[min(5vh,5vw)] text-lg xl:text-xl">
          <li>
            Node.js + CI/CD upgrades and maintenance on existing unknown
            systems.
          </li>
          <li>Completion of half-done projects started by former employees.</li>
          <li>Handovers from other developers.</li>
        </ul>
      </ul>
    </div>
  );
}
