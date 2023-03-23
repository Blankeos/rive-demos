import { useState } from "react";
import Rive from "@rive-app/react-canvas";
import { useRive } from "@rive-app/react-canvas";

function App() {
  const [count, setCount] = useState(0);
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    autoplay: true,
  });
  const { rive: r2, RiveComponent: RiveComp2 } = useRive({
    src: "/bouncingball.riv",
    autoplay: true,
  });

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-white">
      <nav className="h-32 grid place-items-center">
        <div className="flex flex-col items-center gap-y-1 text-gray-600">
          <h1 className="text-2xl font-bold text-purple-500">🦄 Rive Demos</h1>
          <p className="text-gray-500">Super cool rive demos by Carlo</p>
        </div>
      </nav>
      <main className="flex-grow grid grid-cols-2 place-items-center">
        {/* Card */}
        <div className="bg-white p-5 rounded-xl border shadow-xl">
          <div className="flex flex-col items-center w-96 h-64 gap-y-5">
            <RiveComponent />
            <p className="text-gray-800">Vehicles.riv by Rive</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border shadow-xl">
          <div className="flex flex-col items-center w-96 h-64 gap-y-5">
            <RiveComp2 />
            <p className="text-gray-800">bouncingball.riv by Carlo</p>
          </div>
        </div>
      </main>
      <footer className="grid place-items-center text-purple-400 h-20">
        <div className="flex gap-x-5">
          <a
            target="_blank"
            href="https://rive.app/"
            className="hover:underline"
          >
            Rive
          </a>
          <span>•</span>
          <a
            target="_blank"
            href="https://help.rive.app/runtimes/overview/react"
            className="hover:underline"
          >
            Rive React Runtime Docs
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
