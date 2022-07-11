const botonesNumeros = document.querySelectorAll('.num');
const botonesOperaciones = document.querySelectorAll('.operation');
let pantalla = document.getElementById("input");
let disply = "";


botonesNumeros.forEach(numero => {
  numero.addEventListener('click', () => {
    console.log(numero.innerHTML);  
    disply += numero.innerHTML;
    pantalla.innerHTML = `${disply}`;  
  });
})



botonesOperaciones.forEach(operation => {
  operation.addEventListener('click', () => {
      
  });
})

function limpiarPantalla() {
  pantalla.innerHTML = "";
  disply = "";
}