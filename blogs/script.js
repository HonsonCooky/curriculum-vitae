const blogList = document.getElementById("blog-list");
const fetchFiles = await fetch(`${window.location.origin}/blogs/posts`).then((res) => res.text());
const fileNames = Array.from(fetchFiles.matchAll(/title="([^"]*)"/g))
	.map(([t]) => t.replaceAll('title="', "").replaceAll('"', ""))
	.filter((t) => t.endsWith(".html") && !t.startsWith("_"));

const blogLinks = [];
for (const fn of fileNames) {
	const link = `${window.location.origin}/blogs/posts/${fn}`;
	const file = await fetch(link)
		.then((res) => res.text())
		.then((txt) => new DOMParser().parseFromString(txt, "text/html"));
	const head = file.querySelector("head");
	const title = head.querySelector("title")?.innerText;
	const description = head.querySelector('meta[name="description"]')?.content;
	const date = head.querySelector('meta[name="dcterms.created"]')?.content;

	const aTag = document.createElement("a");
	aTag.href = link;

	const titleElement = document.createElement("h3");
	titleElement.innerText = title;
	aTag.appendChild(titleElement);

	const dateElement = document.createElement("h5");
	dateElement.innerText = date;
	aTag.appendChild(dateElement);

	const descriptionElement = document.createElement("p");
	descriptionElement.innerText = description;
	aTag.appendChild(descriptionElement);

	blogLinks.push(aTag);
}

blogList.innerHTML = "";
for (const link of blogLinks) {
	blogList.appendChild(link);
}
