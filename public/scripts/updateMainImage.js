// /scripts/updateMainImage.js

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  const mainCaption = document.getElementById('mainCaption');
  const thumbnails = document.querySelectorAll('.thumbnail-card');

  if (!mainImage || !mainCaption || thumbnails.length === 0) return;

  const images = [
    {
      src: '/images/bakery-exterior.jpg',
      alt: 'Extérieur de la boulangerie',
      caption: 'Notre façade traditionnelle, un repère local'
    },
    {
      src: '/images/patisseries-artisanales.jpg',
      alt: 'Pâtisseries artisanales',
      caption: 'Pâtisseries artisanales, plaisir des sens'
    },
    {
      src: '/images/seating-area.jpg',
      alt: 'Espace de dégustation',
      caption: 'Espace de dégustation, moment de détente'
    }
  ];

  function updateMainImage(index) {
    const selectedImage = images[index];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;
    mainCaption.textContent = selectedImage.caption;

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
      updateMainImage(index);
    });
  });
});
