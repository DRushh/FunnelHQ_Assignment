var draggedItem;

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add("dragged");
}

function dragEnd(event) {
  event.target.classList.remove("dragged");
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  if (event.target.classList.contains("right-container")) {
    event.target.appendChild(document.getElementById(data));
  }
}

function reset() {
  var rightContainer = document.getElementById("rightContainer");
  var leftContainer = document.getElementById("leftContainer");

  // Reset right container
  while (rightContainer.firstChild) {
    leftContainer.appendChild(rightContainer.firstChild);
  }

  // Reset left container order
  var leftItems = leftContainer.querySelectorAll(".draggable");
  Array.from(leftItems).forEach(function (item, index) {
    item.style.order = index + 1;
  });
}