var modal = document.getElementById('modal');

var images = document.getElementsByClassName('thumbnail');
var modal_image = document.getElementById("modal_image");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modal_image.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
