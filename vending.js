// Section: part1
// 1. get button
// 2. on click...
// add number
// set innerText of total with new number
let total = 0;

// document.getElementById("limeButton").addEventListener("click", cola);
// document.getElementById("peanutButton").addEventListener("click", peanut);
// document.getElementById("chocolateButton").addEventListener("click", chocolate);
// document.getElementById("fruitButton").addEventListener("click", fruit);
const totalUpdate = document.getElementById("total");

// Using Event Delegation
const buttonContainer = document.getElementById("vendingButtons");
buttonContainer.addEventListener("click", (event) => {
  console.log(event.target);
  // get the price from the data-price = "2.00" attribute
  const price = Number(event.target.getAttribute("data-price"));
  console.log(event.target.getAttribute("data-price"));
  // check in case we click inside the div but not on a button
  const isPriceANumber = !isNaN(price);
  if (isPriceANumber) {
    total += price;
    totalUpdate.innerText = total.toFixed(2);
  }
});
// function cola() {
//   total += 2;
//   totalUpdate.innerText = `${total}.00`;
// }

// function peanut() {
//   total += 3;
//   totalUpdate.innerText = `${total}.00`;
// }

// function chocolate() {
//   total += 4;
//   totalUpdate.innerText = `${total}.00`;
// }

// function fruit() {
//   total += 6;
//   totalUpdate.innerText = `${total}.00`;
// }
