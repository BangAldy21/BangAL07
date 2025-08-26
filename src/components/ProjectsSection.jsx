import { useState } from "react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-glow">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="glass max-w-lg w-full p-6 rounded-xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="mb-4">{selected.description}</p>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
