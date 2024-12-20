// /scripts/updateBakerImage.js

document.addEventListener('DOMContentLoaded', () => {
  const bakerMain = document.getElementById('bakerMain');
  const bakerCaption = document.getElementById('bakerCaption');
  const thumbnails = document.querySelectorAll('.baker-thumbnail-card');

  if (!bakerMain || !bakerCaption || thumbnails.length === 0) return;

  const images = [
    { src: "/images/baker1.jpg", alt: "Boulanger au travail" },
    { src: "/images/baker2.jpg", alt: "Sélection de pains" },
    { src: "/images/baker3.jpg", alt: "Notre boulanger avec son prix" }
  ];

  function updateBakerImage(index) {
    const selectedImage = images[index];
    bakerMain.src = selectedImage.src;
    bakerMain.alt = selectedImage.alt;
    bakerCaption.textContent = selectedImage.alt;

    // Update active thumbnail
    thumbnails.forEach((thumb, idx) => {
      if (idx === index) {
        thumb.classList.add('border-teal-500');
      } else {
        thumb.classList.remove('border-teal-500');
      }
    });
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateBakerImage(index);
    });
  });
});
