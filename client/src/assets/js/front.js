document.addEventListener("DOMContentLoaded", function (event) {
  document.body.addEventListener("click", function (event) {
    if (event.target.id == 'show-login-btn') {
      document.getElementById('login-form').classList.toggle('form-visible')
      document.getElementById('show-login-btn').innerText === 'Close' ? document.getElementById('show-login-btn').innerText = 'Login' : document.getElementById('show-login-btn').innerText = 'Close'
    }
  });
  document.body.addEventListener("click", function (event) {
    if (event.target.id == 'show-signup-btn') {
      document.getElementById('signup-form').classList.toggle('form-visible')
      document.getElementById('show-signup-btn').innerText === 'Close' ? document.getElementById('show-signup-btn').innerText = 'Signup' : document.getElementById('show-signup-btn').innerText = 'Close'
    }
  });
});
