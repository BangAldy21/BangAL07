import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl text-gray-300">Saya adalah seorang developer yang fokus di frontend dengan React. Suka eksplor animasi modern dan integrasi Firebase.</p>
      <model-viewer src="/card.glb" alt="3D Card" auto-rotate camera-controls style={{width: "400px", height: "400px"}}></model-viewer>
    </div>
  );
}
