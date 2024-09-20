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
  duration: 2, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

const cursor = document.querySelector("#cursor");
const imgHome = document.querySelector("#img-home"); // Select the img element by its ID

// Move cursor with mouse and show "Click"
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

// Hide the cursor when leaving the image
imgHome.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
  gsap.to(cursor, {
    scale: 1, // Reset scale on mouse leave
    duration: 0.2,
  });
});

const images = [
  "/assets/169shots_so.png",
  "/assets/335_1x_shots_so.png",
  "/assets/361_2x_shots_so.png",
];
let currentImageIndex = 0;

imgHome.style.opacity = 1; // Ensure the image starts fully visible

imgHome.addEventListener("click", function () {
  const timeline = gsap.timeline(); // Create a new timeline

  // First, rotate the image while fading out
  timeline
    .to(imgHome, {
      rotationY: "+=180", // Rotate 360 degrees
      opacity: 0,
      duration: 0.5, // Duration for rotation and fade
      scrub: 4,
    })
    .call(function () {
      // Change the image source when the rotation is complete
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imgHome.src = images[currentImageIndex];
    })
    .to(imgHome, {
      opacity: 1, // Fade in the new image
      rotationY: 0, // Reset rotation for the new image
      duration: 0.5,
      scrub: 4, // Duration for fade in
    });
});
