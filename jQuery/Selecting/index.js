// Selecting
// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements

// Select the first element of the list and give it a bottom border

// Select all list elements and transform their text to uppercase

// Select active element of the list and change its font color

// Find the middle one and change its background color

var $addBorder = $("li:first").css({
  "border-bottom": "2px solid red",
});

var $wholeList = $("li");
$wholeList.css({
  "text-transform": "uppercase",
});

var $liActive = $(".active");

$liActive.css({
  color: "red",
});

var $middleLi = $("li:nth-of-type(3)"); //first way
$middleLi.css({
  "background-color": "yellow",
});

// var $middle = $("li").each(function (index, element) {
//   if (index === 2) {
//     $(element).css({
//       "background-color": "yellow", // check
//     });
//   }
// });
