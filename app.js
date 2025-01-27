//Declara la lista de numeros que ya han salido
let listaNumerosSorteados = [];
//valor maximo del juego
let numeroMaximo = 10;
// Asigna el valor del numero secreto
let numeroSecreto = generarNumeroSecreto();
// Inicializa el número de intentos
let intentos = 0;
let imagen = document.getElementById('imagen');
    imagen.style.display = 'none'; // Oculta la imagen
   
function mostrarImagen() {
    let imagen = document.getElementById('imagen');
            imagen.style.display = 'block'; // Oculta la imagen
}


// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    // Seleccionar el elemento HTML
    let elementoHTML = document.querySelector(elemento);
    // Asignar el texto al elemento HTML
    elementoHTML.innerHTML = texto; 
    return;
}
// Función para verificar el intento del usuario
function verificiarIntento() {
     // Obtener el valor del usuario
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      // Verificar si el número del usuario es igual al número secreto
     if (numeroDeUsuario === numeroSecreto) {
        // Mostrar mensaje de felicitaciones y el numero de veces que lo intento
       asignarTextoElemento('p', `¡Felicidades! Has adivinado el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        
        // Habilitar el botón de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

        mostrarImagen();
         // Cambiar la imagen y hacerla de pantalla completa
         let imagen = document.getElementById('imagen');
         imagen.src = './img/maze.png';
         imagen.alt = '¡Felicidades!';
         imagen.classList.add('fullscreen'); // Añade la clase para pantalla completa
     
        // Reproducir el audio
        let audio = document.getElementById('audio');
        audio.play();
        
        
      } else {
        // Verificar si el número del usuario es mayor o menor al número secreto
       if (numeroDeUsuario < numeroSecreto) {
          asignarTextoElemento('p', '¡Lo siento! El número secreto es mayor');
       } else { 
          asignarTextoElemento('p', '¡Lo siento! El número secreto es menor');
       }
       // Incrementar el número de intentos
       intentos++;
       // Limpiar la caja de texto
       limpiarCaja();    
     }
     return;
}
// Función para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
   
}


// Función para reiniciar el juego
function nuevaPartida() {
    condicionesIniciales();
    return;
} 
// Función para establecer las condiciones iniciales
function condicionesIniciales() {
 asignarTextoElemento('h1', 'Juego del número secreto');
 asignarTextoElemento('p', 'indica el número secreto entre 1 y 10');
 numeroSecreto = generarNumeroSecreto();
 intentos = 0;
 limpiarCaja();
 document.getElementById('reiniciar').setAttribute('disabled', true);
}
// Función para generar un número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si la lista de numeros sorteados tiene la cantidad maxima de elementos, se vacia
    if(listaNumerosSorteados.length === numeroMaximo){
            listaNumerosSorteados = [];

    } else {
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        //se vuelve a generar un numero
        return generarNumeroSecreto();
        } else {
        //se agrega el numero a la lista
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            }
        }

}
// Asignar el texto a los elementos HTML
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'indica el número secreto entre 1 y 10');