import React from "react";

export default function Tools() {
  const tools = ["React", "Firebase", "TailwindCSS", "Vite", "Framer Motion", "Three.js"];
  return (
    <div className="min-h-screen p-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Tools & Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div key={i} className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition">{tool}</div>
        ))}
      </div>
    </div>
  );
}
