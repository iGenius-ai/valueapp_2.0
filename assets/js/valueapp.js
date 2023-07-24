const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const authContainer = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
  authContainer.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  authContainer.classList.remove('right-panel-active');
});