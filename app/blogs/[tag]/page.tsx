export default function TagPage(params: { slug: string }) {
  return (
    <div className="flex flex-1 items-center justify-center">{params.slug}</div>
  );
}
