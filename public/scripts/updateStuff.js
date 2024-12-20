// /public/scripts/updateStuff.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('updateStuff.js loaded');

  // Categories data must match the Astro component
  const categories = [
    {
      name: "Nos Pains",
      key: "pains",
      icon: "/icons/baguette.svg",
      products: [
        { src: "/images/pain1.jpg", alt: "Pain de campagne", name: "Pain de campagne" },
        { src: "/images/pain2.jpg", alt: "Baguette tradition", name: "Baguette tradition" },
        { src: "/images/pain3.jpg", alt: "Pain complet", name: "Pain complet" },
        { src: "/images/pain4.jpg", alt: "Pain multicéréales", name: "Pain multicéréales" }
      ]
    },
    {
      name: "Nos Viennoiseries",
      key: "viennoiseries",
      icon: "/icons/croissant.svg",
      products: [
        { src: "/images/viennoiserie1.jpg", alt: "Croissant beurre", name: "Croissant beurre" },
        { src: "/images/viennoiserie2.jpg", alt: "Pain au chocolat", name: "Pain au chocolat" },
        { src: "/images/viennoiserie3.jpg", alt: "Brioche", name: "Brioche" }
      ]
    },
    {
      name: "Nos Pâtisseries",
      key: "patisseries",
      icon: "/icons/cake.svg",
      products: [
        { src: "/images/patisserie1.jpg", alt: "Beignet", name: "Beignet" },
        { src: "/images/patisserie2.jpg", alt: "Éclair au chocolat", name: "Gâteau d'anniversaire" },
        { src: "/images/patisserie3.jpg", alt: "Mille-feuille", name: "Gâteau" }
      ]
    }
  ];

  let selectedCategoryKey = "patisseries";

  /**
   * Function to handle category selection.
   * @param {string} key - The key of the selected category.
   */
  function selectCategory(key) {
    if (selectedCategoryKey === key) return; // Prevent re-rendering if the same category is selected
    selectedCategoryKey = key;
    updateUI();
  }

  /**
   * Function to update the UI based on the selected category.
   */
  function updateUI() {
    console.log(`Updating UI for category: ${selectedCategoryKey}`);
    const chosen = categories.find(c => c.key === selectedCategoryKey);
    if (!chosen) {
      console.error(`Category with key "${selectedCategoryKey}" not found.`);
      return;
    }

    const section = document.querySelector('.products-section');
    if (!section) {
      console.error('Products section not found.');
      return;
    }

    // Update tab states
    const tabContainers = section.querySelectorAll('.category-tab');
    tabContainers.forEach((container) => {
      const key = container.getAttribute('data-key');
      if (key === chosen.key) {
        container.classList.add('opacity-100');
        container.classList.remove('opacity-60');
        container.setAttribute('aria-selected', 'true');
      } else {
        container.classList.add('opacity-60');
        container.classList.remove('opacity-100');
        container.setAttribute('aria-selected', 'false');
      }
    });

    // Update products grid
    const productsGrid = section.querySelector('.products-grid');
    if (productsGrid) {
      productsGrid.innerHTML = ''; 
      chosen.products.forEach(product => {
        console.log(`Adding product: ${product.name}`);
        const card = document.createElement('div');
        // Fixed height using Tailwind's h-64 (16rem / 256px)
        card.className = 'relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg group h-64 bg-white';

        // Create the image element
        const img = document.createElement('img');
        img.src = product.src;
        img.alt = product.alt;
        img.loading = 'lazy';
        // Ensure images cover the container and are centered
        img.className = 'w-full h-full object-cover object-center block';

        // Append image to the card
        card.appendChild(img);

        // Create the overlay
        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300';

        const overlayTitle = document.createElement('h4');
        overlayTitle.textContent = product.name;
        overlayTitle.className = 'text-xl font-bold text-white';

        overlayDiv.appendChild(overlayTitle);

        // Append overlay to the card
        card.appendChild(overlayDiv);

        // Append card to the products grid
        productsGrid.appendChild(card);
      });
    } else {
      console.error('Products grid not found.');
    }
  }

  /**
   * Function to attach event listeners to category tabs.
   */
  function attachEventListeners() {
    const categoryElements = document.querySelectorAll('.category-tab');
    console.log(`Found ${categoryElements.length} category tabs.`);
    categoryElements.forEach(el => {
      el.addEventListener('click', () => {
        const key = el.getAttribute('data-key');
        console.log(`Clicked category: ${key}`);
        if (key) {
          selectCategory(key);
        }
      });

      // Accessibility: Handle Enter key for keyboard navigation
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const key = el.getAttribute('data-key');
          console.log(`Pressed Enter on category: ${key}`);
          if (key) {
            selectCategory(key);
          }
        }
      });
    });
  }

  // Attach event listeners to category tabs
  attachEventListeners();

  // Initial UI update
  updateUI();
});
