document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // Preload images
  const images = [
    "/169shots_so.png",
    "/335_1x_shots_so.png",
    "/361_2x_shots_so.png",
  ];

  function preloadImages(imageArray) {
    imageArray.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }

  preloadImages(images);

  // Animate loader appearing
  tl.from("#loader", {
    scale: 0,
    duration: 0.2,
  })
  .to("#loader", {
    right: 0,
    opacity: 1,
    duration: 0.5,
  })
  .from("#loader p", {
    scale: 0,
    duration: 2,
  })
  .to("#loader", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
  })
  .from(".nav-logo", {
    opacity: 0,
    y: -30,
    duration: 0.5,
  })
  .from(".mob-reg >*", {
    y: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  })
  .from(".desk-menu a", {
    opacity: 0,
    stagger: 0.2,
    y: -20,
    duration: 0.3,
  })
  .from(".reg-btn", {
    opacity: 0,
    y: -20,
    duration: 0.4,
  })
  .from(".home-text > *", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  })
  .from(".home-img", {
    x: 200,
    opacity: 0,
    duration: 0.5,
  })
  .to("#img-home", {
    y: 10,
    yoyo: true,
    duration: 1.5,
    repeat: -1,
    ease: "power1.inOut",
  });

  const cursor = document.querySelector("#cursor");
  const imgHome = document.querySelector("#img-home");

  if (imgHome && cursor) {
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
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        });
    });
  } else {
    console.error("Image or cursor elements not found.");
  }

  // Mobile Menu Animation
  const menu = document.querySelector(".menu");
  const cross = document.querySelector(".cross");
  const mobMenu = document.querySelector("#mob-menu");

  if (menu && cross && mobMenu) {
    const tl2 = gsap.timeline();

    tl2.from(mobMenu, {
      x: 200,
      opacity: 0,
      duration: 0.6,
      scrub: 3,
    })
    .from("#mob-menu a", {
      x: 200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });

    tl2.pause();

    menu.addEventListener("click", function () {
      mobMenu.style.display = "flex";
      tl2.play();
    });

    cross.addEventListener("click", function () {
      tl2.reverse();
    });
  } else {
    console.error("Menu, cross, or mobMenu elements not found.");
  }
});
