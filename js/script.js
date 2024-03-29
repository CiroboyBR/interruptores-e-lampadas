 
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

    var respSala1 = parseInt(document.getElementById('respSala1').value) 
    var respSala2 = parseInt(document.getElementById('respSala2').value)
    var respSala3 = parseInt(document.getElementById('respSala3').value)
    
    var salas = [false, false, false] 
    reiniciaJogo()
    
    function verificaResposta(){
        respSala1 = parseInt(document.getElementById('respSala1').value) 
        respSala2 = parseInt(document.getElementById('respSala2').value)
        respSala3 = parseInt(document.getElementById('respSala3').value)

        if (respSala1 == interruptores[0] && respSala2 == interruptores[1] && respSala3 == interruptores[2]){
            Swal.fire("Você acertou!");
            reiniciaJogo()

        }
        else {
            Swal.fire("Você errou!");
            reiniciaJogo() 

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

    function debuga(){
        console.log('A: ', interruptores[0])
        console.log('B: ', interruptores[1])
        console.log('C: ', interruptores[2])

        console.log('R1: ', parseInt(document.getElementById('respSala1').value) )
        console.log('R2: ', parseInt(document.getElementById('respSala2').value) )
        console.log('R3: ', parseInt(document.getElementById('respSala3').value) )
    }

    function reiniciaJogo(){
        shuffleArray(interruptores)
        intA = false
        intB = false
        intC = false
        qtd_visitas = 2

        respSala1 = parseInt(document.getElementById('respSala1').value) 
        respSala2 = parseInt(document.getElementById('respSala2').value)
        respSala3 = parseInt(document.getElementById('respSala3').value)
        
        salas = [false, false, false] 

        document.getElementById('intA').innerHTML = "OFF"
        document.getElementById('intA').style.backgroundColor = "red"
        document.getElementById('intB').innerHTML = "OFF"
        document.getElementById('intB').style.backgroundColor = "red"
        document.getElementById('intC').innerHTML = "OFF"
        document.getElementById('intC').style.backgroundColor = "red"

        // console.log(interruptores)
        // console.log(salas)

    }