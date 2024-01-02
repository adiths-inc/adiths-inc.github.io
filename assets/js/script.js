'use strict';

/**
 * add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);
addEventOnElements(navLinks, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const projectList = document.querySelectorAll(".list");

addEventOnElements(projectList, "click", function (event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'li') {
    var siblings = target.parentNode.children;
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove('project-filter-active');
    }

    target.classList.add('project-filter-active');
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var listElements = document.querySelectorAll('.list');
  const projectCards = [];
  projectCards[0] = document.querySelector('ul.ui-ux-designs');
  projectCards[1] = document.querySelector('ul.web-apps');
  projectCards[2] = document.querySelector('ul.automation-tools');
  projectCards[2].style.display = 'none';
  projectCards[1].style.display = 'none';

  listElements.forEach(function (listElement) {
    listElement.addEventListener('click', function () {
      var value = this.getAttribute('data-filter');
      hideUnselectedprojectCards(value);
    });
  });

  function hideUnselectedprojectCards(value) {
    projectCards.forEach(function (projectCard) {
      if (!projectCard.classList.contains(value)) {
        projectCard.style.display = 'none';
      } else {
        projectCard.style.display = '';
      }
    })
  }
});


document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.classList.contains('list')) {
    if (target.tagName.toLowerCase() === 'li') {
      var siblings = target.parentNode.children;
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('project-filter-active');
      }

      target.classList.add('project-filter-active');
    }
  }
});
