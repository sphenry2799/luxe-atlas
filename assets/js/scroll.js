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

  destinations.forEach(function (city) {
    $list.append($("<li>").text(city));
  });

  let index = 0;

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
