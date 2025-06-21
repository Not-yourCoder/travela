import { useEffect, useState } from "react";

export default function useScrollWatcher() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return hasScrolled ;
}
