const botonesNumeros = document.querySelectorAll('.num');
const botonesOperaciones = document.querySelectorAll('.operation');
let pantalla = document.getElementById("input");
let display = "";

botonesNumeros.forEach(numero => {
  numero.addEventListener('click', () => {
    display += numero.innerHTML;
    pantalla.innerHTML = `${display}`;  
  });
})

botonesOperaciones.forEach(operation => {
  operation.addEventListener('click', () => {
      
  });
})

function limpiarPantalla() {
  pantalla.innerHTML = "";
  display = "";
}
