$(document).ready(function () {
  let destinations = ["Paris", "London", "Tokyo", "New York"];

  for (let city of destinations) {
    console.log("Next stop: " + city);
  }

  let city = "Los Angeles";

  if (city === "New York" || city === "Los Angeles" || city === "Chicago") {
    console.log(city + " is a domestic destination.");
  } else {
    console.log(city + " is an international destination.");
  }
  let city = "Paris";

  if (city === "Paris") {
    console.log("Bienvenue à Paris! Don't miss the Eiffel Tower.");
  } else if (city === "New York") {
    console.log("Welcome to New York! Times Square awaits you.");
  } else if (city === "Tokyo") {
    console.log("ようこそ東京へ! Visit Shibuya Crossing and Tokyo Tower.");
  } else {
    console.log("Great choice! Enjoy exploring " + city + ".");
  }
  let city = "Dubai";
  let season = "summer";

  if (city === "Dubai" && season === "summer") {
    console.log(
      "Dubai is extremely hot in summer. Consider indoor attractions."
    );
  } else if (city === "Dubai" && season === "winter") {
    console.log("Winter is the perfect time to visit Dubai!");
  } else {
    console.log("Enjoy your trip to " + city + " in " + season + "!");
  }
  let city = "Venice";

  if (city === "Venice") {
    console.log("Best way to travel: Take a gondola or water taxi.");
  } else if (city === "Amsterdam") {
    console.log("Best way to travel: Rent a bicycle.");
  } else if (city === "Bangkok") {
    console.log("Best way to travel: Tuk-tuks or boats along the river.");
  } else {
    console.log("Public transport and taxis are good options in " + city + ".");
  }
});
