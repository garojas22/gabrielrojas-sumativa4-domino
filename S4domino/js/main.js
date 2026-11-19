// Carrusel de imagenes
var imagenes = document.querySelectorAll(".carrusel img");
var actual = 0;

function mostrar(n) {
  imagenes[actual].classList.remove("activa");
  actual = (n + imagenes.length) % imagenes.length;
  imagenes[actual].classList.add("activa");
}

if (imagenes.length > 0) {
  document.getElementById("siguiente").onclick = function () { mostrar(actual + 1); };
  document.getElementById("anterior").onclick = function () { mostrar(actual - 1); };
  setInterval(function () { mostrar(actual + 1); }, 4000);
}

// Mensaje al enviar el formulario
var formulario = document.getElementById("registro");
if (formulario) {
  formulario.onsubmit = function (e) {
    e.preventDefault();
    document.getElementById("respuesta").textContent = "¡Listo! Tu inscripción fue registrada (torneo ficticio).";
    formulario.reset();
  };
}
