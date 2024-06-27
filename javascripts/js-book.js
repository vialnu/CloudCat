document.addEventListener("DOMContentLoaded", function () {
  const images = Array.from(document.querySelectorAll(".image-stack img"));

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  images.forEach((img, i) => {
    img.style.zIndex = i;
  });

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const minZIndex = Math.min(
        ...images.map((img) => parseInt(window.getComputedStyle(img).zIndex))
      );
      img.style.zIndex = minZIndex - 1;
    });
  });

  images.forEach((img) => {
    const xOffset = Math.floor(Math.random() * 50) - 25;
    const yOffset = Math.floor(Math.random() * 50) - 25;

    img.style.top = `calc(50% + ${yOffset}px)`;
    img.style.left = `calc(50% + ${xOffset}px)`;
    img.style.transform = "translate(-50%, -50%)";

    if (Math.random() > 0.5) {
      const rotation = Math.floor(Math.random() * 20) - 10;
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }

    img.addEventListener("click", function () {
      img.style.zIndex = -1;
    });
  });
});

window.addEventListener("load", function() {
  document.querySelectorAll('.blur').forEach((element) => {
    element.classList.remove('blur');
  });
});
