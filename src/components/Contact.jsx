import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), form);
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-glow">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
