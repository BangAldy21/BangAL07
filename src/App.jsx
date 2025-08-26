import React from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingChat from "./components/FloatingChat";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Preloader />
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="tools"><Tools /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <FloatingChat />
      </main>
      <Footer />
    </div>
  );
}
