import { useEffect, useState } from "react";

export function useIsScrolling(delay = 100) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the previous timeout
      clearTimeout(timeoutId);

      // Set a new timeout to reset isScrolling after 'delay' ms
      timeoutId = window.setTimeout(() => {
        setIsScrolling(false);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return isScrolling;
}
