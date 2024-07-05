
let randonNum = generarNumeroAleatorio();
let numIntentos = 0;
let listaNumerosSorteados = []	;
let numeroMaximo = 100;


function intentoUsuario() {
  let entrada = parseInt(document.getElementById('numUsuario').value);

  if (entrada == randonNum) {
    numIntentos++;

    asignarTextoElemtor('p', `"Felicidades has ganado en : ${numIntentos} intentos"`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intento').setAttribute('disabled', 'true');
   
  } else {
    numIntentos++;
    asignarTextoElemtor('p', `${entrada} ${randonNum > entrada ? ' es menor que numero aleatorio' : ' es mayor que numero aleatorio'}  `);
    
  }
  limpiar();
  
}

function asignarTextoElemtor(elemto, texto) {
  let elementoHTML = document.querySelector(elemto);
  elementoHTML.innerHTML = texto;


}
function generarNumeroAleatorio() {
 let numeroGenerado =  parseInt(Math.random() * numeroMaximo) + 1;

 if(listaNumerosSorteados.length == numeroMaximo ){
 asignarTextoElemtor('p', 'Se han agotado los numeros disponibles');

 }else{

  if(listaNumerosSorteados.include(numeroGenerado)){
    return generarNumeroAleatorio();
   
    }else{
   
     listaNumerosSorteados.push(numeroGenerado);
     return numeroGenerado;
    }
 }

}
function limpiar(){
document.querySelector('#numUsuario').value = '';;

}
function reiniciar(){
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
  document.getElementById('intento').removeAttribute('disabled');
  limpiar();
  componentesIniciales(); 
}
function componentesIniciales(){
  asignarTextoElemtor('h1', 'Adivina el numero secreto');
  asignarTextoElemtor('p', `Adivina el numero entre el 1 al ${numeroMaximo}`);
  randonNum = generarNumeroAleatorio();
  numIntentos = 1;
}

componentesIniciales();

