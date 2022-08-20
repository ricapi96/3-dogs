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