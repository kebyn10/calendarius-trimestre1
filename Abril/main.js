let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".tt")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalc = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault()
    modalc.style.opacity = "1";
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");


});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
        modalc.style.opacity = "0";
        modalc.style.visibility = "hidden";
    }, 600)
})

window.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target == modalc) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalc.style.opacity = "0";
            modalc.style.visibility = "hidden";
        }, 600)
    }
})
//validacion

function verificarRespuestas() {
    let total = 3;

    let formu = document.forms["formulario"]
    let respuestas = ["correcto"]
    for (let index = 1; index <= total; index++) {
        if (formu["respuesta"].value == null || formu["respuesta"].value == "") {
            alert("Seleccione una respuesta" + i)
            return false;
        } else {
            if (formu["respuesta"].value == respuestas[0]) {
                alert("respondiste correctamente");
                return false;
            } else if (formu["respuesta"].value != respuestas[0]) {
                alert("la respuesta es incorrecta");
                return false;
            }
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ''
    return false

}
(function(){
    let actualizarHora = function(){
        let fecha = new Date(),
         horas = fecha.getHours(),
         ampm,
         minutos = fecha.getMinutes(),
         segundos = fecha.getSeconds()


    let pHoras = document.getElementById('horas'),
      pAMPM = document.getElementById('ampm'),
      pMinutos = document.getElementById('minutos'),
      pSegundos = document.getElementById('segundos');


         if(horas >= 12){
             horas = horas - 12;
             ampm = 'PM';
         }else{
             ampm = 'AM';
         }
          
        if(horas == 0){
            horas = 12;
        };
         
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10){ minutos = "0" + minutos};
        if(segundos < 10){ segundos = "0" + segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;


       
    };



    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000);

}())