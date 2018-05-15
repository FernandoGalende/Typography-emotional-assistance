document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('show-login-btn').addEventListener('click',()=>{
    document.getElementById('login-form').classList.toggle('form-visible')
    document.getElementById('show-login-btn').innerText === 'Close' ? document.getElementById('show-login-btn').innerText ='Login' : document.getElementById('show-login-btn').innerText ='Close'
  })
  document.getElementById('show-signup-btn').addEventListener('click',()=>{
    document.getElementById('signup-form').classList.toggle('form-visible')
    document.getElementById('show-signup-btn').innerText === 'Close' ? document.getElementById('show-signup-btn').innerText ='Signup' : document.getElementById('show-signup-btn').innerText ='Close'
  })
});