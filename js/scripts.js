  var link = document.querySelector(".button-search");
  var popup = document.querySelector(".modal-search");
  var arrival = popup.querySelector("[name=arrival-date]");
  var departure = popup.querySelector("[name=departure-date]");
  var children = popup.querySelector("[name=children]");
  var adult = popup.querySelector("[name=adult]");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hide");
    arrival.focus();
  })
