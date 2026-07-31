// Set this to your real Google Play developer page or listing URL.
const PLAY_STORE_URL = "https://play.google.com/store/apps/dev?id=REPLACE_WITH_YOUR_DEVELOPER_ID";

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-play-link]").forEach((el) => {
    el.setAttribute("href", PLAY_STORE_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
});
