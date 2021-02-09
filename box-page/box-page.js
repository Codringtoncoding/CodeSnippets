const WIDTH = 50;
const MOVEMENT_AMOUNT = 50;
var leftPos = window.innerWidth / 2;

window.onload = function() {
  let div = document.getElementById("myredbox");
  updateBoxPos(0);
  div.style.top = window.innerHeight / 2;
  div.style.width = WIDTH;
  div.style.height = 50;
}

function updateBoxPos(movementAmount) {
  let div = document.getElementById("myredbox");
  leftPos += movementAmount;
  div.style.left = leftPos;
  if (leftPos + WIDTH < 0 || leftPos > window.innerWidth) {
    alert("Gone!");
    leftPos = window.innerWidth / 2;
    div.style.left = leftPos;
  }
}

function onClickLeft() {
  updateBoxPos(-MOVEMENT_AMOUNT);
}

function onClickRight() {
  updateBoxPos(MOVEMENT_AMOUNT);
}