import CurvedLine from "./components/curved-line";

export default function Home() {
  return (
    <div className="flex flex-1 items-center">
      <div className="z-10 flex h-full w-[35%] flex-col rounded bg-light-surface0 p-40 dark:bg-dark-crust">
        <h1 className="text-6xl font-thin">Harrison Cook</h1>
        <h2 className="text-2xl font-bold">Software Engineer</h2>
      </div>
      <div className="absolute left-[35%] top-[10%] z-0 w-[30%]">
        <CurvedLine className="fill-none stroke-1" />
      </div>
    </div>
  );
}
