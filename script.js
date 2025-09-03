// Animasi scroll
AOS.init();

// Swiper Gallery
var swiper = new Swiper('.swiper', {
  pagination: { el: '.swiper-pagination' },
  loop: true,
});

// Countdown
let targetDate = new Date("2025-08-30T09:00:00").getTime();
let countdown = document.getElementById("countdown");
setInterval(() => {
  let now = new Date().getTime();
  let distance = targetDate - now;
  if (distance < 0) {
    countdown.innerHTML = "Acara telah dimulai!";
    return;
  }
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  countdown.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit`;
}, 1000);

// Open Invitation
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openInvitation");
const bgm = document.getElementById("bgm");

openBtn.addEventListener("click", () => {
  cover.style.display = "none";
  mainContent.hidden = false;
  bgm.play();
});
