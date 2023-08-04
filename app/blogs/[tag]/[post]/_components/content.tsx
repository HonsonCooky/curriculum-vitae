import "./content.css";
export default function ContentHtml(params: { content: string }) {
        return (
                <div
                        className="content mb-[min(2vh,2vw)]"
                        dangerouslySetInnerHTML={{ __html: params.content }}
                />
        );
}
