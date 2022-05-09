function cambio() {
    let fecha= new Date();
    if (fecha.getMonth() == 4){
        let caja = document.getElementById(`${fecha.getDate()}`);
        caja.classList.add("activo");
        contador=1;
    }
      
     
 
}
cambio()
