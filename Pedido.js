
var boton= document.getElementById('boton');

function validaHoras(){
    var horaInicio = document.getElementById('horaInicio').value; 
    console.log(horaInicio);
    var horaFin = document.getElementById('horaFin').value;

    var abre= "09:00";
    var cierra= "17:00";
    console.log(abre);

    if (horaInicio > abre  && horaInicio < cierra){
        if (horaFin > abre &&  horaFin < cierra){
            alert('Pedido registrado!');        
        }
        else {
            alert('El horario de atención es de 09:00 a 17:00');
        } 
    }
    else {
            alert('El horario de atención es de 09:00 a 17:00');
        } 
    }

boton.addEventListener('click',validaHoras,true);
   