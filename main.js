gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let controller = new ScrollMagic.Controller();



///////Extensions:
TimelineLite.prototype.wait = function (position) {
  var time = this.duration();
  return this.set({}, {}, time + position);
};
////////////////////////

var popup = new TimelineLite();
popup
  .wait(1)
  .from(".bubble", 0.8, { scale: 0, ease: Elastic.easeOut, x: "550px" });

  let jiggle = new TimelineMax({ repeat: -1, repeatDelay: 3 });
jiggle.to(".bubble", 0.1, {
  y: "-=5",
  yoyo: true,
  repeat: 5,
  ease: Sine.easeInOut,
});

new ScrollMagic.Scene({
  triggerElement: ".contact",
  repeat: Infinity,
})
  .setTween(popup)
  .addTo(controller);

  // contact form

  function sendEmail() {
  Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
  }