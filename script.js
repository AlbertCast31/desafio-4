// Se genera un número aleatorio entre 0 y 10
let numeroAleatorio = Math.floor(Math.random() * 11) ;
let intentos = 3;


// Creamos una función principal que verifica el número ingresado por el usuario

function verificarNumero(){
    let entradaUsuario = document.getElementById("entrada").value;
    let mensaje = document.getElementById("mensaje") ;
    let ganador = document.getElementById("ganador");
    document.getElementById("entrada").value = "" ;

    // Se hace validación de entrada vacía o no numérica
    if (entradaUsuario === "" || isNaN(entradaUsuario)){
        mensaje.textContent = "Por favor, introduce un número válido entre 0 y 10." ;
        return ;
    }
    
    entradaUsuario =parseInt(entradaUsuario);

    // Se hace la validación de rango
    if (entradaUsuario < 0 || entradaUsuario > 10){
        mensaje.textContent ="El número debe estar entre 0 y 10.";
        return;
    }

    // Se hace  la comprobación de acierto
    if (entradaUsuario ===numeroAleatorio){
        ganador.textContent =`${numeroAleatorio}`;
        mensaje.textContent ="¡Felicidades! Has adivinado el número.";
        setTimeout(reiniciarJuego, 3000); // Reiniciamos el juego después de 3 segundos
        return;
    
    } else {
        intentos--;
        if (intentos > 0){
            let intentoTexto= intentos ===1 ? "intento" : "intentos"; // cuando ya queda 1 intento lo definimos a singular
            let mensajeTexto=intentos=== 1 ? "Te queda" : "Te quedan";
            mensaje.textContent =`Incorrecto.  ${mensajeTexto}  ${intentos} ${intentoTexto}.`;
        } else {
            mensaje.textContent =`Perdiste. El número era ${numeroAleatorio}.`;
            setTimeout(reiniciarJuego, 3000);
        }
    }
}
// Creamos una función que reinicia el juego generando un nuevo número aleatorio
function reiniciarJuego(){
    numeroAleatorio =Math.floor(Math.random() * 11);
    intentos = 3;
    document.getElementById("mensaje").textContent ="";
    document.getElementById("ganador").textContent ="";
}
