// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}
function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}
function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

stringInEl.addEventListener("change", updateStory);

var story = "Once upon a time, ";
function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = " ";
  story += newWord + " ";
  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
rand4Btn.addEventListener("click", showRand4);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand2() {
  var rand2 = Math.random() * 100 + 0;
  rand2 = rand2.toFixed(3);
  rand2OutEl.innerHTML = rand2;
}

function showRand3() {
  var rand3 = Math.random() * 10 + -5;
  rand3 = rand3.toFixed(3);
  rand3OutEl.innerHTML = rand3;
}

function showRand4() {
  let minimumNumber = +document.getElementById("rand-in1").value;
  let maximumNmuber = +document.getElementById("rand-in2").value;
  let OutcomeNumber = maximumNmuber - minimumNumber + 1;
  var rand4 = Math.random() * OutcomeNumber + minimumNumber;

  rand4 = rand4.toFixed(3);
  rand4OutEl.innerHTML = rand4;
}

// Random size

document.getElementById("random-size").addEventListener("click", randFontSize);

function randFontSize() {
  var randSize = Math.random() * 21 + 5;
  randSize = Math.floor(randSize);
  let fontSizeNumber = `${randSize}px`;
  document.getElementById("the-body").style.fontSize = fontSizeNumber;
}

// Random Colour

document.getElementById("random-rgb").addEventListener("click", randomColour);

function randomColour() {
  var red = Math.random() * 256 + 0;
  red = Math.floor(red);
  var green = Math.random() * 256 + 0;
  green = Math.floor(green);
  var blue = Math.random() * 256 + 0;
  blue = Math.floor(blue);

  randomColourNumber = `rgb(${red}, ${green}, ${blue})`;

  document.getElementById("HTML").style.backgroundColor = randomColourNumber;
}

//reset page
// // Code the reset button. This will reset all variables back to initial values and
// clear out all input fields and reset span boxes back to dashes. It's like refresing
// the page without actually refreshing the page.

// Event Listener
document.getElementById("reset").addEventListener("click", resetPage);
// Event Funtion
function resetPage() {
  var story = "Once upon a time,";
  let counter = 0;
  var dashes = "----------";
  let minimumNumber = document.getElementById("rand-in1");
  let maximumNmuber = document.getElementById("rand-in2");
  // Output
  displayEl.innerHTML = counter;
  stringOutEl.innerHTML = story;
  rand1OutEl.innerHTML = dashes;
  rand2OutEl.innerHTML = dashes;
  rand3OutEl.innerHTML = dashes;
  minimumNumber.value = " ";
  maximumNmuber.value = " ";
  rand4OutEl.innerHTML = dashes;
  document.getElementById("the-body").style.fontSize = "medium";
  document.getElementById("HTML").style.backgroundColor = "rgb(154, 228, 200)";
}
