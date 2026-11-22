"use client";

import { useEffect, useRef, useState } from "react";

const words = [":)", "^^", "ツ", ":>"];
const typingSpeed = 250;
const deletingSpeed = 150;
const pauseTime = 2000;

export default function TypeWriter() {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function type() {
      const currentWord = words[wordIndexRef.current];

      if (isDeletingRef.current) {
        setText(currentWord.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
      } else {
        setText(currentWord.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
      }

      if (!isDeletingRef.current && charIndexRef.current === currentWord.length) {
        isDeletingRef.current = true;
        timerRef.current = setTimeout(type, pauseTime);
        return;
      }

      if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        timerRef.current = setTimeout(type, 800);
        return;
      }

      timerRef.current = setTimeout(
        type,
        isDeletingRef.current ? deletingSpeed : typingSpeed
      );
    }

    timerRef.current = setTimeout(type, 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <span className="ml-3 inline-block min-w-[60px] text-left">
      {text}
      <span className="cursor-blink text-blue-600 ml-1">|</span>
    </span>
  );
}