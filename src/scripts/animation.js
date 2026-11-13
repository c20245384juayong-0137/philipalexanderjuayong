import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline({
  defaults: {
    duration: 0.7,
    ease: "power3.out",
  },
});

intro
  .from(".hero-eyebrow", { y: 16, opacity: 0 })
  .from(".hero-title", { y: 42, opacity: 0, duration: 0.9 }, "-=0.35")
  .from(".hero-copy", { y: 20, opacity: 0 }, "-=0.5")
  .from(".hero-actions > *", { y: 14, opacity: 0, stagger: 0.12 }, "-=0.35")
  .from(
    "nav a",
    {
      y: -12,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    },
    0,
  );

document.querySelector("#replayBtn")?.addEventListener("click", () => {
  intro.restart();
});

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  gsap.from("#about > div", {
    y: 28,
    opacity: 0,
    stagger: 0.16,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      start: "top 82%",
      end: "center 58%",
      scrub: 1,
    },
  });

  gsap.from("#projects h2", {
    y: 24,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 84%",
      end: "top 52%",
      scrub: 1,
    },
  });

  gsap.from("#projects article", {
    y: 48,
    opacity: 0,
    scale: 0.98,
    stagger: 0.12,
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 78%",
      end: "center 55%",
      scrub: 1.2,
    },
  });

  gsap.from("#contact > *", {
    y: 30,
    opacity: 0,
    stagger: 0.12,
    ease: "none",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 82%",
      end: "center 58%",
      scrub: 1,
    },
  });
});

const darkModeToggle = document.querySelector("#darkModeToggle");

if (darkModeToggle instanceof HTMLButtonElement) {
  const updateThemeLabel = () => {
    const isDark = document.documentElement.classList.contains("dark");
    darkModeToggle.setAttribute("aria-pressed", String(isDark));
    darkModeToggle.textContent = isDark ? "Use light theme" : "Use dark theme";
  };

  darkModeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabel();
  });

  updateThemeLabel();
}
