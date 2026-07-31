// Small site script for Shobha Hub Apps landing page
document.getElementById('year').textContent = new Date().getFullYear();

// Replace the placeholder with your actual Google Play URL for the app or developer page.
const PLAY_STORE_URL = '#'; // e.g. 'https://play.google.com/store/apps/developer?id=Shobha+Hub+Apps'

function openPlayStore(e){
  e && e.preventDefault && e.preventDefault();
  if (PLAY_STORE_URL && PLAY_STORE_URL !== '#'){
    window.open(PLAY_STORE_URL, '_blank');
  } else {
    // If no URL provided, show a helpful prompt
    alert('No Play Store link configured. Please update assets/script.js with your Play Store URL.');
  }
}
