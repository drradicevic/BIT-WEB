var $body = $("body");
var $field = $("<img>");
var $player = $("<img>");
var $button = $("<button>");
var isSet = true;

$field.attr("src", "./pictures/field.png");
$player.attr("src", "./pictures/player.png");
$button.text("Stop moving");

$field.css({
  "background-repeat": "no-repeat",
  "background-size": "contain",
  "background-position": "center",
  display: "block",
  height: "100%",
  width: "100%",
});
$body.css({
  height: "100%",
  margin: "0",
});

$player.css({
  width: "120px",
  position: "absolute",
  top: "0",
  left: "200px",
});

$button.css({
  position: "absolute",
  bottom: "-300px",
  right: "100px",
  padding: "5px 10px",
  "background-color": "#c0392b",
  color: "white",
  border: "none",
  "border-radius": "4px",
  cursor: "pointer",
});

var playerHandler = function (event) {
  var width = (event.offsetX - $player.width() / 2) + "px";
  var height = (event.offsetY - $player.height() / 2) + "px";
  $player.css({
    "left": width,
    "top": height
  });
};

var stop = function (){
  if(isSet) {
    $field.off("click", playerHandler)
  } else {
    $field.on("click", playerHandler)
  }
  isSet = !isSet;
}


$body.prepend($player);
$body.append($field);
$body.append($button);

$field.on("click", playerHandler)

$button.on("click", stop)







