// Buka undangan
document.getElementById('openBtn').addEventListener('click', () => {
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('content').hidden = false;
  document.getElementById('bgm').play();
});

// Countdown
const targetDate = new Date("2025-10-12T09:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.innerText = "Hari Bahagia Telah Tiba!";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  countdownEl.innerText = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// RSVP Form
document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();
  fetch(this.action, {
    method: "POST",
    body: new FormData(this)
  }).then(() => {
    this.hidden = true;
    document.getElementById("rsvpThanks").hidden = false;
  });
});

// Share WhatsApp
document.getElementById("shareWA").addEventListener("click", () => {
  const url = window.location.href;
  const text = "Halo! Saya mengundang Anda ke pernikahan kami. Silakan buka undangan di " + url;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
});

// Animasi Scroll
AOS.init();

// Swiper Galeri
new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
