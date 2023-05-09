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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  

  