function dropDownList2(arr, div) {
  var selectingBody = document.querySelector("body");
  var selectingScript = document.querySelector("script");

  var creatingNodeDiv = document.createElement("div");
  var creatingLabel = document.createElement("label");
  var creatingSelect = document.createElement("select");

  selectingBody.insertBefore(creatingNodeDiv, selectingScript);

  selectingBody.appendChild(creatingNodeDiv);

  creatingNodeDiv.appendChild(creatingLabel);
  creatingNodeDiv.appendChild(creatingSelect);

  var addingTextLabel = (document.querySelector("label").textContent =
    "Please choose car ");

  for (var i = 0; i < arr.length; i++) {
    var creatingOption = document.createElement("option"); // this must be inside for loop
    creatingOption.innerHTML = arr[i];
    creatingSelect.appendChild(creatingOption);
  }
  // for each umesto for petlje
  // prepand
}

dropDownList2(["BMW", "Opel", "Audi", "Ford"], "div");
