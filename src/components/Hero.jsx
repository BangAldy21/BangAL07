export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden"
    >
      <div className="aurora absolute inset-0"></div>
      <div className="relative z-10">
        <img
          src="/me.png"
          alt="Bang AL"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-purple-500"
        />
        <h1 className="text-5xl font-bold mb-4 shiny-text">Hi, I'm Bang AL</h1>
        <p className="text-lg text-gray-300">Frontend Developer • React • Firebase</p>
      </div>
    </section>
  );
}
