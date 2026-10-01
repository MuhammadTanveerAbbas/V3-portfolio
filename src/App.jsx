import "./App.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[5rem] px-2 sm:px-4 py-2 min-h-screen bg-[#f5f5f5]">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <SiteRoutes />
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
