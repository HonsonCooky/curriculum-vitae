import Image from "next/image";
import fs from "fs";

export default function Home() {
  const knowledgeBasePath = "/home/knowledge-base";
  const knowledgeBaseDirContents = fs.readdirSync(
    `./public${knowledgeBasePath}`
  );

  return (
    <div className="flex flex-1 items-center">
      <div className="z-10 flex h-full w-[35%] flex-col rounded bg-light-surface0 p-40 dark:bg-dark-crust">
        <h1 className="text-6xl font-thin">Harrison Cook</h1>
        <h2 className="text-2xl font-bold">Software Engineer</h2>
      </div>
      <div className="flex h-full flex-1 flex-col justify-center pl-20">
        {knowledgeBaseDirContents.map((image, index) => (
          <div className={`flex items-center space-x-5 pl-[${40 * index}px]`}>
            <Image
              src={`${knowledgeBasePath}/${image}`}
              alt={image}
              width={100}
              height={100}
              unoptimized={true}
            />
            <h3>{image.replace("-logo.png", "").toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
