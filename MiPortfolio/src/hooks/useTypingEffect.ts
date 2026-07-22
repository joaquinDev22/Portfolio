import { useState, useEffect } from "react";

export function useTypingEffect(fullText: string, speed: number = 20): string {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [fullText, speed]);

  return displayedText;
}
