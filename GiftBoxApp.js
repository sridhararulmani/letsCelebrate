const click = document.querySelector(".click");
const giftBox = document.querySelector(".giftBox");
const Shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".giftContainer");
const bubble = document.querySelector(".bubble");
const button = document.querySelector(".button");

const horn = new Audio();
horn.src = "media/horn.mp3";
const popSound = new Audio();
popSound.src = "media/popSound.m4a";

let canves = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

function wish() {
  horn.play();
  popSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 2000,
  });
}

giftBox.addEventListener("click", () => {
  if (click.className === "click") {
    wish();
    click.classList.add("active");
    giftBox.classList.add("active");
    Shadow.classList.add("active");
    giftContainer.classList.add("active");
    bubble.classList.add("active");
    button.classList.add("active");
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    Shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    bubble.classList.remove("active");
    button.classList.remove("active");
  }
});
