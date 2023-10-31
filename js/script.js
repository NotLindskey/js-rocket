// redirect you to the Launch page after 10sec idle
setTimeout(function () {
  location.href = 'rocket.html';
}, 30000);

// this function does this.
var doCoolStuff = function () {
  var currentClassName = document.getElementById('cool').className;

  // changing class name.
  if (currentClassName == 'cool') {
    document.getElementById('cool').className = 'cool red';
  } else {
    document.getElementById('cool').className = 'cool';
  }
};
