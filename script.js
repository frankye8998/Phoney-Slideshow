function onOpen(evt) {
    console.log("CONNECTED");
}

function onClose(evt) {
    console.log("DISCONNECTED");
}

function onMessage(evt) {
    console.log(evt.data);
    if (evt.data == ">") {
      next();
    }
    else if (evt.data == "R") {
      restart();
    }
    else {
      console.log("Command not recognized!");
    }

}

function onError(evt) {
    console.log("ERROR: " + evt.data);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function title(Stitle) {
  document.getElementsByTagName("title")[0].innerText = Stitle;
  if (document.getElementsByTagName("title")[0].innerText == Stitle) {
    return 0;
  }
  return 1;
}

function redirect(Slocation) {
  window.location.href = Slocation;
}

function background(Scolor) {
  document.body.style.backgroundColor = Scolor;
  if(document.body.style.backgroundColor == Scolor) {
    return 0;
  }
  return 1;
}

function main() {


  var wsUri = prompt();
  console.log("Server: " + wsUri);
  function connectWebSocket(){
      websocket = new WebSocket(wsUri);
      websocket.onopen = function(evt) { onOpen(evt) };
      websocket.onclose = function(evt) { onClose(evt) };
      websocket.onmessage = function(evt) { onMessage(evt); return false; };
      websocket.onerror = function(evt) { onError(evt) };
  }

  connectWebSocket();

  Ssettings = httpGet("settings.txt").split(/\r?\n/);
  for(var i = 0; i < Ssettings.length; i++) {
    arguments = Ssettings[i].split(" ");
    switch (arguments[0]) {
      case "title":
        title(arguments.slice(1).join(" "));
        break;
      case "background-colour":
        background(arguments.slice(1).join(" "));
        break;
    }
  }
}

window.onload = main;
