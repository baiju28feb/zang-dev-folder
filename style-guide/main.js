const navLinks = document.querySelectorAll('.nav-link');

let previouslyClickedNavLink = document.querySelector('#nav-link-home');

function toggleNavbarActive(element) {
  if(previouslyClickedNavLink) {
    previouslyClickedNavLink.classList.remove('active')
  }
  previouslyClickedNavLink = element;
  element.classList.add('active');
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}