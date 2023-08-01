import LoadingDots from "./_components/loading-dots";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-row items-baseline">
        <h1 className="font-mono text-[max(4vh,2vw)] font-bold">Loading </h1>
        <LoadingDots />
      </div>
    </div>
  );
}
