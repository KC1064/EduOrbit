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
  duration: 1,
  stagger: 0.2,
});

tl.to("#hero-text span", {
  keyframes: [
    { textShadow: "0px 0px 15px #24e0b4", duration: 0.1 },
    { textShadow: "0px 0px 20px #24e0b4", duration: 0.2 },
    { textShadow: "0px 0px 30px #24e0b4", duration: 0.1 },
    { textShadow: "0px 0px 20px #24e0b4", duration: 0.2 },
    { textShadow: "0px 0px 15px #24e0b4", duration: 0.2 },
  ],
  repeat: -1,
  duration: 1,
  ease: "power1.inOut",
});

document.getElementById("reg-btn").addEventListener("click", function () {
  window.location.href = "pages/register.html";
});

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html";
});

function showMenu() {
  const navMob = document.querySelector(".nav-mob");
  if (navMob.style.display === "flex") {
    navMob.style.display = "none";
  } else {
    navMob.style.display = "flex";
  }
}

function hidemenu() {
  const navMob = document.querySelector(".nav-mob");
  if (navMob.style.display === "flex") {
    navMob.style.display = "none";
  } else {
    navMob.style.display = "flex";
  }
}

var main = document.querySelector("main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (e) {
  console.log("Clicked");
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 1,
    scale: 1,
  });
});

  