gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "+=100%",
    scrub: true,
    invalidateOnRefresh: true,
  },
});

gsap.utils.toArray(".parallax").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  tl.to(layer, { y: movement, ease: "none" }, 0);
});

let controller = new ScrollMagic.Controller();

// home page text/ scroll icon reveal
gsap.from(".main-title", {
  opacity: 0,
  duration: 1.4,
  delay: 1,
  y: 35,
  ease: "expo.out",
});
gsap.from(".subtitle", {
  opacity: 0,
  duration: 1,
  delay: 1.4,
  y: 35,
  ease: "expo.out",
});
gsap.from(".scrollIcon", { opacity: 0, duration: 1.1, delay: 1.2 });

// scroll icon fade out when scrolling down page
new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.99,
})
  .setTween(".scrollIcon", { opacity: 0, duration: 0.4 })
  .addTo(controller);

// Next section scrolls on top of previous
let panels = gsap.utils.toArray(".section");

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
  });
});

// content section text fade in
new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.7,
})
  .setClassToggle(".text", "visible")
  .addTo(controller);

// toolbelt icons fade in
new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.4,
})
  .setClassToggle(".tools", "visible")
  .addTo(controller);

// reveal animation for my picture
let meTween = TweenMax.fromTo(".me", 0.4, { bottom: -550 }, { bottom: 0 });
new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.5,
})
  .setClassToggle(".me", "visible")
  .setTween(meTween)
  .addTo(controller);

// reveal animation for the "hello my name is" sticker
let helloTween = TweenMax.fromTo(
  ".hello",
  0.3,
  { bottom: -350 },
  { bottom: "1rem" }
);
new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.5,
})
  .setClassToggle(".hello", "visible")
  .setTween(helloTween)
  .addTo(controller);

// hide animation for my picture
new ScrollMagic.Scene({
  triggerElement: ".projects",
  triggerHook: 0.9,
})
  .setTween(".me", { left: -450, bottom: -500, duration: 0.001 })
  .addTo(controller);

// hide animation for sticker
new ScrollMagic.Scene({
  triggerElement: ".projects",
  triggerHook: 0.9,
})
  .setTween(".hello", {
    left: "-30%",
    bottom: -300,
    rotation: 360,
    duration: ".01s",
  })
  .addTo(controller);

///////Extensions:
TimelineLite.prototype.wait = function (position) {
  var time = this.duration();
  return this.set({}, {}, time + position);
};
////////////////////////

var popup = new TimelineLite();
popup
  .wait(1)
  .from(".bubble", 0.8, { scale: 0, ease: Elastic.easeOut, x: "550px" })
  .wait(2);
let jiggle = new TimelineMax({ repeat: -1, repeatDelay: 5 });
jiggle.to(".bubble", 0.1, {
  y: "-=5",
  yoyo: true,
  repeat: 5,
  ease: Sine.easeInOut,
});

new ScrollMagic.Scene({
  triggerElement: ".contact",
  triggerHook: 0.1,
  repeat: Infinity,
})
  .setTween(popup)
  .addTo(controller);

// -------------------
// modal /lightbox
// -------------------

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let projectDesc = [
    `Using a JSON file, I have the content on the page dynamically change based on what is clicked. Each time content changes, I use a fade-in and out animation which I felt is a better experience than having it abruptly change. I also chose to make the background slowly animated across the x-axis to give the feeling that the planets are moving through space.`,

    `Though this is a simple landing page, the complexity comes from its responsiveness. When adjusting the browser window, elements on the page slowly move into place with very few hard breakpoints that change the layout. I did this with extensive use of clamp() on margins.`,
  ];

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerText = projectDesc[slideIndex - 1];
}

var modal = document.getElementById("myModal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ---------------
// document.documentElement.style.setProperty(
//   "--vh",
//   `${window.innerHeight / 100}px`
// );

// function setDocHeight() {
//   document.documentElement.style.setProperty(
//     "--vh",
//     `${window.innerHeight / 100}px`
//   );
// }

// window.addEventListener("resize", function () {
//   setDocHeight();
// });
// window.addEventListener("orientationchange", function () {
//   setDocHeight();
// });

// setDocHeight();

// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
  let layers = document.querySelectorAll(".layer");
  layers.forEach((l) => {
    l.style.minHeight = window.innerHeight + "px";
  });

  // let sections = document.querySelectorAll('.section')
  // sections.forEach((section) => {
  //   section.style.minHeight = window.innerHeight + "px";
  // })

  let home = document.getElementById("home")
  home.style.minHeight = window.innerHeight + "px"
};

// define mobile screen size:




