var modal = document.getElementById('modal');

var images = document.getElementsByClassName('thumbnail');
var modal_image = document.getElementById("modal_image");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modal_image.src = this.src;
  }
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }
}

// show function

function togglesample(title) {
    switch(title) {
        case "br01":
            var x = document.getElementById("br_sample01");
            break;
        case "br02":
            var x = document.getElementById("br_sample02");
            break;
        case "h":
            var x = document.getElementById("h_sample");
            break;
    }
    if(x.style.display == "none")
        x.style.display = "block";
    else
        x.style.display = "none";
}
