import React from "react";

export default function Projects() {
  const projects = ["p1.png","p2.png","p3.png","p4.png","p5.png","p6.png"];
  return (
    <div className="min-h-screen p-8 text-center">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((src, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl hover:scale-105 transition">
            <img src={`/${src}`} alt={`Project ${i+1}`} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
