const date = document.querySelector('meta[name="dcterms.created"]')?.content;
if (date) {
	const headerElement = document.querySelector("header");
	const dateElement = document.createElement("h5");
	dateElement.innerText = date;
	headerElement?.appendChild(dateElement);
}
