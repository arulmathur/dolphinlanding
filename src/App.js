import React from "react";
import { Typewriter } from "react-simple-typewriter";
import dolphinLogo from "./DolphinLogo.jpeg";

function App() {
  return (
    <div className="bg-[url('./background.png')] bg-cover bg-center w-screen h-screen">
      <div className="flex items-center bg-white/40 pt-5 pb-5 mb-5 justify-between">
        <h1 className="text-3xl font-bold ml-10">Dolphin</h1>
        <a
          className="mr-10 bg-blue-400 p-5 rounded-xl font-bold hover:bg-blue-500 transition duration-300 ease-in-out"
          href="https://dolphinmvp.vercel.app/"
        >
          Try our MVP
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 px-5 md:ml-20 lg:ml-20">
          <div className="flex flex-col items-center justify-center text-center text-black pt-10">
            <img
              src={dolphinLogo}
              style={{ width: "40%", height: "40%" }}
              alt="logo"
            />
            <p className="p-2 font-bold uppercase text-white">
              Built with ♥️ at UCLA
            </p>
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
              Simplify your finances
            </h1>
            <div className="mt-4 flex flex-col text-xl font-bold sm:text-3xl md:text-4xl">
              <p className="mr-1.5">
                Quick, simple, insights right at your fingertips
              </p>
              {/* <Typewriter
                words={["spending", "income", "savings"]}
                loop={0}
                cursor={1}
                typeSpeed={120}
              /> */}
            </div>
            <p className=" mt-4 w-[90vw] md:w-auto text-xl font-bold text-white md:text-2xl">
              Now available for alpha testing. Sign up to get early access.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdewrHDJgZPgTi6iE3k7xMs_4CjCC5cJuu8o-b9prMi0x74Yg/viewform?embedded=true"
            width="100%"
            height="680"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
