export default function SectionDescription(params: {
  chassName?: React.ComponentProps<"div">["className"];
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3>{params.title}</h3>
      <p>{params.description}</p>
    </div>
  );
}
