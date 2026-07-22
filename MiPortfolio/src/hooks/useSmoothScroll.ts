import { useCallback } from "react";

export function useSmoothScroll(headerOffset: number = 80) {
  const scrollToSection = useCallback(
    (targetId: string) => {
      const formattedId = targetId.startsWith("#") ? targetId : `#${targetId}`;
      const element = document.querySelector(formattedId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [headerOffset]
  );

  return { scrollToSection };
}
