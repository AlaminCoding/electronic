const searchOpenBtn = document.querySelector(".search-btn");

const searchBox = document.querySelector(".search-box");

const searchCloseBtn = document.querySelector(".search-close");

// Open Close Search box

searchOpenBtn.addEventListener("click", () => {
  searchBox.classList.add("search-box-open");
  searchCloseBtn.classList.add("search-close-show");
});

searchCloseBtn.addEventListener("click", () => {
  searchBox.classList.remove("search-box-open");
  searchCloseBtn.classList.remove("search-close-show");
});

// Open Close Child Menu

const navLinks = document.querySelectorAll(".nav-link-btn");
const overlay = document.querySelector(".menu-overlay");

let openedLink = null;

const closeChild = () => {
  const child = openedLink.nextElementSibling;
  child.classList.remove("child-menu-open");
  openedLink = null;
  document.body.style.overflowY = "scroll";
  overlay.classList.remove("overlay-show");
};

const openChild = (link) => {
  openedLink = link;
  const child = openedLink.nextElementSibling;
  child.classList.add("child-menu-open");
  document.body.style.overflowY = "hidden";
  overlay.classList.add("overlay-show");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (openedLink === link) {
      closeChild();
    } else {
      console.log("Open Nav");
      openChild(link);
      navLinks.forEach((e) => {
        if (e != openedLink) {
          const child = e.nextElementSibling;
          child.classList.remove("child-menu-open");
        }
      });
    }
  });
});

overlay.addEventListener("click", () => {
  closeChild();
});

// Mobile nav open close
const toggle = document.querySelector(".toggle");
const mainNav = document.getElementById("main-nav");

let navOpen = false;

toggle.addEventListener("click", () => {
  if (navOpen) {
    document.body.style.overflowY = "scroll";
    mainNav.classList.remove("nav-open");
    toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    navOpen = false;
  } else {
    document.body.style.overflowY = "hidden";
    mainNav.classList.add("nav-open");
    toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    navOpen = true;
  }
});

// Child menu close button for mobile

const childCloseBtn = document.querySelectorAll(".child-close-btn");

childCloseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const child = openedLink.nextElementSibling;
    child.classList.remove("child-menu-open");
    openedLink = null;
    console.log("CLOSE");
  });
});

// Mobile Search Btn Show Hide

const mobileSearchBtn = document.querySelector(".mobile-search-btn");
const mobileSeachInput = document.querySelector(".mobile-search-input");

let mobileSearchInputShow = false;

mobileSearchBtn.addEventListener("click", () => {
  if (mobileSearchInputShow) {
    mobileSearchBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
    mobileSeachInput.classList.remove("mobile-search-input-show");
    mobileSearchInputShow = false;
  } else {
    mobileSearchBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    mobileSeachInput.classList.add("mobile-search-input-show");
    mobileSearchInputShow = true;
  }
});
