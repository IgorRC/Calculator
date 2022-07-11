const botonesNumeros = document.querySelectorAll('.num');
const botonesOperaciones = document.querySelectorAll('.operation');

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => {
      console.log(boton.innerHTML);
  });
})

botonesOperaciones.forEach(boton => {
  boton.addEventListener('click', () => {
      console.log(boton.innerHTML);
  });
})