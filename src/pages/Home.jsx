import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-2">
        <h2 className="text-3xl font-semibold text-center">
          Let&rsquo;s work together.
        </h2>
        <p className="text-md font-normal text-gray-500 text-center px-4">
          Crafting engaging user experiences
        </p>
      </div>
    </>
  );
}
