"use client";

import { useEffect, useRef, useState } from "react";

interface DecoderTextProps {
  text: string;
  className?: string;
}

export default function DecoderText({ text, className = "" }: DecoderTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDecoded, setIsDecoded] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+=[]{}|;:,.<>?";
  
  // Initialize with random characters when visible
  const [displayChars, setDisplayChars] = useState<string[]>(
    text.split("").map(() => chars[Math.floor(Math.random() * chars.length)])
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isDecoded) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isDecoded]);

  useEffect(() => {
    if (!isVisible || isDecoded) return;

    let iteration = 0;
    // 50% longer animation
    const maxIterations = Math.floor(text.length * 30); 

    const interval = setInterval(() => {
      const newChars = [...displayChars];
      
      newChars.forEach((_, i) => {
        const originalChar = text[i];
        if (originalChar === " ") return;

        // Characters decode from left to right with delay
        const delay = i * 12;

        if (iteration > delay) {
          if (iteration > delay + 20) {
            // Show final character
            newChars[i] = originalChar;
          } else {
            // Show random character
            newChars[i] = chars[Math.floor(Math.random() * chars.length)];
          }
        }
      });

      setDisplayChars(newChars);
      iteration += 1;

      // Check if all characters are decoded
      if (newChars.join("") === text) {
        setIsDecoded(true);
        clearInterval(interval);
      }

      // Stop after max iterations
      if (iteration > maxIterations) {
        setDisplayChars(text.split(""));
        setIsDecoded(true);
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [isVisible, isDecoded, text]);

  return (
    <span
      ref={elementRef}
      className={`decoder-text ${className}`}
      style={{
        display: "inline-flex",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {displayChars.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            minWidth: text[i] === " " ? "0.5ch" : "auto",
          }}
        >
          {text[i] === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
