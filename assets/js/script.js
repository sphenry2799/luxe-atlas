// Gallery image click
$(document).ready(function () {
  $(".card img").on("click", function () {
    $(this).toggleClass("color");
  });
});

$(document).ready(function () {
  let destinations = ["Paris", "Dubai", "New York", "London", "Hong Kong"];
  let $list = $(".cities");

  // Clear the list first
  $list.empty();

  let index = 0;

  // Function to show the next city on list
  function showNextCity() {
    if (index >= destinations.length) return;

    // Create new list and hide it initially
    let $li = $("<li>").text(destinations[index]).hide();
    $list.append($li);

    // Fade in the list
    $li.fadeIn(600, function () {
      index++;

      setTimeout(showNextCity, 1000);
    });
  }

  // Start the animation
  showNextCity();
});
