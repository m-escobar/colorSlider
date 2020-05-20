window.addEventListener('load', start);

function start() {
  preventFormSubmit();

  //monitorSliders();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function updateSliders(id, value) {
  function updateColor() {
    r = document.getElementById('r');
    g = document.getElementById('g');
    b = document.getElementById('b');
      
    newColor = fullColorHex(r.value, g.value, b.value);
    return newColor;
  }

  function updateCircleColor(newColor) {
    circle = document.getElementById('circle');

    newColor = '#' + newColor;
    circle.style.backgroundColor = newColor;
  }

  sId = 's' + id;

  slider = document.getElementById(id);
  slider.value = value;
  span = document.getElementById(sId);
  span.innerText = value;
  
  newColor = updateColor();
  updateCircleColor(newColor);
}

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
}
