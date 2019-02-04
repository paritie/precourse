// JS goes here
function Navopen() {
  var x = document.getElementById("myNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.style.width = "100%";
}

function Navclose() {
  document.getElementById("myNav").style.width = "0%";
}
