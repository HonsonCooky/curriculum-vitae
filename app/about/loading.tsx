import Loading from "../_components/loading/loading";

export default function LoadingAbout() {
  return (
    <div className=" flex flex-1 flex-col items-center justify-center">
      <Loading className="text-6xl" dotSize="0.85rem" />
    </div>
  );
}
