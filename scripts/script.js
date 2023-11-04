const userInput = document.getElementById("input-area");
const lengthDisplay = document.getElementById("length");
const volumeDisplay = document.getElementById("volume");
const massDisplay = document.getElementById("mass");

userInput.addEventListener("input", function () {
  const inputValue = userInput.value;
  meterFeet(inputValue);
  literGallons(inputValue);
  kiloPounds(inputValue);
});

function meterFeet(value) {
  let feet = (value * 3.28084).toFixed(2);
  let meter = (value / 3.28084).toFixed(2);
  lengthDisplay.innerHTML = `<p id="length"> ${value} meters = ${feet} feet | feet = ${meter} meters</p>`;
}

function literGallons(value) {
  let gallons = (value * 0.264172).toFixed(2);
  let liters = (value / 0.264172).toFixed(2);
  volumeDisplay.innerHTML = `<p id="volume"> ${value} liters = ${gallons} gallons | gallons = ${liters} liters</p>`;
}

function kiloPounds(value) {
  let pound = (value * 2.20462).toFixed(2);
  let kg = (value / 2.20462).toFixed(2);
  massDisplay.innerHTML = `<p id="mass"> ${value} kilos = ${pound} pounds | pounds = ${kg} kilos</p>`;
}
