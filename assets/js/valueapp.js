var bodyContainer = document.getElementById("container");
var body = document.getElementById("body");
bodyContainer.style.display = "none";

// Loader Animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    bodyContainer.style.display = "unset";
    body.classList.add("height-remove");
    document.body.classList.add("loaded");
  }, 2000);
});

const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const authContainer = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
  authContainer.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  authContainer.classList.remove('right-panel-active');
});