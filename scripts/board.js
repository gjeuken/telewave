var randpos = 0;

//init
$("#seed").keyup(function () {
  fire();
});

$("#seed").val(Math.floor(Math.random() * 1000));
fire();

function clearboard() {
  document.getElementById("score").innerHTML = "";
  var canvas = document.getElementById("wave");
  var ctx = canvas.getContext("2d");
  var cw = canvas.width;
  var ch = canvas.height;
  ctx.clearRect(0, 0, cw, ch);
}

function fire() {
  clearboard();
  //get seed and set the seed for randomizer
  var seed = document.getElementById("seed").value;
  Math.seedrandom(seed.toLowerCase());
  randpos = Math.random() * 1000;

  var randomNumber = Math.floor(Math.random() * data.length);
  var words = data[randomNumber];

  document.getElementById("score").innerHTML = "";

  document.getElementById("board").innerHTML =
    '<center><table class="word"><tbody><tr><td> &#10229 <br />' +
    words[0] +
    "</td><td> &#10230 <br />" +
    words[1] +
    "</td></tr></tbody></table></center>";
}

//enable pressing 'Enter' on seed field
document.getElementById("seed").onkeypress = function (e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == "13") {
    // Enter pressed
    fire();
    return false;
  }
};
