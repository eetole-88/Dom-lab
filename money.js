const moneyFormElement = document.getElementById("money-form");
const coinSection = document.querySelector(".coin-section");

moneyFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberInput = document.getElementById("number");
  const coinNumber = numberInput.value;
  console.log(coinNumber);
  const formInputElement = document.querySelector("select");
  const coin = formInputElement.value;
  console.log(coin);
  for (let i = 0; i < coinNumber; i++) {
    const newCoinDiv = document.createElement("div");
    newCoinDiv.innerText = coin;
    newCoinDiv.classList.add("coin");

    if (coin === "Penny") {
      newCoinDiv.classList.add("penny");
    } else if (coin === "Nickel") {
      newCoinDiv.classList.add("nickel");
    } else if (coin === "Dime") {
      newCoinDiv.classList.add("dime");
    } else if (coin === "Quarter") {
      newCoinDiv.classList.add("quarter");
    }
    coinSection.append(newCoinDiv);
  }
});
coinSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("coin")) {
    e.target.remove();
  }
});
