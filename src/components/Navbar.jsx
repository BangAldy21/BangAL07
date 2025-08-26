import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg text-white z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-glow">Bang AL</h1>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`md:flex gap-8 ${open ? "block" : "hidden"} md:block`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
