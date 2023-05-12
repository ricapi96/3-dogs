// DOM elements
const tailButton = document.getElementById("tail-wags");
const happy = document.querySelector("#happy");
// const removeButton = document.getElementById('remove-image');


tailButton.addEventListener("click", happyTails);


 // Start tails wagging
 function happyTails() {
  console.log('Happy Tails!');
  const img = document.createElement('img');
  img.src = './images/sisters.jpg';
  img.style.display = 'block';
  img.style.margin = '0 auto';
  img.setAttribute('id', 'happy-image');
  happy.innerHTML = "";
  happy.append(img);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Clear';
  removeButton.setAttribute('id', 'remove-image');
  happy.append(removeButton);

  const removeImage = document.getElementById('remove-image');
  removeImage.addEventListener('click', function() {
    const image = document.getElementById('happy-image');
    image.remove();
    removeButton.remove();
  });
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
