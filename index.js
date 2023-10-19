var tl = gsap.timeline();
tl.from("nav img ,nav ul li,nav .nav-btn", {
  y: -100,
  duration: 1,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
});

tl.from("#heading h1", {
  y: 500,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#heading img", {
  opacity: 0,
  rotate: 90,
  scale: 0.2,
  delay: 0.3,
  stagger: 0.5,
});

tl.from(".scroll", {
  opacity: 0,
});

tl.to(".scroll", {
  opacity: 0,
  repeat: -1,
  duration: 0.6,
  yoyo: true,
});
