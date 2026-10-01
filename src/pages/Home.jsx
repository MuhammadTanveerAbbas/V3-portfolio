import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-center">
          Let&rsquo;s work together.
        </h2>
        <p className="text-sm text-gray-400 mt-1.5 tracking-tight">
          Crafting engaging user experiences
        </p>
      </div>
    </>
  );
}
