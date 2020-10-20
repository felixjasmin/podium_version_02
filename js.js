

const timeLine = gsap.timeline({
  defaults: {
    ease: "easeIn"
  },
  repeat: -1,
  yoyo: true,
  repeatDelay: 2
})

.to(".square_03", {height: "3vh"})
.to(".square_02", {height: "6vh"})
.to(".square_01", {height: "10vh"})
.to(".trophy", {height: "5vh", bottom: "60vh"})

