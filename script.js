// ======================================
// SELECT ELEMENT
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const navbar = document.querySelector("header");
const navMenu = document.querySelector("nav ul");


// ======================================
// ACTIVE NAVBAR LINK
// ======================================

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});


// ======================================
// NAVBAR SHADOW ON SCROLL
// ======================================

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    navbar.style.background = "rgba(5,8,22,0.95)";
    navbar.style.backdropFilter = "blur(10px)";

  } else {

    navbar.style.boxShadow = "none";
    navbar.style.background = "#050816";

  }

});


// ======================================
// REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(
  ".hero-left, .hero-right, .about-image, .about-content, .project-card, .skill-box"
);

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "linear-gradient(135deg,#7b61ff,#5c42f5)";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.boxShadow = "0 10px 20px rgba(123,97,255,0.3)";
scrollBtn.style.transition = "0.3s";

scrollBtn.addEventListener("mouseenter", () => {
  scrollBtn.style.transform = "translateY(-5px)";
});

scrollBtn.addEventListener("mouseleave", () => {
  scrollBtn.style.transform = "translateY(0)";
});

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    scrollBtn.style.display = "block";

  } else {

    scrollBtn.style.display = "none";

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ======================================
// MOBILE MENU
// ======================================

const menuButton = document.createElement("div");

menuButton.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;

document.querySelector(".navbar").appendChild(menuButton);

menuButton.style.width = "35px";
menuButton.style.height = "25px";
menuButton.style.display = "none";
menuButton.style.flexDirection = "column";
menuButton.style.justifyContent = "space-between";
menuButton.style.cursor = "pointer";

const spans = menuButton.querySelectorAll("span");

spans.forEach(span => {

  span.style.display = "block";
  span.style.width = "100%";
  span.style.height = "3px";
  span.style.background = "white";
  span.style.borderRadius = "10px";
  span.style.transition = "0.3s";

});

function mobileMenu() {

  if (window.innerWidth <= 768) {

    menuButton.style.display = "flex";

    navMenu.style.display = "none";
    navMenu.style.width = "100%";
    navMenu.style.flexDirection = "column";
    navMenu.style.alignItems = "center";
    navMenu.style.background = "#050816";
    navMenu.style.padding = "20px 0";
    navMenu.style.marginTop = "15px";
    navMenu.style.borderTop = "1px solid rgba(255,255,255,0.1)";
    navMenu.style.borderRadius = "0 0 15px 15px";

  } else {

    menuButton.style.display = "none";

    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "row";
    navMenu.style.background = "transparent";
    navMenu.style.padding = "0";
    navMenu.style.marginTop = "0";
    navMenu.style.borderTop = "none";

  }

}

mobileMenu();

window.addEventListener("resize", mobileMenu);


// ======================================
// MENU TOGGLE
// ======================================

menuButton.addEventListener("click", () => {

  menuButton.classList.toggle("active");

  if (navMenu.style.display === "none") {

    navMenu.style.display = "flex";

    spans[0].style.transform = "rotate(45deg) translateY(10px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-10px)";

  } else {

    navMenu.style.display = "none";

    spans[0].style.transform = "rotate(0)";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "rotate(0)";

  }

});


// ======================================
// SMOOTH SCROLL
// ======================================

navLinks.forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

    }

    // auto close mobile menu
    if (window.innerWidth <= 768) {

      navMenu.style.display = "none";

      spans[0].style.transform = "rotate(0)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0)";

    }

  });

});


// ======================================
// IMAGE HOVER EFFECT
// ======================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";

  });

});