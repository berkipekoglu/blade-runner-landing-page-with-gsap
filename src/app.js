import gsap from "gsap";
import CircleType from "circletype";

// npx parcel src/index.html

const circleType = new CircleType(document.getElementById("rotated"));

gsap.from(".artist", 2, {
  delay: 5.4,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
});

gsap.from(".watch", 2, {
  delay: 5.5,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
});

gsap.from(".menu", 2, {
  delay: 5.6,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
});

gsap.from(".rotatethis", 2, {
  delay: 6,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
});

gsap.from(".social-media ul li", 2, {
  delay: 5.7,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
  stagger: 0.1,
});

gsap.from(".listensong ul li", 2, {
  delay: 5.9,
  opacity: 0,
  y: 20,
  ease: "easeInOut",
  stagger: 0.1,
});

gsap.fromTo(
  ".hero-title h1",
  0.3,
  {
    x: -6,
    y: 2,
    opacity: 0,
  },
  {
    delay: 4,
    x: 6,
    y: -2,
    opacity: 1,
    ease: "slow(40, 8, true)",
    // ease: RoughEase.ease.config({
    //     strength: 8,
    //     points: 40,
    //     template: Linear.easeNone,
    //     randomize: false
    // }),
    clear: "all",
  }
);

gsap.fromTo(
  ".hero-title p",
  0.3,
  {
    x: -6,
    y: 2,
    opacity: 0,
  },
  {
    delay: 7,
    x: 6,
    y: -2,
    opacity: 1,
    ease: "slow(40, 8, true)",
    // ease: RoughEase.ease.config({
    //     strength: 8,
    //     points: 40,
    //     template: Linear.easeNone,
    //     randomize: false
    // }),
    clear: "all",
  }
);
