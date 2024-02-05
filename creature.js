var screen = document.querySelectorAll(".screen");
var btn = document.querySelector(".screen button");
var allElems = document.querySelectorAll(".elem");
var selected = "";
var playGround = document.querySelector(".playGround");

btn.addEventListener("click", function () {
  screen[1].style.transforn = "translateY(-100%)";
  console.log("heyoo");
});

allElems.forEach(function (elem) {
  // node list o=form me data ata h
  elem.addEventListener("click", function () {
    console.log("hello");
    screen[2].style.transforn = "translateY(-200%)";
    selected = elem.childNodes[3].getAttribute("src");
   
  });
});

function createImage(){
    var newImg = document.createElement("img");
    newImg.setAttribute("src", selected);
    
    newImg.style.left = x + "%";
    newImg.style.top = y + "%";
    newImg.style.rotate = rot + "deg";
    playGround.appendChild(newImg);
}

function getRandom() {
  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var rot = Math.random() * 360;
  return{x, y, rot}
}
