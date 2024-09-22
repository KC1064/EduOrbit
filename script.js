document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // Animate loader appearing
  tl.from("#loader", {
    scale: 0,
    duration: 0.2
  });


  tl.to("#loader", {
    right: 0,
    opacity: 1,  
    duration: 0.5,
  });


  tl.from("#loader p", {
    scale: 0,
    duration: 2,
    // stagger:1
  });

  tl.to("#loader", {
    opacity: 0,
    scale: 0,
    duration: 1.5,
    // onComplete: function() {
    //   document.querySelector("#loader").style.display = "none"; // Hide the loader after animation completes
    // }
  });

  tl.from(".nav-logo", {
    opacity: 0,
    y: -30,
    duration: 0.5,
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

  tl.from(".home-img", {
    x: 200,
    opacity: 0,
    duration: 0.5,
  });

  tl.to("#img-home", {
    y: 10, 
    yoyo: true,
    duration: 1.5,
    repeat: -1,
    ease: "power1.inOut", 
  });
  

  const cursor = document.querySelector("#cursor");
  const imgHome = document.querySelector("#img-home");

  if (!imgHome || !cursor) return; // Ensure elements exist

  imgHome.addEventListener("mousemove", function (e) {
    cursor.style.display = "flex";
    cursor.innerHTML = "Click";

    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
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
        scale: 1.2,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .call(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgHome.src = images[currentImageIndex];
      })
      .to(imgHome, {
        scale: 1,
        opacity:1,
        duration: 0.5,
        ease: "power1.inOut",
      });
  });
  
});
