// /scripts/hero-rotation.js

document.addEventListener('DOMContentLoaded', () => {
  const configEl = document.getElementById('hero-images-config');
  if (!configEl) {
    console.error('Hero images configuration not found.');
    return;
  }

  let config;
  try {
    config = JSON.parse(configEl.textContent || '{}');
  } catch (error) {
    console.error('Error parsing hero images config:', error);
    return;
  }

  const { images, interval } = config;
  const heroBg = document.getElementById('hero-bg');

  if (!heroBg || !Array.isArray(images) || images.length === 0) {
    console.error('Missing hero elements or images.');
    return;
  }

  let currentIndex = 0;
  let timer;

  function updateImage() {
    heroBg.style.opacity = '0';
    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${images[currentIndex]}')`;
      heroBg.style.opacity = '1';
    }, 500); // Match the CSS transition duration
  }

  function startTimer() {
    timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }, interval);
  }

  // Initialize
  updateImage();
  startTimer();
});
