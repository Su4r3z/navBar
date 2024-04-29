const navbar = document.querySelector(".navbar");
const menuIcon = document.getElementById("menuIcon");
const navElements = document.querySelectorAll("li");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navElements.forEach((link, index) => {
    console.log(index);
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          (index / 7) * 0.3
        }s`);
  });

  let currentDirection = parseInt(menuIcon.dataset.direction);
  const newDirection = (currentDirection + 90) % 180;
  menuIcon.dataset.direction = newDirection;
  menuIcon.style.transition = "transform 0.3s ease-in-out";
  menuIcon.style.transform = `rotate(${newDirection}deg)`;
});
