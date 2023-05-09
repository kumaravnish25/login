// const playerConfigOverlayElement = document.getElementById("config-overlay");
// const backdropElement = document.getElementById("backdrop");
// // const formElement = document.querySelector("form");

const { Router } = require("express");


// nextPageElement.addEventListener("click",openPage);
// backdropElement.addEventListener("click", closePlayerConfig);
// // formElement.addEventListener("submit", savePlayerConfig);

// const firstPassward = document.getElementById("create-password");
// const conformPassward = document.getElementById("conform-password");



// const nextPageElement = document.getElementById("next-btn");

// function checkElement() {
//   const createPassword = document.getElementById("create-password");
// const conformPassward = document.getElementById("conform-password");
//   if (createPassword != conformPassward) {
//       alert("Password Doesn't match.");
//   }
//   return 0;
  
// }
// console.log('checkElement');
// nextPageElement.addEventListener("submit", checkElement);

function checkPassword() {
  let password = document.getElementById("create-password").value;
  let conformPassword = document.getElementById("conform-password").value;
  console.log(password,conformPassword);
  let massage = document.getElementById("message");

  if(password.length != 0){
    if( password == conformPassword){
      massage.textContent = "Password match"
      massage.style.backgroundColor ="green"
      return 
    }
  else{
    massage.textContent = " Password Don't match"
    massage.style.backgroundColor ="red"
    return
    }
  }
  else{
    alert("Password can't be empty");
    massage.textContent = "";
    return
  }
}

module.exports = {
  check:checkPassword

};