const botonesNumeros = document.querySelectorAll(".num");
const botonesOperaciones = document.querySelectorAll(".operation");
let pantalla = document.getElementById("input");
let equal = document.getElementById("equal");

//variables para las operaciones
let anterior = "", actual = "";
let muestra = "";
let op;

botonesNumeros.forEach((numero) => {
  numero.addEventListener("click", () => {

  });
});

botonesOperaciones.forEach((simbolo) => {
  simbolo.addEventListener("click", () => {
    
  });
});

// equal.forEach(() => {
//   numero.addEventListener("click", () => {
//     console.log(equal.innerHTML);
//   });
// });


function limpiarPantalla() {
  pantalla.innerHTML = "";
  disply = "";
}
