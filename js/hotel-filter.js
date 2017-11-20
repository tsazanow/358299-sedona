
  var form = document.querySelector(".filters-form");
  var pool = form.querySelector("[name=pool]");
  var parking = form.querySelector("[name=parking]");
  var wifi = form.querySelector("[name=wi-fi]");
  var hotel = form.querySelector("[name=hotel]");
  var motel = form.querySelector("[name=motel]");
  var apartments = form.querySelector("[name=apartments]");
  var min-price = form.querySelector("[name=min-price]");
  var max-price = form.querySelector("[name=max-price]");

form.addEventListener("submit", function(evt) {
  if (!hotel.value && !motel.value && !apartments.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("pool", pool.value);
    localStorage.setItem("parking", parking.value);
    localStorage.setItem("wifi", wifi.value);
    localStorage.setItem("hotel", hotel.value);
    localStorage.setItem("motel", motel.value);
    localStorage.setItem("apartments", apartments.value);
    localStorage.setItem("min-price", min-price.value);
    localStorage.setItem("max-price", max-price.value);
  }
})
