function applyColor() {
  var ulNodeSecond = document.querySelectorAll("ul")[1];
  ulNodeSecond.className = "second";
}
applyColor();

function liColorApply() {
  var liElements = document.querySelectorAll("li");
  for (var i = 0; i < liElements.length; i++) {
    liElements[i].className = "third";
  }
}
liColorApply();

function lastUlList() {
  var ulNodeThird = document.querySelectorAll("ul")[2].children;
  console.log(ulNodeThird);
  for (var i = 0; i < ulNodeThird.length; i++) {
    ulNodeThird[i].className = "forth";
  }
}

lastUlList();
