console.log('We are all so sad about Maybe');

// DOM elements
const tailButton = document.getElementById('tail-wags');
const happy = document.querySelector('#happy');

tailButton.addEventListener('click', happyTails);


// Start tails wagging
function happyTails() {
    console.log('Happy Tails!');
    const img = document.createElement('img');
    img.src = './images/sisters.jpg';
    happy.innerHTML = "";
    happy.append(img);

}

// Get the navigation menu element
const navMenu = document.querySelector('nav ul');

// Toggle the responsive class on click of the hamburger icon
document.querySelector('.hamburger').addEventListener('click', () => {
  navMenu.classList.toggle('responsive');
});

// Remove the responsive class when a menu item is clicked
navMenu.addEventListener('click', () => {
  navMenu.classList.remove('responsive');
});
