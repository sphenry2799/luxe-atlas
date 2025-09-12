// Scrolling cities

// Array for cities to be shown
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

  //Looping
  destinations.forEach(function (city) {
    $list.append($("<li>").text(city));
  });

  let index = 0;

  //Fade effect for cities
  function showCity() {
    let $items = $list.find("li");

    $items.fadeOut(400);

    $($items[index]).fadeIn(600, function () {
      setTimeout(function () {
        index = (index + 1) % $items.length;
        showCity();
      }, 1500);
    });
  }

  showCity();
});

// Time of day greeting
$(document).ready(function () {
  function greeting() {
    let $items = $(".greeting");
    let hour = new Date().getHours();
    let message = "";

    // Time of day to be shown
    if (hour < 6) {
      message = "Good night";
    } else if (hour < 12) {
      message = "Good morning";
    } else if (hour < 18) {
      message = "Good afternoon";
    } else {
      message = "Good evening";
    }

    // Insert text into paragraph
    $items.text(message);

    console.log("Hour:", hour, "→ Message:", message);
  }

  greeting();
});
