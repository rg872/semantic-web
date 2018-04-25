document.onload = function() {epic()};

function epic() {
  var audio = new Audio('./audio/epic-sax-guy.mp3');
  audio.play();
}

function generateTopic() {
  var index = Math.floor(Math.random() * topics.length - 1);
  var display = document.getElementById('display');
  display.innerHTML = '<form> <input id="displayNew" type="text" value="' + topics[index] + '" readonly> </form>';
}
