"use client";

export default function DownloadBtn() {
  async function download() {
    const response = await fetch("HarrisonCooksCV.pdf");
    const blob = await response.blob();
    window.open(window.URL.createObjectURL(blob));
  }

  return (
    <button className="" onClick={download}>
      Download CV
    </button>
  );
}
