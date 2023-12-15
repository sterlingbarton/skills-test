const navbar = document.getElementById('main-navbar');
const logo = document.getElementById('logo-hidden');
const bottomLogo = document.getElementById('bottom-logo');
const links = document.getElementsByClassName('nav-link');
const navbarNav = document.getElementsByClassName('navbar-nav');

console.log(navbarNav);

links[0].classList.add('color-white');
links[1].classList.add('color-white');

window.onscroll = function () {
  const scrollThreshold = 200; // The scroll threshold in pixels
  const scrollThreshold2 = 890;

  // Check if the page has been scrolled past the threshold
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('color-navbar');
    logo.classList.add('logo-show');
    bottomLogo.classList.add('logo-show');
    links[0].classList.remove('color-white');
    links[1].classList.remove('color-white');
    links[0].classList.add('color-nav-link');
    links[1].classList.add('color-nav-link');
    navbarNav[0].classList.add('margin-unset');
  } else {
    navbar.classList.remove('color-navbar');
    logo.classList.remove('logo-show');
    links[0].classList.add('color-white');
    links[1].classList.add('color-white');
    links[0].classList.remove('color-nav-link');
    links[1].classList.remove('color-nav-link');
    navbarNav[0].classList.remove('margin-unset');
  }

  if (window.scrollY > scrollThreshold2) {
    navbar.classList.add('hide-navbar');
  } else {
    navbar.classList.remove('hide-navbar');
  }
};
