import { useSyncExternalStore, useCallback } from "react";

export function useScroll(threshold: number = 20): boolean {
  const subscribe = useCallback((callback: () => void) => {
    if (typeof window === "undefined") return () => {};

    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > threshold;
    }
    return false;
  }, [threshold]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
