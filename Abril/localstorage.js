function guardar() {
    
    let  recordatorio= document.getElementById("notas").value;
 

    let dataUser = { 'notas':recordatorio };
    localStorage.setItem("informacion", JSON.stringify(dataUser));
}

function mostrarDatos() {
    if(localStorage.getItem("informacion")){
    let datosUsuario = JSON.parse(localStorage.getItem("informacion"));
    alert( datosUsuario.notas);}
    else{alert("no hay ninguna nota guardada");}
}