// DOM elements
const tailButton = document.getElementById("tail-wags");
const happy = document.querySelector("#happy");

tailButton.addEventListener("click", happyTails);

// Start tails wagging
function happyTails() {
  console.log("Happy Tails!");
  const img = document.createElement("img");
  img.src = "./images/sisters.jpg";
  img.style.display = "block";
  img.style.margin = "0 auto";
  img.setAttribute("id", "happy-image");
  happy.innerHTML = "";
  happy.append(img);

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Good girls!";
  removeButton.setAttribute("id", "remove-image");
  happy.append(removeButton);

  const removeImage = document.getElementById("remove-image");
  removeImage.addEventListener("click", function () {
    const image = document.getElementById("happy-image");
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

// Get the button element
var backButton = document.getElementById("back-to-top");

// Show the button when user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
backButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});

// close popup
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("top-message").style.display = "none";
});

// close popup when it scrolls down to birthday section
// Get the link element
const linkToBirthdaySection = document.querySelector("#top-message a");

// Add event listener to the link
linkToBirthdaySection.addEventListener("click", function (event) {
  // Prevent the default behavior of the link (scrolling)
  event.preventDefault();

  // Get the target section
  const birthdaySection = document.getElementById("birthday");

  // Scroll to the target section
  birthdaySection.scrollIntoView({ behavior: "smooth" });

  // Hide the popup
  document.getElementById("top-message").style.display = "none";
});
