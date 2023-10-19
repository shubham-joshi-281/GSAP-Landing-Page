var loading = gsap.timeline();

const time = () => {
  let count = 0;
  setInterval(() => {
    count += Math.floor(Math.random() * 20);
    if (count < 100) {
      document.querySelector("#loader h1").innerHTML = count + "%";
    } else {
      count = 100;
      document.querySelector("#loader h1").innerHTML = count + "%";
    }
  }, 150);
};
loading.to("#loader h1", {
  scale: 1.1,
  delay: 0.5,
  onStart: time(),
});

loading.to("#loader", {
  y: "-100vh",
  duration: 1,
  delay: 1,
});

var tl = gsap.timeline();
tl.from("nav img ,nav ul li,nav .nav-btn", {
  y: -100,
  duration: 1,
  opacity: 0,
  delay: 2.5,
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

// Page 2

gsap.from("#page2 .left-section h2 ", {
  x: -500,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 .left-section h2 ",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from("#page2 .right-section img", {
  scale: 0.6,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 .right-section img",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 3,
  },
});

// page 3

gsap.from("#page3 .box ", {
  scale: 1.2,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page3 .box ",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 3,
  },
});
