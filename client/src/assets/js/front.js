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
  
  /* if (document.body.getElementsByClassName('emotion')) {
    if (document.querySelector(".anger")) {
      document.getElementsByTagName("body")[0].classList.add("anger");
    } 
    if (document.querySelector(".fear")) {
      document.getElementsByTagName("body")[0].classList.add("fear");
    } 
    if (document.querySelector(".joy")) {
      document.getElementsByTagName("body")[0].classList.add("joy");
    } 
    if (document.querySelector(".analytical")) {
      document.getElementsByTagName("body")[0].classList.add("analytical");
    } 
    if (document.querySelector(".confident")) {
      document.getElementsByTagName("body")[0].classList.add("confident");
    } 
    if (document.querySelector(".tentative")) {
      document.getElementsByTagName("body")[0].classList.add("tentative");
    } 
  }
 */
});
