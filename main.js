AOS.init({
  once: true,
});

gsap.registerPlugin(ScrollTrigger);
let controller = new ScrollMagic.Controller();

// CHANGE ALL VAR TO LET OR CONST
// COMMENT WHAT EVERYTHING DOES
// have contact icons change on mouseover

// gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".first",
// 		start: "top top",
// 		end: "+=100%",
// 		scrub: true,
// 		invalidateOnRefresh: true
// 	},
//   scrollTrigger: {
//     trigger: ".first",
//     start: "top top",
//     end: "+=100%",
//     scrub: true,
//     invalidateOnRefresh: true,
//   },
// });


// header animations
// name animation
gsap.from('.main-title', {opacity:0, duration: 1.4, delay: .5, y: 35, ease:'expo.out'});
gsap.from('.subtitle', {opacity:0, duration: 1, delay: .7 , y: 35, ease:'expo.out'});

// avatar animation
const avatarBody = document.getElementById('avatarBody')
gsap.from(avatarBody, {duration: 0.7, delay: .9, ease: Back.easeInOut.config(0.45), y: 300})



const blink = gsap.timeline({delay:2, repeat: -1, repeatDelay: 5});
  blink
    .to(['#eye-right', '#eye-left'], {duration: 0.01, opacity: 0}, 0)
    .to(['#eye-right-closed', '#eye-left-closed'], {duration: 0.01, opacity: 1}, 0)
    .to(['#eye-right', '#eye-left'], {duration: 0.01, opacity: 1}, 0.15)
    .to(['#eye-right-closed', '#eye-left-closed'], {duration: 0.01, opacity: 0}, 0.15);

    
    
    

    

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
emailjs.init("O23p9XzeafjBpOQzJ");
let contactForm = document.getElementById("form-wrapper");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let formSubmitMessageBox = document.getElementById(
  "form-submit-message-wrapper"
);
let formSubmitMessage = document.getElementById("form-submit-message");

let contactSection = document.getElementById("contact");
let emailIcon = document.getElementById("emailIcon");
// FIGURE OUT MOBILE TAPPING OPTION? OR ALWAYS HAVE EMAIL FORM VISIBLE ON MOBILE
emailIcon.addEventListener("click", handleShowForm, { once: true });
emailIcon.addEventListener("touchstart", handleShowForm, { once: true });

function showForm() {
  gsap.from("#form-wrapper", 0.3, { scale: 0, ease: Back.easeOut, x: "0" });
  contactForm.style.display = "block";
  contactSection.style.paddingBottom = "2rem";
}

function handleShowForm(e) {
  e.preventDefault();
  showForm();
}

window.onload = function () {
  userName.value = "";
  userEmail.value = "";
  subject.value = "";
  message.value = "";
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs
        .sendForm("contact_service", "contact_form", this)
        .then(function () {
          formSubmitMessageBox.style.visibility = "visible";
          formSubmitMessageBox.style.opacity = "1";
          formSubmitMessage.style.opacity = "1";
        });
    });
};

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    // mybutton.style.display = "block";
    mybutton.style.opacity = "1";
    mybutton.style.visibility = "visible";
  } else {
    // mybutton.style.display = "none";
    mybutton.style.opacity = "0";
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
