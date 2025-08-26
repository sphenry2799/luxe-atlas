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
});
