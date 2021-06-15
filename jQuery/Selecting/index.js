// $("li").click(function () {
//   $(this).remove();
// });

var $selected = $("body");

var $created = $("<h1>");

var $someNode = document.getElementById("first");

var $jQueryNode = $($someNode);

$jQueryNode.click(function () {
  $(this).remove();
});

$created.text("Add some heading");

$selected.prepend($created);
