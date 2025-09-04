$(document).ready(function () {
  $(".card img").on("click", function () {
    // console.log("Image clicked"); // debug check
    $(this).toggleClass("color");
  });
});

// //   loop
$(document).ready(function () {
  let destinations = ["Paris", "Dubai", "New York", "London", "Hong Kong"];
  let $list = $(".cities");

  // Clear the list first
  $list.empty();

  let index = 0;

  function showNextCity() {
    if (index >= destinations.length) return; // stop when done

    // Create new li and hide it initially
    let $li = $("<li>").text(destinations[index]).hide();
    $list.append($li);

    // Fade in the li
    $li.fadeIn(600, function () {
      index++;
      // Wait 1 second then show next city
      setTimeout(showNextCity, 1000);
    });
  }

  // Start the animation
  showNextCity();
});

// // if else statement 4
// let city = "Los Angeles";

// if (city === "New York" || city === "Los Angeles" || city === "Chicago") {
//   console.log(city + " is a domestic destination.");
// } else {
//   console.log(city + " is an international destination.");
// }

// //   if else statement 3
// let city = "Paris";

// if (city === "Paris") {
//   console.log("Bienvenue à Paris! Don't miss the Eiffel Tower.");
// } else if (city === "New York") {
//   console.log("Welcome to New York! Times Square awaits you.");
// } else if (city === "Tokyo") {
//   console.log("ようこそ東京へ! Visit Shibuya Crossing and Tokyo Tower.");
// } else {
//   console.log("Great choice! Enjoy exploring " + city + ".");
// }

// //   if else statement 2
// let city = "Dubai";
// let season = "summer";

// if (city === "Dubai" && season === "summer") {
//   console.log("Dubai is extremely hot in summer. Consider indoor attractions.");
// } else if (city === "Dubai" && season === "winter") {
//   console.log("Winter is the perfect time to visit Dubai!");
// } else {
//   console.log("Enjoy your trip to " + city + " in " + season + "!");
// }

// //   if else statement 1
// let city = "Venice";

// if (city === "Venice") {
//   console.log("Best way to travel: Take a gondola or water taxi.");
// } else if (city === "Amsterdam") {
//   console.log("Best way to travel: Rent a bicycle.");
// } else if (city === "Bangkok") {
//   console.log("Best way to travel: Tuk-tuks or boats along the river.");
// } else {
//   console.log("Public transport and taxis are good options in " + city + ".");
// }

// //   Javascript form validation
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
// // Nav Bar
// document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     let section = document.querySelector(e.target.getAttribute("href"));
//     if (section) {
//       e.preventDefault(); // Prevent default anchor click behavior
//       let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
//       window.scroll({
//         top: section.offsetTop - navbarHeight, // Adjust for navbar height
//         behavior: "smooth",
//       });
//       document.querySelector(".navbar-collapse").classList.remove("show"); // Collapse navbar
//     }
//   });
// });
