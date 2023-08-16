import LoadingDots from "./loading-dots";

export default function Loading(params: {
  className?: React.ComponentProps<"div">["className"];
  dotSize?: string;
}) {
  return (
    <div className={`flex flex-row items-baseline ${params.className}`}>
      <h1 className="font-bold">Loading </h1>
      <LoadingDots dotSize={params.dotSize} />
    </div>
  );
}
