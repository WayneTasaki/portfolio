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
  duration: '100%',
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
  triggerHook: .7, 
})
.setTween('.scrollIcon', 1, {opacity: 0, duration: .4,})
.addTo(controller);


// content section text fade in
new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: .7,
})
.setClassToggle(".text", "visible")
.addTo(controller)


// reveal animation for my picture
let meTween = TweenMax.fromTo('.me', .3, {bottom: -550}, {bottom:
  0})
new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: .6, 
})
.setClassToggle(".me", "visible")
.setTween(meTween)
.addTo(controller);



// reveal animation for the "hello my name is" sticker
let helloTween = TweenMax.fromTo('.hello', .4, {bottom: -350}, {bottom: '1rem'})
new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: .5, 
})
.setClassToggle(".hello", "visible")
.setTween(helloTween)
.addTo(controller);


// fade out animation for my picture
new ScrollMagic.Scene({
  triggerElement: ".hello",
  triggerHook: .90, 
})
.setTween('.me', 1, {opacity: 0, duration: .3})
// .setClassToggle(".me", "visible")