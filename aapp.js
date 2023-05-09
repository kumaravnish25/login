// const signPage = document.getElementById("sing-btn");
// function signPageOpen() {
//     playerConfigOverlayElement.style.display = "none";
//   }
// signPage.addEventListener("click", signPageOpen);



const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

const checkButton = require('./public/app');
// const uuid = require("uuid");

// const resData= require('./until/restaurant-data.js');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("login");
  });
  app.get("/sign", function (req, res) {
    res.render("sign"); 
  });
  app.get("/login", function (req, res) {
    res.render("login"); 
  });
 app.post("/sucess" , function(req,res){

  checkButton.check() 
    res.render("sucess") 

 });
  app.listen(3000);