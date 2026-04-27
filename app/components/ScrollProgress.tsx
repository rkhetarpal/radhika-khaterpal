"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress =
        (window.scrollY / totalHeight) * 100;

      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999]">
      <div
        className="h-full bg-blue-700 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}