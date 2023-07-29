export default function SectionDescription(params: {
  chassName?: React.ComponentProps<"div">["className"];
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-light-crust px-[max(2vh,2vw)] py-[max(1vh,1vw)]">
      <h3>{params.title}</h3>
      <p>{params.description}</p>
    </div>
  );
}
