document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const content = document.getElementById("content");
  const bgm = document.getElementById("bgm");

  // Buka undangan & mainkan musik
  openBtn.addEventListener("click", () => {
    content.hidden = false;
    openBtn.style.display = "none";
    bgm.play();
  });

  // Countdown
  const countdownEl = document.getElementById("countdown");
  const eventDate = new Date("2025-10-12T09:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "Hari ini adalah hari bahagia!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }, 1000);

  // RSVP (Formspree response)
  const rsvpForm = document.getElementById("rsvpForm");
  const rsvpThanks = document.getElementById("rsvpThanks");

  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(rsvpForm);
    const action = rsvpForm.action;
    const response = await fetch(action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      rsvpForm.hidden = true;
      rsvpThanks.hidden = false;
    }
  });

  // Share via WhatsApp
  document.getElementById("shareWA").addEventListener("click", () => {
    const url = window.location.href;
    const text = `Halo, saya mengundang Anda ke acara pernikahan kami.\n\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  });
});
