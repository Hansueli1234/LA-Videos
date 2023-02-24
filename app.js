// select objects
const section = document.querySelectorAll(".main");
const navLinks = document.querySelectorAll(".menu_container a");
const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".menu_container");

// highlight sections
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".menu_container a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// open hamgurger menu on click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuContainer.classList.toggle("active");
});

// hide hamburger menu on click
document.querySelector("main").addEventListener("click", () => {
  hamburger.classList.remove("active");
  menuContainer.classList.remove("active");
});

document
  .querySelector(".menu_container a:nth-child(1)")
  .addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
  });

document
  .querySelector(".menu_container a:nth-child(2)")
  .addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
  });

document
  .querySelector(".menu_container a:nth-child(3)")
  .addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
  });

document
  .querySelector(".menu_container a:nth-child(4)")
  .addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
  });

document
  .querySelector(".menu_container a:nth-child(5)")
  .addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuContainer.classList.remove("active");
  });

// reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var realtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (realtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//dont show overlay for video on ios and android
var userAgent = navigator.userAgent;

// Check if the user is using an iOS or Android device
if (/iPad|iPhone|iPod/.test(userAgent) || /Android/.test(userAgent)) {
  // Show the object
  document.querySelector(".overlay").style.display = "none";
}
