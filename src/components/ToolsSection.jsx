import { tools } from "../data/tools";

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-glow">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 object-contain mb-3 hover:scale-110 transition-transform"
              />
              <p className="text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
