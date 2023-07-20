"use client";
export default function DownloadCsvButton() {
  async function download() {
    const response = await fetch("HarrisonCooksCV.pdf");
    const blob = await response.blob();
    window.open(window.URL.createObjectURL(blob));
  }

  return (
    <button onClick={download} className="inline-flex items-center">
      <svg
        className="m-2 h-6 fill-light-crust dark:fill-dark-crust"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span className="text-3xl text-light-crust dark:text-dark-crust">
        Download CV.pdf
      </span>
    </button>
  );
}
