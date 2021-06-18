/*Inserting elements
Start with a blank HTML page
Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images
Go through gallery images and set a random size to each gallery image*/

var body = $("body");
var divContainer = $("<div>");
divContainer.css({
  width: "650px",
  height: "801px",
  "background-color": "lightgrey",
  "padding-top": "100px",
});

body.append(divContainer);

var text = $("<p>");
text.text("AMAZIN GALERY").css({
  color: "red",
  "font-weight": "bold",
  "font-size": "30px",
  position: "absolute",
  top: "15px",
  left: "200px",
});
divContainer.append(text);

var arrLinks = [
  "https://silviatomasvillalobos.files.wordpress.com/2014/08/summer_love_05.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXHPUQp36BCUbqhmGuvNhIioa2Bb0qG80Lw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9FcO9fahSD7RxcdoAsnDIxa1-EXR-Ideag&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wDy_SCjSciAIDmaw3ZDVMoVjZBER7ZnKuA&usqp=CAU",
  "https://image.freepik.com/free-vector/summer-vibes-with-palm-leaves-ocean-landscape_1314-2391.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WrldD8IYQppTVfrsNVa8yrYcT7yyeUTptw&usqp=CAU",
];

var img1 = $("<img>");
img1.attr("src", arrLinks[0]);
img1.css({
  width: "300px",
  height: "300px",
});
divContainer.append(img1);

var img2 = $("<img>");
img2.attr("src", arrLinks[1]);
img2.css({
  width: "150px",
  height: "150px",
  position: "absolute",
  top: "108px",
});
divContainer.append(img2);

var img3 = $("<img>");
img3.attr("src", arrLinks[2]);
img3.css({
  width: "350px",
  height: "350px",
  position: "absolute",
  top: "259px",
});
divContainer.append(img3);

var img4 = $("<img>");
img4.attr("src", arrLinks[3]);
img4.css({
  width: "100px",
  height: "100px",
  position: "absolute",
  top: "609px",
  left: "9px",
});
divContainer.append(img4);

var img5 = $("<img>");
img5.attr("src", arrLinks[4]);
img5.css({
  width: "300px",
  height: "300px",
  position: "absolute",
  top: "609px",
  left: "109px",
});
divContainer.append(img5);

var img6 = $("<img>");
img6.attr("src", arrLinks[5]);
img6.css({
  width: "150px",
  height: "150px",
  position: "absolute",
  top: "609px",
  left: "409px",
});
divContainer.append(img6);
