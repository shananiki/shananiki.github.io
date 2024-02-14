

document.addEventListener('DOMContentLoaded', function() {
    const batteryImage = document.getElementById('batteryImage');
    const imageSources = ["/images/battery1.png", "/images/battery2.png", "/images/battery3.png", "/images/battery4.png"];
    let currentImageIndex = 0;
    // Add click event listener to the img
    batteryImage.addEventListener('click', function() {
      // Change source index
      currentImageIndex++;
      // If we've reached the end of the array, reset to the first image
      if (currentImageIndex === imageSources.length) {
          currentImageIndex = 0;
      }
      // Set the source of the displayed image to the current image
      batteryImage.src = imageSources[currentImageIndex];

    });
  });
  