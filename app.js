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
  removeButton.innerHTML = 'Good girls!';
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

// Get the button element
var backButton = document.getElementById("back-to-top");

// Show the button when user scrolls down 20px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
backButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
});

// Birthday form
document.addEventListener('DOMContentLoaded', function() {
  var messageForm = document.getElementById('message-form');
  var messageDisplay = document.getElementById('message-display');

  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // var name = document.getElementById('name').value;
    // var message = document.getElementById('message').value;

    // Create message element
    // var messageElement = document.createElement('div');
    // messageElement.className = 'message';
    // messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;

    // messageDisplay.appendChild(messageElement);

    // Clear the form
    messageForm.reset();
  });
});

// Get references to form elements
const messageForm = document.getElementById('message-form');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

// Load messages from localStorage
let messages = JSON.parse(localStorage.getItem('messages')) || [];

// Event listener for form submission
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get name and message from inputs
  const name = nameInput.value;
  const message = messageInput.value;

  // Add message to messages array
  messages.push({ name, message });

  // Save messages to localStorage
  localStorage.setItem('messages', JSON.stringify(messages));

  // Clear inputs
  nameInput.value = '';
  messageInput.value = '';

  // Refresh the displayed messages
  displayMessages();
});

function displayMessages() {
  // Get a reference to the message display div
  var messageDisplay = document.getElementById('message-display');

  // Clear the existing messages before displaying the new ones
  messageDisplay.innerHTML = '';

  // Get the stored messages from local storage
  let messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Loop through the messages and create message elements
  messages.forEach(function (messageObj) {
    var messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<strong>${messageObj.name}:</strong> ${messageObj.message}`;
    messageDisplay.appendChild(messageElement);
  });
}

// Call displayMessages function to initially display messages
displayMessages();


// close popup
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('top-message').style.display = 'none';
});