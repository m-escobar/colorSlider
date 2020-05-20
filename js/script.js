window.addEventListener('load', start);

function start() {
  preventFormSubmit();

  monitorSliders();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function monitorSliders() {
  
}