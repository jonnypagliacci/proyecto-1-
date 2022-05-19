// Función Interpretación de Presión Arterial

let getData = function(){
    
    let pS = document.getElementById("pS").value;
    let pD = document.getElementById("pD").value;

    function inicioDelProceso(){
            tensiónArterial(pS,pD);
            document.getElementById("pS").value = "";
            document.getElementById("pD").value = "";
            document.getElementById("pS").focus();
            console.log(pS + "/" + pD + " " + "mmHg");
    }

    function pError(){
        console.log("Dato incorrecto");
            document.getElementById("pS").value = "";
            document.getElementById("pD").value = "";
            document.getElementById("pS").focus();
    }

    function tA(pS,pD){
        if(pS <= 120, pD <= 80){
            console.log("Presión arterial óptima, Evaluación anual");
        }else if(pS <= 134, pD <= 84){
            console.log("Valorar la presión arterial por 7 días seguidos");
        }else{
            tensión135(pS,pD);
        }
    } 
    function tensiónArterial (pS,pD){
        if(pS < 135, pD < 85){
            tA(pS,pD);
        }else {
            tensión135(pS,pD);
        }
    }

    function tensión135(pS,pD){
        if(pS <= 149, pD <= 109){
            console.log("Diagnóstico de HAS");
        }else if(pS >= 150, pD >= 110){
            console.log("Cita con médico internista");
        }
    }

    if (pS == "") {
        console.log("Ingresa el valor de la presión sistólica al campo por favor");
        document.getElementById("pS").focus();
    } else {
        if (pD == "") {
            console.log("Ingresa el valor de la presión diastólica al campo por favor");
            document.getElementById("pD").focus();
        }else if(pS <= 20, pD <= 20){
            pError();
        }else if(pD >= 170){
            pError();
        }else if(pS <= 80, pD <= 60){
            console.log("Revalorar presión en el otro brazo, si está correcto enviar a urgencias por hipotensión arterial");
        }else if(pS >= 150){
            console.log("Diagnóstico de HAS, Probable hipertensión sistólica aislada");
        }else if(pD >= 150, pS >= 230){
            pError();
        }else{
            inicioDelProceso()
        }
    }
}





