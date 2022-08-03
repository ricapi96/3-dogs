console.log('We are all so sad about Maybe');

// DOM elements
const tailButton = document.getElementById('tail-wags');


tailButton.addEventListener('click', happyTails);

// Start tails wagging
function happyTails() {
    console.log('Happy Tails!');
}