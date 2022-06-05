document.addEventListener('DOMContentLoaded', function() {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: '200%' // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  // get all slides
  let slides = document.querySelectorAll(".panel");

  // create scene for every slide
  for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      .addTo(controller);
  };

}, false);



let controller = new ScrollMagic.Controller()








// home page parallax
let timeline = new TimelineMax()
timeline
.to('.firstTrees', 5, { y: -970}, '-=5')
.to('.mountains', 5, { y: -400}, '-=5')
.to('.secondTrees', 3, {y: -400}, {y: 0, duration: 5}, '-=5')
.to('.mountainHill', 3, {y: -300}, '-=5')
.to('.fourthTrees', 3, {y: -410}, '-=5')
.to('.content', 5, {top: '0%'}, '-=5')
.to('.scrollIcon', 1.5, {y: -325}, '-=5')

let scene = new ScrollMagic.Scene({
triggerElement: '.parOne',
duration: '170%',
triggerHook: 0,
})
.setTween(timeline)
.setPin('.parOne')
.addTo(controller);


// home page text/ scroll icon reveal
gsap.from('.main-title', {opacity:0, duration: 1.4, delay: 1, y: 35, ease:'expo.out'});
gsap.from('.subtitle', {opacity:0, duration: 1, delay: 1.4 , y: 35, ease:'expo.out'});
gsap.from('.scrollIcon', {opacity: 0, duration: 1.1, delay:1.8})


// scroll icon fade out when scrolling down page
new ScrollMagic.Scene({
triggerElement: ".content",
triggerHook: .9, 
})
.setTween('.scrollIcon', {opacity: 0, duration: .4,})
.addTo(controller);


// content section text fade in
new ScrollMagic.Scene({
triggerElement: ".content",
triggerHook: .7,
})
.setClassToggle(".text", "visible")
.addTo(controller)


// reveal animation for my picture
let meTween = TweenMax.fromTo('.me', .4, {bottom: -550}, {bottom: 0})
new ScrollMagic.Scene({
triggerElement: ".content",
triggerHook: .5, 
})
.setClassToggle(".me", "visible")
.setTween(meTween)
.addTo(controller);



// reveal animation for the "hello my name is" sticker
let helloTween = TweenMax.fromTo('.hello', .3, {bottom: -350}, {bottom: '1rem'})
new ScrollMagic.Scene({
triggerElement: ".content",
triggerHook: .5,
})
.setClassToggle(".hello", "visible")
.setTween(helloTween)
.addTo(controller);


// hide animation for my picture
new ScrollMagic.Scene({
triggerElement: ".projects",
triggerHook: .9, 
})
.setTween('.me', {left: -450, bottom: -500, duration: .001})
.addTo(controller);


// hide animation for sticker
new ScrollMagic.Scene({
triggerElement: ".projects",
triggerHook: .9, 
})
.setTween('.hello', {left: '-30%', bottom: -300, rotation: 360, duration: '.01s'})
.addTo(controller);



// -------------------
// modal /lightbox
// -------------------

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = 'hidden'
  
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = 'auto'
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let projectDesc = [
    `Using a JSON file, I have the content on the page dynamically change based on what is clicked. Each time content changes, I use a fade-in and out animation which I felt is a better experience than having it abruptly change. I also chose to make the background slowly animated across the x-axis to give the feeling that the planets are moving through space.`, 
    
    `Though this is a simple landing page, the complexity comes from its responsiveness. When adjusting the browser window, elements on the page slowly move into place with very few hard breakpoints that change the layout. I did this with extensive use of clamp() on margins.`
  ];
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerText = projectDesc[slideIndex-1];
}

var modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 