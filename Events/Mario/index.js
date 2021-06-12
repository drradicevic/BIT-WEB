var bg = document.querySelector(".bg");
var mario = document.querySelector(".mario");
var body = document.querySelector("body");
var x = 0;
var moveBg;
var position = 80;
var jump;

body.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    if (mario.getAttribute("src") === "./img/mario.png") {
      mario.removeAttribute("src");
      mario.setAttribute("src", "./img/mario_running.gif");
      mario.style.transform = "scaleX(+1)";
      moveBg = setInterval(function () {
        x -= 1;
        bg.style.backgroundPosition = x + "px bottom";
      }, 1);
    }
  }

  if (e.key == "ArrowLeft") {
    if (mario.getAttribute("src") === "./img/mario.png") {
      mario.removeAttribute("src");
      mario.setAttribute("src", "./img/mario_running.gif");
      mario.style.transform = "scaleX(-1)";
      moveBg = setInterval(function () {
        x += 1;
        bg.style.backgroundPosition = x + "px bottom";
      }, 1);
    }
  }

  if (e.key == " ") {
    mario.style.bottom = position + 120 + "px";
    jump = setTimeout(function () {
      mario.style.bottom = position + "px";
    }, 800);
  }
});

body.addEventListener("keyup", function (e) {
  if (e.key == "ArrowRight") {
    mario.removeAttribute("src");
    mario.setAttribute("src", "./img/mario.png");
    clearInterval(moveBg);
  }
  if (e.key == "ArrowLeft") {
    mario.removeAttribute("src");
    mario.setAttribute("src", "./img/mario.png");
    clearInterval(moveBg);
  }
});
