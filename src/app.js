function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target.id == "modal") {
    document.getElementById("modal").style.display = "none";
  }
};

let image = '';
let circle1 = '';
let circle2 = '';
let circle3 = '';



window.onload = function() {
  interval('percent1', 190, 240);
  interval('percent2', 55, 105);
  interval('percent3', 109, 159);
  image = document.getElementById('main-image');
  circle1 = document.getElementById('circle1');
  circle2 = document.getElementById('circle2');
  circle3 = document.getElementById('circle3');

};

function interval (id, percent, end) {
  let increment = setInterval(function() {
    percent++;
    document.getElementById(id).innerHTML = percent.toString() + "%";
    if (percent >= end) {
      clearInterval(increment);
    }
  }, 50);
}

let count = 0;

function nextImage() {
  console.log('next image');
  count++;
  if (count === 1) {
    image.style.background =  "linear-gradient(to right, rgba(243, 104, 25, 0.3), rgba(0, 0, 0, 0.3)), url('./assets/main2.jpg') no-repeat";
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center center";
    circle1.style.backgroundColor = "white";
    circle2.style.backgroundColor = "black";
    circle3.style.backgroundColor = "white";
  }
  else if (count === 2) {
    image.style.background =  "linear-gradient(to right, rgba(243, 104, 25, 0.3), rgba(0, 0, 0, 0.3)), url('./assets/main3.jpg') no-repeat";
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center center";
    circle1.style.backgroundColor = "white";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "black";
  }
  else if (count === 3) {
    count = 0;
    image.style.background =  "linear-gradient(to right, rgba(243, 104, 25, 0.3), rgba(0, 0, 0, 0.3)), url('./assets/main1.jpeg') no-repeat";
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center center";
    circle1.style.backgroundColor = "black";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "white";
  }
}

setInterval(function() {nextImage()}, 8000);
