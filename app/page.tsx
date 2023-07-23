import ProficiencyProfile from "./_components/home/proficiency-profile";
import WelcomeMsg from "./_components/home/welcome-msg";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <ProficiencyProfile
        imgRef="/azure-logo.png"
        left={{ start: "50%", end: "6rem" }}
        top={{ start: "20%", end: "30%" }}
      />
      <div className="z-10 flex flex-col rounded-2xl p-20 lg:nm-flat-light-base lg:dark:nm-flat-dark-base">
        <h1 className="mb-2 text-6xl font-bold text-light-mauve dark:text-dark-lavender">
          Harrison Cook
        </h1>
        <h2 className="mb-10 text-3xl">Software Engineer</h2>
        <p className="w-full text-start text-2xl font-normal text-light-green dark:text-dark-green">
          Haere Mai!{" "}
          <span className="text-light-peach dark:text-dark-peach">Hello!</span>
        </p>
        <WelcomeMsg />
      </div>
    </div>
  );
}
