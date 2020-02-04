var audioAddress = [
  "http://download.quranicaudio.com/verses/Sudais/mp3/003001.mp3",
  "http://download.quranicaudio.com/verses/Sudais/mp3/003002.mp3",
  "http://download.quranicaudio.com/verses/Sudais/mp3/003003.mp3",
  "http://download.quranicaudio.com/verses/Sudais/mp3/003004.mp3",
  "http://download.quranicaudio.com/verses/Sudais/mp3/003005.mp3",
  "http://download.quranicaudio.com/verses/Sudais/mp3/003006.mp3"
];

// ------------------------------------------------------------------------------->>
// Button Click
///-$("button").click(playAll);

//
  ///-function playAll() {
  Promise.all(audioAddress.map(function(url) {
    return new Promise(function(resolve) {
      var audio = new Audio(url);
      //AudPlayer
      //var audio = document.getElementById("AudPlayer");
      //audio.src=url;
      audio.oncanplay = function() {
        resolve(audio);
      }
    })
  }))
  .then(function(data) {
    data.reduce(function(promise, a, index) {
      return promise.then(function() {
        return new Promise(function(resolve) {
          a.onended = resolve;
          a.play();
          $("p > span").removeClass("playing");
          $("p > span:nth-child(" + (index + 1) + ")")
          .addClass("playing");
        })
      })
    }, Promise.resolve())
  })
///-};
// -------------------------------------------------------------------------------||
// Button Click
