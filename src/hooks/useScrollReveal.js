import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Watches every ".reveal" element on the page and adds
// ".reveal-visible" once it scrolls into view. Re-scans on
// route change so newly rendered pages pick up new elements.
function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal:not(.reveal-visible)"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
}

export default useScrollReveal;
