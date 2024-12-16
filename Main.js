function load() 
{
    fetch('About.html').then(response => response.text())
      .then(html => document.getElementById('about-content').innerHTML = html);
}
let images = ["Screenshot 2023-04-29 175924.png", "Screenshot 2023-04-29 180301.png", "Screenshot 2023-04-29 180537.png"]; // Add your images here
let currentIndex = 0;

document.querySelector('.arrow-right').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById('current-image').src = images[currentIndex];
});

document.querySelector('.arrow-left').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById('current-image').src = images[currentIndex];
});