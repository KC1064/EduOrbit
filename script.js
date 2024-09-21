document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  tl.from(".nav-logo", {
    opacity: 0,
    y: -30,
    duration: 1,
  });

  tl.from(".desk-menu a", {
    opacity: 0,
    stagger: 0.3,
    y: -20,
    duration: 0.5,
  });

  tl.from(".reg-btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
  });

  tl.from(".home-text > *", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from("#img-home", {
    x: 200,
    opacity: 0,
    duration: 0.5,
  });

  tl.to("#img-home", {
    y: 8,
    duration: 1, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut",
  });

  const cursor = document.querySelector("#cursor");
  const imgHome = document.querySelector("#img-home");

  imgHome.addEventListener("mousemove", function (e) {
    cursor.style.display = "flex";
    cursor.innerHTML = "Click";

    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      scale: 2.3,
      duration: 0.6,
    });
  });

  imgHome.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
    gsap.to(cursor, {
      scale: 1, 
      duration: 0.2,
    });
  });

  const images = [
    "/169shots_so.png",
    "/335_1x_shots_so.png",
    "/361_2x_shots_so.png",
  ];
  let currentImageIndex = 0;

  imgHome.style.opacity = 1;

  imgHome.addEventListener("click", function () {
    const timeline = gsap.timeline();

    timeline
      .to(imgHome, {
        rotationY: "+=540", 
        opacity: 0,
        duration: 0.5, 
        scrub: 4,
      })
      .call(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgHome.src = images[currentImageIndex];
      })
      .to(imgHome, {
        opacity: 1,
        rotationY: "+=180",
        duration: 0.5,
      });
  });
});
