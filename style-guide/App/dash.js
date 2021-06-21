
const navLinks = document.querySelectorAll('.nav-link');

let previouslyClickedNavLink = document.querySelector('#nav-link-home');

function togglenavbarActive(element) {
  if(previouslyClickedNavLink) {
    previouslyClickedNavLink.classList.remove('Active')
  }
  previouslyClickedNavLink = element;
  element.classList.add('Active');
}
