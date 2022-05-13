document.getElementById("respuesta").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("respuesta").innerHTML = "Que no me clickees!";
}

document.getElementById("segundaRespuesta").ondblclick = function() {myFunction()};

function myFunction() {
    document.getElementById("segundaRespuesta").innerHTML = "NO TE LO VOY A VOLVER A REPETIR";
  }
  