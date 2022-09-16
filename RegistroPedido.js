
var boton= document.getElementById('boton');

function comparaFechas(){
    var fechaIngresada = document.getElementById('fechaP').value; 
    
    var f= new Date();

    var mes= (f.getMonth() + 1).toString();
    if (mes.length <= 1){
        mes = "0" + mes;
    }

    var dia= f.getDate().toString();
    if (dia.length <= 1){
        dia = "0" + dia;
    }

    let fechaActual= f.getFullYear() + "-" + mes + "-" + dia;

    if (fechaIngresada < fechaActual){
        alert('La fecha ingresada no es la actual');
    }

    else if (fechaIngresada > fechaActual){
        alert('La fecha ingresada no es la actual');
    }
   
    else{
        alert('Se registró correctamente');
    }
    
}

boton.addEventListener('click',comparaFechas,true);


