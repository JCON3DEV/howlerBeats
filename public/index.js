const requirejs = require("requirejs");
const { Howl, Howler } = require("howler");

var sound = new Howl({
  src: ["resources/sounds/AltSD6.wav"],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log(`Finished Howl!`);
  }
});

sound.play();
