/* window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.

window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height  */

function write() {
  var result = "Hello World from JS";
  console.log(result);
}
write();

function sum(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}
sum(10, 15);

function getPlatform() {
  console.log("Platform: ", window.navigator.platform);
}
getPlatform();

function getInformationAboutBrowserVersion() {
  console.log(
    "Information about browser version: ",
    window.navigator.appCodeName
  );
}
getInformationAboutBrowserVersion();

function companyThatCreatedBrowser() {
  console.log("Company that created browser: ", window.navigator.vendor);
}
companyThatCreatedBrowser();

function isOnline() {
  var status;
  if (window.navigator.onLine == true) {
    status = "status: online";
  } else {
    status = "status: offline";
  }
  return status;
}

console.log(isOnline());

function windowRes() {
  console.log("Width: ", window.screen.width);
  console.log("Height: ", window.screen.height);
}
windowRes();

function printUrl() {
  console.log(window.location.href);
}
printUrl();

function domainName() {
  console.log(window.location.hostname);
}
domainName();

function protocolName() {
  console.log(window.location.protocol);
}
protocolName();

function parametarsUrl() {
  console.log(window.location.search);
}
parametarsUrl();

/*function reloadURL () {
  location.reload();
}
reloadURL();*/

/*function redirect (MARIJA) {
  window.location.replace(MARIJA);
}
redirect('https://developer.mozilla.org/en-US/docs/Web/API/Location/replace');*/

function setName() {
  window.localStorage.setItem("Name", "Dragan");
  window.localStorage.setItem("Age", "33");
}
setName();

function getName() {
  console.log(window.localStorage.getItem("Name"));
}
getName();

function getAge() {
  if (!window.localStorage.getItem("Age")) {
    console.log("There is no data");
  } else {
    console.log(window.localStorage.getItem("Age"));
  }
}
getAge();

function clearData() {
  window.localStorage.clear();
}
clearData();

function sessionData() {
  window.sessionStorage.setItem("Pet", "Cat");
}
sessionData();

function greetMsg() {
  window.alert("Hello user!");
}
greetMsg();

function userQuestion() {
  var msg = window.prompt("How old are you?");

  if (window.confirm("We will provide this answer now " + msg)) {
    window.alert("Success");
  }
}
userQuestion();
