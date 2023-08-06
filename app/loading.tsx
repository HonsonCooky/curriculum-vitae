import LoadingDots from "./_components/loading-dots";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-row items-baseline">
        <h1 className="text-6xl font-bold">Loading </h1>
        <LoadingDots />
      </div>
    </div>
  );
}
