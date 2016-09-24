
var gameInput = $("#bot-input");
var gameOutput  = $("#bot-output");
gameInput.keydown(function(keydownEvent) {
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");   
  }
})


gameOutput.html("🤖️🤖️")

function parseText(text) {      
  if (text === "Good bye") {
    gameOutput.html("Bye!");
  }else if (text==="name?") {
    gameOutput.html("All powerful pizza Bot")
  } else if (text === "robot come out!") {
    gameOutput.html("🤖️🤖️")
  } else if (text==="move"){
    gameOutput.animate({top:500}); 
  }
}
