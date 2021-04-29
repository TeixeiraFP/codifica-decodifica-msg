//variáveis
var botaoInicio = document.querySelector(`#btnInicio`) //usando
var botaoSelect = document.querySelector(`#campoSeleciona`) //usando

// var cesarSelect = document.querySelector(`#optCodCesar`)
// var base64Select = document.querySelector(`#optBase64`)
// var inputIncremento = document.querySelector(`#incrementoInvisivel`)

var codificar = document.querySelector(`#inputCodificar`) //usando
var decodificar = document.querySelector(`#inputDecoficar`)//usando
var submitCod = document.querySelector(`#codificarMsg`)// usando
var submitDecod = document.querySelector(`#decodificarMsg`)// usando

var escolha = document.querySelector(`#codificaOuDecodifica`)

var resposta = document.querySelector(`#recebeResposta`)

//eventos
//primeiro evento para aparecer o formulário
botaoInicio.addEventListener(`click`, function(event){
    event.preventDefault()
    formulario.classList.remove(`invisivel`)
})
//evento de selecionar as opções de codificação se é cifra de cesar ou base 64
botaoSelect.addEventListener(`change`, function(event){
    
    if (botaoSelect.value === "codCesar"){
        incrementoInvisivel.classList.remove(`incremento-invisivel`)
    }

    else if(botaoSelect.value === "base64"){
        incrementoInvisivel.classList.add(`incremento-invisivel`)
    }
})
// evento que aprece o botão de codificar ou decodificar, troca o conteudo do texto dentro do botão
codificar.addEventListener(`click`, function(event){
    codificarMsg.classList.remove(`codifica-invisivel`)
    decodificarMsg.classList.add(`decodifica-invisivel`)
})

decodificar.addEventListener(`click`,function(event){
    decodificarMsg.classList.remove(`decodifica-invisivel`)
    codificarMsg.classList.add(`codifica-invisivel`)

})
//evento que faz com que as funçoes aconteçam
submitCod.addEventListener(`click`, function(event){
    event.preventDefault()
    if(botaoSelect.value === "codCesar"){
        codificaCesar()  
    }
    if (botaoSelect.value === "base64"){
        var codificandoMsg = btoa(msgCodifica.value)
        console.log(codificandoMsg)
        codificandoMsg.innerHTML = resposta 
    }
})
submitDecod.addEventListener(`click`, function(event){
    event.preventDefault()
    if(botaoSelect.value === "codCesar"){
        decodificaCesar()  
    }
    if (botaoSelect.value === "base64"){
        var decodificandoMsg = atob(msgCodifica.value)
        resposta = decodificandoMsg.innerHTML
        console.log(decodificandoMsg)
    }
})
//funcões
function codificaCesar(){
    var incremento = document.querySelector(`#incrementoCesar`).value
    var inc = parseInt(incremento)
    var msgCodifica = document.querySelector(`#msgCodifica`).value
    console.log (incremento)
    var mensagemCesar = msgCodifica.split("")
    var arrNumVazio = []
    var arrMsgCodVazio = []
    var msgFinal = ""
    
    for (var i = 0; i < mensagemCesar.length; i++){
        arrNumVazio.push(mensagemCesar[i].charCodeAt() + inc)
       console.log(arrNumVazio)
    }    
    for (var j = 0; j < arrNumVazio.length; j++){
        arrMsgCodVazio.push(String.fromCharCode(arrNumVazio[j]))  
    }
     msgFinal = arrMsgCodVazio.join("")  
     console.log(msgFinal) 
}
function decodificaCesar(){
    var incremento = document.querySelector(`#incrementoCesar`).value
    var inc = parseInt(incremento)
    var msgCodifica = document.querySelector(`#msgCodifica`).value
    var mensagemCesar = msgCodifica.split("")
    var arrNumVazio = []
    var arrMsgCodVazio = []
    var msgFinal = ""
    
    for (var i = 0; i < mensagemCesar.length; i++){
        arrNumVazio.push(mensagemCesar[i].charCodeAt() - inc)
       console.log(arrNumVazio)
    }    
    for (var j = 0; j < arrNumVazio.length; j++){
        arrMsgCodVazio.push(String.fromCharCode(arrNumVazio[j]))         
    }
     msgFinal = arrMsgCodVazio.join("")  
     console.log(msgFinal) 
}


