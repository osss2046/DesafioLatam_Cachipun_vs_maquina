let cantidad_jugadas = Number(prompt("ingrese la cantidad de intentos: "));
let jugada_humano;
let jugada_computador;
let cont_humano=0;
let cont_computador=0;
for(let i = 0; i < cantidad_jugadas; i++){
    jugada_humano = prompt("ingrese 'Piedra', 'Papel' o 'Tijera'");
    logica_computadora();

    if ((jugada_humano=='Piedra' && jugada_computador == 'Tijera') || 
    (jugada_humano=='Papel' && jugada_computador=='Piedra') ||
    (jugada_humano=='Tijera' && jugada_computador=='Papel') ){
        alert(`La maquina ha obtenido ${jugada_computador}, por lo tanto Ganas tu`) // resumen del juego y resultado
        cont_humano++;
    }
    if ((jugada_computador=='Piedra' && jugada_humano == 'Tijera') || 
    (jugada_computador=='Papel' && jugada_humano=='Piedra') ||
    (jugada_computador=='Tijera' && jugada_humano=='Papel') ){
        alert(`La maquina ha obtenido ${jugada_computador}, por lo tanto Gana la maquina`) // resumen del juego y resultado
        cont_computador++;
    }
    if (jugada_computador==jugada_humano){
        alert(`La maquina ha obtenido ${jugada_computador}, por lo tanto es Empate`) // resumen del juego y resultado
    }  
}
function logica_computadora(){
    jugada_computador = Math.floor(Math.random()*3)
    switch(jugada_computador){
        case 0:
            return jugada_computador ='Piedra';
            
        case 1:
            return jugada_computador = 'Papel'
        case 2:
            return jugada_computador='Tijera'
    }
}

if (cont_computador>cont_humano){
    document.write("<h1>has perdido el juego</h1> <br>")
    document.write("puntos humano: "+cont_humano+"<br>")
    document.write("puntos maquina: "+cont_computador+"<br>")
}
if (cont_computador<cont_humano){
    document.write("<h1>Felicidades! has ganado el juego</h1>")
    document.write("puntos humano: "+cont_humano+"<br>")
    document.write("puntos maquina: "+cont_computador+"<br>")
}
if (cont_computador==cont_humano){
    document.write("<h1>Han empatado</h1>")
    document.write("puntos humano: "+cont_humano+"<br>")
    document.write("puntos maquina: "+cont_computador+"<br>")
}
