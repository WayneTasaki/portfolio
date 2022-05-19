let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

timeline
.to('.firstTrees', 5, { y: -970}, '-=5')
.to('.mountains', 5, { y: -400}, '-=5')
.to('.secondTrees', 3, {y: -400}, {y: 0, duration: 5}, '-=5')
.to('.mountainHill', 3, {y: -300}, '-=5')
.to('.fourthTrees', 3, {y: -410}, '-=5')
.to('.content', 5, {top: '0%'}, '-=5')


let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: '225%',
  triggerHook: 0,
})

.setTween(timeline)
.setPin('section')
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: .4, 

})
.setClassToggle(".text", "visible") // add class to reveal
.addTo(controller);

gsap.from('.main-title', {opacity:0, duration: 1.4, delay: 1.1, y: 35, ease:'expo.out'});
gsap.from('.subtitle', {opacity:0, duration: 1, delay: 1.5 , y: 35, ease:'expo.out'});