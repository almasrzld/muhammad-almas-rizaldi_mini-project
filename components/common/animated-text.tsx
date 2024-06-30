"use client";

import React, { useState, useEffect } from "react";

const texts = [
  "futsal field rental",
  "well maintained field",
  "modern technology",
  "fair referee",
];

const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFade(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={fade ? "slide-up-out" : "slide-up-in"}>
      {texts[currentText]}
    </span>
  );
};

export default AnimatedText;
