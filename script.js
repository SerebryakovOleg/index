/*function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + " years old");
}
var myDog = "Fido";
dogYears(myDog, 4);*/

/*function speak(kind) {
  var defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind == "cat") {
    alert("Meow");
  } else {
    alert(defaultSound);
  }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);*/

/*function dolt(param) {
  param = 2;

}
var test = 1;
dolt(test);
console.log(test);*/


/*function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
var tea = "Earl Grey";
makeTea(3, "Earl Grey");*/

/*var points = 0;

function playTurn(player, location) {
  points = 0;
  if (location == 1) {
    points = points + 100;

  }
  return points;
}
var total = playTurn("Jai", 1);
alert(points);*/

/*var radius = 5;
var area = circleArea(radius);
alert(area);*/

/*function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}*/

var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");