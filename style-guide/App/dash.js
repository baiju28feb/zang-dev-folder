
const navLinks = document.querySelectorAll('.nav-link');

let previouslyClickedNavLink = document.querySelector('#nav-link-home');

function togglenavbarActive(element) {
  if(previouslyClickedNavLink) {
    previouslyClickedNavLink.classList.remove('Active')
  }
  previouslyClickedNavLink = element;
  element.classList.add('Active');
}

//chart start


// const labels = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
// ];
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// };
// // </block:setup>

// // <block:config:0>
// const config = {
//   type: 'line',
//   data,
//   options: {}
// };
// // </block:config>

// module.exports = {
//   actions: [],
//   config: config,
// };

// var myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

//chart end