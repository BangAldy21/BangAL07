export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-glow">About Me</h2>
        <div className="glass max-w-2xl mx-auto p-6 rounded-xl">
          <p>
            Saya seorang <span className="text-purple-400">Frontend Developer</span> 
            dengan fokus pada React, Vite, Tailwind, dan Firebase. 
            Saya suka membangun aplikasi web modern yang interaktif 
            dengan animasi dan desain elegan.
          </p>
        </div>
      </div>
    </section>
  );
}
