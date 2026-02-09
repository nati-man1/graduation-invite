console.log("Countdown script is loaded");

window.addEventListener("DOMContentLoaded", () => {
  const eventDate = new Date("2026-02-14T14:00:00+03:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      // Update HTML
      document.querySelector(".countdown").innerHTML = "🎉 The event has started!";

      // Stop countdown
      clearInterval(timer);

      // Optional desktop notification
      if (Notification.permission === "granted") {
        new Notification("The event has started!");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification("The event has started!");
          }
        });
      }

      return; // exit function
    }

    // Calculate remaining time
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Update HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Run countdown
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
});
