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

const navLinks = document.querySelectorAll(".nav-link");
const overlay = document.querySelector(".menu-overlay");

let openedLink = null;

const closeChild = () => {
  const child = openedLink.querySelector(".child-menu");
  child.classList.remove("child-menu-open");
  openedLink = null;
  document.body.style.overflowY = "scroll";
  overlay.classList.remove("overlay-show");
};

const openChild = (link) => {
  openedLink = link;
  const child = openedLink.querySelector(".child-menu");
  child.classList.add("child-menu-open");
  document.body.style.overflowY = "hidden";
  overlay.classList.add("overlay-show");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (openedLink === link) {
      closeChild();
    } else {
      openChild(link);
      navLinks.forEach((e) => {
        if (e != openedLink) {
          const child = e.querySelector(".child-menu");
          child.classList.remove("child-menu-open");
        }
      });
    }
  });
});

overlay.addEventListener("click", () => {
  closeChild();
});
