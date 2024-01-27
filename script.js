// script.js

let noButton = document.getElementById("noBtn");
let lovePage = document.getElementById("lovePage");
let valentineText = document.getElementById("valentineText");
let gifImage = document.getElementById("gifImage");

function getRandomPosition() {
  let offset = 50;
  let x = Math.floor(Math.random() * (window.innerWidth - offset * 2));
  let y = Math.floor(Math.random() * (window.innerHeight - offset * 2));
  return { x, y };
}

function moveNoButton() {
  let newPosition = getRandomPosition();
  noButton.style.left = newPosition.x + "px";
  noButton.style.top = newPosition.y + "px";
}

function startRunning(event) {
  console.log("Mouse entered the button");

  let buttonRect = noButton.getBoundingClientRect();
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  // Check if the mouse is within a certain range of the button
  if (
    mouseX >= buttonRect.left - 50 &&
    mouseX <= buttonRect.right + 50 &&
    mouseY >= buttonRect.top - 50 &&
    mouseY <= buttonRect.bottom + 50
  ) {
    moveNoButton();
    console.log("Running away!");
  }
}

function stopRunning() {
  console.log("Stopped running.");
}

function showLovePage() {
  console.log("Entering showLovePage function");

  // Check if the noButton element is found
  if (noButton) {
    noButton.style.display = "none"; // Hide the "No" button when "Yes" is clicked
    console.log("No button hidden");
  } else {
    console.error("No button not found!");
  }

  // Change the GIF image source to the new GIF
  console.log("Changing GIF");
  gifImage.src = "transparent_hug.gif";
  console.log("Gif changed!");

  // Additional code to show the lovePage
  valentineText.innerText = "I love you!";
  lovePage.style.display = "block";
}


noButton.addEventListener("mouseenter", startRunning);
noButton.addEventListener("mouseleave", stopRunning);

document.getElementById("yesBtn").addEventListener("click", showLovePage);
