// Dynamic Greeting Based on Time
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
  
    const greetingElement = document.createElement("h2");
    greetingElement.textContent = greeting;
    header.appendChild(greetingElement);
  });
  
  // Lightbox for Gallery Images
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.classList.add("lightbox");
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${img.src}" alt="Lightbox Image">
          <span class="close-btn">&times;</span>
        </div>
      `;
      document.body.appendChild(lightbox);
  
      const closeBtn = lightbox.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        lightbox.remove();
      });
    });
  });
  