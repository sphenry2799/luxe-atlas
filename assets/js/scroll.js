$(document).ready(function () {
  let destinations = [
    "Paris",
    "Dubai",
    "New York",
    "London",
    "Hong Kong",
    "Shanghai",
    "Miami",
  ];
  let $list = $(".cities");

  // Create li elements for all cities
  destinations.forEach(function (city) {
    $list.append($("<li>").text(city));
  });

  let index = 0;

  function showCity() {
    let $items = $list.find("li");

    // Fade out all items first
    $items.fadeOut(400);

    // Fade in current city
    $($items[index]).fadeIn(600, function () {
      // After 1.5s, fade to the next city
      setTimeout(function () {
        index = (index + 1) % $items.length; // loop back
        showCity();
      }, 1500);
    });
  }

  // Start the cycle
  showCity();
});
