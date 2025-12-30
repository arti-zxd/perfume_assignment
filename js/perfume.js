function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('active');
}
const mainImage = document.getElementById("main-image");
const thumbnailsContainer = document.querySelector(
  ".thumbnails-container"
);
const thumbnails = document.querySelectorAll(".thumbnail");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

const imageSources = [
  "./assets/image_1.png",
  "./assets/image_2.png",
  "./assets/image_3.png",
];

// Function to update the main image and active dot
function updateMainImage(index) {
  mainImage.src = imageSources[index];
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Show the thumbnails only after clicking on next/prev
function toggleThumbnails() {
  thumbnailsContainer.style.display = "flex";
}

// Go to the next image in the carousel
function nextImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  updateMainImage(currentIndex);
  toggleThumbnails();
}

// Go to the previous image in the carousel
function prevImage() {
  currentIndex =
    (currentIndex - 1 + imageSources.length) % imageSources.length;
  updateMainImage(currentIndex);
  toggleThumbnails();
}

// Add event listeners to navigation arrows
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// Add event listeners to dots for manual navigation
dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    currentIndex = parseInt(event.target.getAttribute("data-index"));
    updateMainImage(currentIndex);
  });
});


const singleRadio = document.getElementById('single-subscription');
const doubleRadio = document.getElementById('double-subscription');

const singleContent = document.querySelector('.subscription-option .single-subscription-fields');
const doubleContent = document.querySelector('.subscription-option-double .single-subscription-fields');

// Initial state
singleContent.style.display = 'block';
doubleContent.style.display = 'none';

singleRadio.addEventListener('change', () => {
  if (singleRadio.checked) {
    singleContent.style.display = 'block';
    doubleContent.style.display = 'none';
  }
});

doubleRadio.addEventListener('change', () => {
  if (doubleRadio.checked) {
    singleContent.style.display = 'none';
    doubleContent.style.display = 'block';
  }
});
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    item.classList.add("active");
    item.querySelector(".icon").textContent = "−";
  });
});
