const easyDishes = [
  "Circle Daal",
  "Chicken Karhai",
  "Tamate ki Chatni",
  "Outside",
];

const mediumDishes = [
  "Khatti daal + gosht",
  "Sherwa + gosht",
  "Gobi",
  "Afghani Chicken",
  "Tahari",
];

const hardDishes = ["Red Chicken", "Khorma", "Biryani"];

function getRandomDish(array) {
  const dish = array[Math.trunc(Math.random() * array.length)];

  document.querySelector(".dish-name").textContent = `You should ${
    dish === "Outside" ? "order from" : "cook"
  } ${dish} today! 😋`;
}

function decider(selector) {
  document.querySelector(selector).addEventListener("click", () => {
    if (selector === ".btn1") {
      getRandomDish(easyDishes);
    } else if (selector === ".btn2") {
      getRandomDish(mediumDishes);
    } else if (selector === ".btn3") {
      getRandomDish(hardDishes);
    }
  });
}

decider(".btn1");
decider(".btn2");
decider(".btn3");
