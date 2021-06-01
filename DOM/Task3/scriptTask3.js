function alertMsg() {
  var getLi = document.querySelector("ul");
  var li = getLi.firstElementChild.textContent;
  window.alert(li);
}
alertMsg();

function ChangeLastLi(string) {
  var ul = document.querySelector("ul");
  var allLi = ul.querySelectorAll("li");
  var lastLi = allLi[allLi.length - 1];
  lastLi.textContent = string;
}

var text = "Where to find us?";
console.log(ChangeLastLi(text));
