import LoadingDots from "./_components/loading-dots";

export default function Loading(params: {
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={`flex flex-1 items-center justify-center ${params.className}`}
    >
      <div className="flex flex-row items-baseline">
        <h1 className="text-6xl font-bold">Loading </h1>
        <LoadingDots />
      </div>
    </div>
  );
}
