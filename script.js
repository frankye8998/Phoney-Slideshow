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


Ssettings = httpGet("settings.txt").split(/\r?\n/);
for(var i = 0; i < Ssettings.length; i++) {
  arguments = Ssettings[i].split(" ");
  switch (arguments[0]) {
    case "title":
      title(arguments.slice(1));
      break;
    case "background-colour":
      background(arguments.slice(1));
      break;
    }
  }
}

window.onload = main;
