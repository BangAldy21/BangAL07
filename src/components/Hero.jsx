import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8">
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl font-extrabold">Hello, I'm Bang AL</h1>
        <p className="text-lg text-gray-300">Frontend Developer | React Enthusiast</p>
        <button className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">Download CV</button>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img src="/me.png" alt="Bang AL" className="w-72 h-72 rounded-full shadow-lg shadow-purple-500/50" />
      </div>
    </div>
  );
}
