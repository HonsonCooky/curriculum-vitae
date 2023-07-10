import GithubIcon from "./github-icon";
import LinkedInIcon from "./linkedin-icon";

export default function NavBar() {
  return (
    <nav className={`absolute flex w-screen h-[15vh] items-center bg--300 drop-shadow-lg`} >
      <h1 className='flex text-4xl text-dark-text font-bold items-center p-0 pl-5'>Harrison Cook</h1>
      <div className="w-1 h-[60%] bg-dark-text m-5" />
      <h2 className="flex text-dark-text font-thin text-3xl">Software Engineer</h2>
      <div className="flex grow h-full justify-end items-center p-10">
        <div className="inline-block rounded-full flex-col text-center text-xl bg-black fill-current">
          <LinkedInIcon />
        </div>
        <div className="inline-block rounded-full flex-col text-center text-xl bg-black fill-current">
          <GithubIcon />
        </div>
      </div>
    </nav >
  )
}
