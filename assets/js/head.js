document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var descriptions = [ "programmer", "designer", "explorer"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) + '<span id="blinker"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
        }, 80); //how fast you type
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call backspace before calling the callback
      setTimeout(function() {
          backspace(text, text.length);
          setTimeout(fnCallback, 1000);
      }, 2000); //2000 is the time to wait before erasing 
      // call callback after timeout


    }
  }

  // start a typewriter animation for a text in the descriptions array
   function StartTextAnimation(i) {
     if (typeof descriptions[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
      }, 800);
     }
     // check if descriptions[i] exists
    if (descriptions[i] != null && i < descriptions[i].length) {
      // text exists! start typewriter animation
     typeWriter(descriptions[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }

    function backspace(text, j) {
      if (j > 0) {
          document.querySelector("h1").innerHTML = text.substring(0, j-1) + '<span id="blinker"></span>';
          setTimeout(function() {
              backspace(text, j-1);
          }, 60);
      } else {
          setTimeout(4000);
      }
  }

  // start the text animation
  StartTextAnimation(0);
});
