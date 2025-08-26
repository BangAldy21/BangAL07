import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white/10" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white/10" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-white/10"></textarea>
        <button className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">Send</button>
      </form>
    </div>
  );
}
