"use client";

import { useEffect, useState } from "react";

export default function AnimatedYear() {
  const [showNextYear, setShowNextYear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextYear(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="relative h-11 w-[5ch] overflow-hidden text-center text-4xl font-extrabold tracking-[0.16em]">
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          showNextYear ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        2019
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          showNextYear ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        2020
      </span>
    </p>
  );
}
