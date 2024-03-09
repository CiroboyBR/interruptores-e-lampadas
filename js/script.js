 
    Swal.fire({
        title: "Problema das Lâmpadas",
        html: '<div style="text-align: left;">Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. <br><br>Da sala dos interruptores você não consegue ver as lâmpadas, tendo apenas duas (02) oportunidades de ir até as salas verificar o estado das lampadas, mas pode ligar e desligar os interruptores quantas vezes quiser. <br><br>Seu objetivo é descobrir qual interruptor controla qual lâmpada. Você pode verificar duas salas antes de enviar sua resposta.</div>'
    });
    var interruptores = new Array(1,2,3)
    shuffleArray(interruptores)
    var intA = false
    var intB = false
    var intC = false
    var qtd_visitas = 2

    var salas = [false, false, false] 
    console.log(interruptores)
    console.log(salas)
    
    function verificaResposta(){
        respSala1 = document.getElementById('respSala1').value
        respSala2 = document.getElementById('respSala2').value
        respSala3 = document.getElementById('respSala3').value
        if (respSala1 == interruptores[0] && respSala2 == interruptores[1] && respSala3 == interruptores[2]){
            Swal.fire("Você acertou!");
        }
        else {
            Swal.fire("Você errou!");
        }
    }

    function mostraSala(numeroSala){
        if(qtd_visitas > 0){
            if(salas[numeroSala] == false){
                Swal.fire("A luz está desligada")
                qtd_visitas--
            }
            else{
                Swal.fire("A luz está ligada")
                qtd_visitas--
            }

            document.getElementById('qtdVisitas').innerHTML = "VISITAS DISPONÍVEIS: " + qtd_visitas
        } else{
            Swal.fire('QTD de visitas excedidas. Envie sua resposta.')
        }
    }

    function acionaInterruptor(interruptor){
        if(document.getElementById(interruptor).style.backgroundColor == "red"){
            document.getElementById(interruptor).style.backgroundColor = "green"
            document.getElementById(interruptor).innerHTML = "ON"
            if(interruptor == "intA"){
                salas[interruptores[0] - 1] = true
            } else if(interruptor == "intB"){
                salas[interruptores[1] - 1] = true
            } else if(interruptor == "intC"){
                salas[interruptores[2] - 1] = true
            }
        }
        else{
            document.getElementById(interruptor).style.backgroundColor = "red"
            document.getElementById(interruptor).innerHTML = "OFF"
            if(interruptor == "intA"){
                salas[interruptores[0] - 1] = false
            } else if(interruptor == "intB"){
                salas[interruptores[1] - 1] = false
            } else if(interruptor == "intC"){
                salas[interruptores[2] - 1] = false
            }
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }