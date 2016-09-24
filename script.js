var gameInput = $("#bot-input");
var gameOutput  = $("#bot-output");
gameInput.keydown(function(keydownEvent) {  
  // the key code for enter is 13
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {    
    if (text === "hello") {
      gameOutput.html("Hi there!");
    }
}

