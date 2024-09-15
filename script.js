var tl = gsap.timeline();

tl.from("#logo", {
  y: -30,
  opacity: 0,
  duration: 0.5,
});

tl.from("#nav-links", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#reg-btn", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#hero-section", {
  y: 60,
  opacity: 0,
  duration: 0.5,
});

tl.from("#stat-nums", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.to("#hero-text span", {
  color: "#24e0b4",
  fontStyle: "italic",
  textShadow: "0px 0px 10px #24e0b4",
  duration: 2,
  stagger: 0.2,
  ease: "power2.out",
});

tl.to("#hero-text span",{
  keyframes: [
    { textShadow: "0px 0px 5px #24e0b4", duration: 0.1 },
    { textShadow: "0px 0px 15px #24e0b4", duration: 0.2 },
    { textShadow: "0px 0px 10px #24e0b4", duration: 0.1 },
    { textShadow: "0px 0px 20px #24e0b4", duration: 0.2 },
    { textShadow: "0px 0px 10px #24e0b4", duration: 0.2 }
  ],
  repeat:-1,
  duration: 2
})


document.getElementById('reg-btn').addEventListener('click', function() {
  window.location.href = 'pages/register.html';
});

document.getElementById('logo').addEventListener('click', function() {
  window.location.href = 'index.html';
});


