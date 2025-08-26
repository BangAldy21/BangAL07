import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <h1 className="text-3xl animate-pulse bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Loading Bang AL...</h1>
    </div>
  );
}
