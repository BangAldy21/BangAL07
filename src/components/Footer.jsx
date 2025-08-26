import React from "react";

export default function Footer() {
  return (
    <footer className="p-6 text-center bg-black/60 mt-10">
      <p className="text-gray-400">© {new Date().getFullYear()} Bang AL. All rights reserved.</p>
    </footer>
  );
}
