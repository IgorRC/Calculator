const botonesNumeros = document.querySelectorAll('.num');
const botonesOperaciones = document.querySelectorAll('.operation');
let pantalla = document.getElementById("input");
let disply = "";
let anterior, actual;
let operation;

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => {
      console.log(boton.innerHTML);
      
      pantalla.innerHTML = `${disply}`;
      if(operation != null){
        anterior += boton.innerHTML;
      }
  });
})

function isHaveOperation(op) {
    if(op != null){
        re
    }
}



botonesOperaciones.forEach(boton => {
  boton.addEventListener('click', () => {
      operation = boton;
  });
})
