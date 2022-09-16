var boton= document.getElementById('boton');

function solicitaComentario(){
    prompt("Motivo de cancelación:","")
}
boton.addEventListener('click',solicitaComentario,true);